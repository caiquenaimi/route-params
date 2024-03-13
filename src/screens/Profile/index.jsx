import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Title texto="Profile 🧑" />
      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Age: {user.age}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
