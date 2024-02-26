import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./components/Button";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [showCount, setShowCount] = useState(true);

  console.log("renderizou");

  //let count = 0;

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    setCount(count - 1);
    console.log(count);
  }

  function toggleCount() {
    setShowCount(!showCount);
  }

  return (
    <View style={styles.container}>
      {showCount && <Text style={styles.count}>{count}</Text>}

      <Button onPress={increment} title="+ 1" style={styles.buttonContainer} />
      <Button onPress={decrement} title="- 1" style={styles.buttonContainer} />
      <Button variant="secondary" onPress={toggleCount} title="show" />
    </View>
  );
}

const styles = StyleSheet.create({
  count: {
    fontSize: 30,
    marginBottom: 50,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
