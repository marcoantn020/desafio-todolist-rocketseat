import {Text, View} from "react-native";
import {styles} from "./styles";
import {TaskType} from "../../screens/Home";

interface InfoProps {
    tasks?: TaskType[]
}

const Info = ({tasks}: InfoProps) => {
    const countCompleted = tasks?.filter(task => task.completed).length || 0
    const countTotal = tasks?.length || 0

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.textCreated}>
                    Criadas
                </Text>
                <Text style={styles.countdown}> {countTotal} </Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.textCompleted}>
                    Concluídas
                </Text>
                <Text style={styles.countdown}> {countCompleted} </Text>
            </View>
        </View>
    );
};

export default Info;