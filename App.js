import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login error - Code:", errorCode, "Message:", errorMessage);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(
        "Sign up error - Code:",
        errorCode,
        "Message:",
        errorMessage
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    top: 100,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default App;
