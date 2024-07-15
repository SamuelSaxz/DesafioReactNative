import { Button, Text, View } from "react-native";
import styles from "@/src/app/styles";
import theme from "@/src/theme";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import PhotoProfile from "@/src/components/PhotoProfile";
import { connect } from "react-redux";
import axios from "axios";
import { useState } from "react";

function Home({ searchUser, dispatch }: any) {
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSearch() {
    try {
      const response = await axios.get(`https://api.github.com/users/${data}`);
      dispatch({
        type: "SET_SEARCHUSER",
        payload: {
          id: response.data.id,
          avatar_url: response.data.avatar_url,
          name: response.data.name,
          email: response.data.email,
          bio: response.data.bio,
          followers: response.data.followers,
          following: response.data.following,
        }
      });
      const reposResponse = await axios.get(`https://api.github.com/users/${data}/repos`);
      dispatch({ type: "SET_SEARCHREPOSITORY", payload: reposResponse.data });
      router.push('/searchProfile');
    }
    catch (error: any) {
      if (error.response.data.status == '403') { // Máximo de Requests atingido. Tente novamente mais tarde.
        setError("Máximo de Requests atingido. Tente novamente mais tarde.");
      }
      else if (data.trim() == "") {
        setError("Por favor, digite o nome do usuário no GitHub.");
      }
      else {
        setError(data + " não foi encontrado!");
      }
    }
  }

  return (
    <View style={styles.container}>

      <View style={{
        width: "90%",
        flexDirection: "column",
        marginTop: 64,
        gap: 20,
      }}>

        <View style={styles.form}>
          <Text style={styles.label}>Procure outros Desenvolvedores</Text>
          <TextInput style={styles.input}
            onChangeText={(text) => { setData(text) }}
            placeholder="Digite o Nome do Usuário" />
          <Button title="Procurar Dev" onPress={handleSearch} />
        </View>
      </View>

      <View style={{
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
      }}>

        <View style={{
          width: "100%",
          gap: 20,
        }}>

          <Text style={[styles.text, { textAlign: "center" }]}>
            {
              message ? message : error ? error : ''
            }
          </Text>

        </View>
      </View>
      <View style={{
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
      }}>
        <Button title="LOGOUT" onPress={() => { dispatch({ type: "LOGOUT" }); setTimeout(() => router.replace("/"), 500) }} />
      </View>
    </View>
  );
}

export default connect((state: any) => ({
  searchUser: state.searchUser,
}))(Home);