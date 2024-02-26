import { StyleSheet, Text, View } from "react-native";
import { Button } from "./components/Button";
import { TextInput } from "./components/TextInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Profissional React Native</Text>

      <TextInput autoCapitalize="none" placeholder="Digite seu e-mail" />
      <TextInput
        autoCapitalize="none"
        secureTextEntry
        placeholder="Digite sua senha"
      />

      <Button
        style={{ marginTop: 20 }}
        onPress={() => console.log("Entrar")}
        title={"Entrar"}
      />
      <Button
        style={{ marginTop: 10 }}
        onPress={() => console.log("Criar uma conta")}
        title="Criar conta"
        variant="secondary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
