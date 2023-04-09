import { StyleSheet, View, Image, Text } from "react-native";

export default function Header(){
    return (
        <View style={styles.header}>
            <Image source={require("D://Projects/react-native-planner/assets/img/palmtree.png")} style={styles.headerImage} />
            <Text style={styles.displayText}>Travel planner</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#D6F7A3"
    },
    headerImage: {
        width: 70,
        height: 70,
    },
    displayText: {
        fontSize: 26,
    }
});