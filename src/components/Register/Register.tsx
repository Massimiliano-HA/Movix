import React, { useState, useEffect, useCallback } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { styles } from "./Register.style.ts";
import { launchImageLibrary, MediaType } from "react-native-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./../../redux/reducers/userReducer.ts";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);

  const dispatch = useDispatch();

  const users = useSelector((state: any) => state.user.users);

  useEffect(() => {
    setNameError(username === "");
    setPasswordError(password.length < 3);
  }, [username, password]);

  const options = {
    title: "Select Avatar",
    mediaType: "photo" as MediaType,
  };

  const selectImage = () => {
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorMessage) {
        console.log("ImagePicker Error: ", response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImageUri = response.assets[0].uri;
        console.log(response.assets[0]);

        if (selectedImageUri) {
          setAvatar(selectedImageUri);
        } else {
          setAvatar(null);
          console.error("URI de l'image sélectionnée est undefined.");
        }
      }
    });
  };

  const handleRegistration = useCallback(() => {
    if (username === "") {
      setNameError(true);
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erreur", "Les mots de passe ne correspondent pas.");
      return;
    }
    if (password.length < 3) {
      setPasswordError(true);
      return;
    }

    const existingUser = users.find((user: any) => user.username === username);
    if (existingUser) {
      Alert.alert("Erreur", "Ce nom d'utilisateur est déjà utilisé.");
      return;
    }

    setPasswordError(false);
    dispatch(createUser({ username, password, avatar }));
    Alert.alert(
      "Inscription réussie",
      `Bonjour ${username}, votre mot de passe est le suivant : ${password}. Votre image : ${avatar}`
    );
  }, [username, password, avatar, confirmPassword, dispatch, users]);

  console.log("Utilisateurs enregistrés :", users);

  return (
    <KeyboardAvoidingView style={styles.sectionContainer} behavior="padding">
      <Text style={styles.sectionTitle}>Inscription</Text>
      {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="Nom d'utilisateur"
          placeholderTextColor="#BCBCBC"
          style={nameError ? styles.inputError : styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Mot de passe"
          placeholderTextColor="#BCBCBC"
          style={passwordError ? styles.inputError : styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Confirmer le mot de passe"
          placeholderTextColor="#BCBCBC"
          style={
            confirmPassword !== password ? styles.inputError : styles.input
          }
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={selectImage}>
          <Text style={styles.buttonText}>Sélectionner une image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
