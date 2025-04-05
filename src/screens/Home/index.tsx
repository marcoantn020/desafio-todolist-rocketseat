import {Alert, FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

import Info from "../../components/Info";
import {useState} from "react";

import 'react-native-get-random-values'
import { v4 as uuidv4 } from "uuid";

import Logo from '../../../assets/Logo.svg'
import Plus from '../../../assets/plus.svg'
import Clipboard from '../../../assets/Clipboard.svg'
import Task from "../../components/Task";

export type TaskType = {
    id: string;
    task: string;
    completed: boolean;
}

const Home = () => {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    const [task, setTask] = useState('');

    const handleAddTask = (task: string) => {
        if (task.trim() === '' || task.trim().length < 3) {
            Alert.alert("Preencha o campo corretamente", "A tarefa deve ter pelo menos 3 caracteres")
            return
        }
        const id = uuidv4()
        setTasks(prevState => [...prevState, {id, task, completed: false}])
        setTask('')
    }

    const handleRemoveTask = (id: string) => {
        Alert.alert("Remover tarefa", "Deseja realmente remover essa tarefa?", [
            {
                text: 'Sim',
                onPress: () =>
                    setTasks(prevState => prevState.filter(task => task.id !== id))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    const handleCheck = (id: string) => {
        const taskIndex = tasks.findIndex(task => task.id === id)
        const newTasks = [...tasks]
        newTasks[taskIndex].completed = !newTasks[taskIndex].completed
        setTasks(newTasks)
    }

    return (
        <View style={styles.container}>
            <View style={styles.brand}>
                <Logo/>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    value={task}
                    onChangeText={setTask}
                />

                <TouchableOpacity
                    onPress={() => handleAddTask(task)}
                    style={styles.button}
                >
                    <Plus/>
                </TouchableOpacity>
            </View>

            <Info tasks={tasks}/>

            {tasks.length < 1 ? (
                <View style={styles.boxTask}>
                    <Clipboard/>
                    <Text style={styles.textTaskTitle}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.textTaskSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
            ) : (
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Task
                            task={item}
                            onRemove={() => handleRemoveTask(item.id)}
                            onCheck={() => handleCheck(item.id)}
                            />
                    )}
                />
            )
            }

        </View>
    );
};

export default Home;