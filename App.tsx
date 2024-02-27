import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "./components/TextInput";

export default function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "maria@gmail.com",
    address: {
      country: "Brazil",
      city: "",
    },
  });

  function updateFirst(text: string) {
    const updateValues = { ...formValues, firstName: text };
    setFormValues(updateValues);
    console.log(formValues);
  }
  function updateLast(text: string) {
    setFormValues({ ...formValues, lastName: text });
  }

  // copia de um objeto aninhado
  function updateCity(text: string) {
    setFormValues({
      ...formValues,
      address: {
        ...formValues.address,
        city: text,
      },
    });
  }

  return (
    <View style={styles.container}>
      <TextInput value={formValues.firstName} onChangeText={updateFirst} />
      <TextInput value={formValues.lastName} onChangeText={updateLast} />
      <TextInput value={formValues.address.city} onChangeText={updateCity} />

      <Text style={styles.text}>
        {`${formValues.firstName} ${formValues.lastName}:\n${formValues.email} \n${formValues.address.country} - ${formValues.address.city}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 50,
    fontWeight: "bold",
    marginHorizontal: 10,
    textAlign: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
  },
});
