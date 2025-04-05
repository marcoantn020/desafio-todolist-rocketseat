import {Text, TouchableOpacity, View} from "react-native";
import ExpoCheckbox from "expo-checkbox";

import Trash from '../../../assets/trash.svg'
import {styles} from "./styles";
import {TaskType} from "../../screens/Home";

interface TaskProps {
    task: TaskType,
    onRemove: (id: string) => void,
    onCheck: (id: string) => void
}

const Task = ({task, onRemove, onCheck}: TaskProps) => {
    return (
        <View style={styles.container}>
            <ExpoCheckbox
                onValueChange={() => onCheck(task.id)}
                color="#5E60CE"
                value={task.completed}
                style={styles.checkbox}
            />

            {!task.completed && <Text style={styles.text}>
                {task.task}
            </Text>}

            {task.completed && <Text style={styles.textDone}>
                {task.task}
            </Text>}

            <TouchableOpacity
                onPress={() => onRemove(task.id)}
                style={styles.trash}
            >
                <Trash height={40} width={40}/>
            </TouchableOpacity>
        </View>
    );
};

export default Task;