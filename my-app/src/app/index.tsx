import { Button, Text, TextInput, View } from "react-native";
import styles from "@/src/app/styles";
import theme from "@/src/theme";
import { Link, router } from "expo-router";
import { connect } from "react-redux";
import { useState } from "react";
import axios from "axios";

function Register({ user, dispatch }: any) {
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      const response = await axios.get(`https://api.github.com/users/${data}`);
      dispatch({
        type: "SET_USER", payload: {
          id: response.data.id,
          avatar_url: response.data.avatar_url,
          name: response.data.name,
          email: response.data.email,
          bio: response.data.bio,
          followers: response.data.followers,
          following: response.data.following,
        }
      });
      setMessage(data + " foi encontrado!");
      const reposResponse = await axios.get(`https://api.github.com/users/${data}/repos`);
      dispatch({ type: "SET_REPOSITORY", payload: reposResponse.data });
      setTimeout(() => {
        router.push("/home");
      }, 500);
    }
    catch (error: any) {
      if (error.response.data.status == '403') { // Máximo de Requests atingido. Tente novamente mais tarde.
        setError("Máximo de Requests atingido. Tente novamente mais tarde.");
      }
      else if (data.trim() == "") {
        setError("Por favor, digite o nome do usuário no GitHub.");
      } else {
        setError(data + " não foi encontrado!");
      }
    }
  }

  return (
    <View style={styles.container}>
      {/* Introdução ao App */}
      <View style={{
        alignItems: "center",
        gap: 4,
      }}>
        <Text style={[
          styles.text, {
            fontSize: theme.fonts.size.xxl
          }]}>
          Bem - Vindo ao
        </Text>
        <Text style={[
          styles.text, {
            fontSize: theme.fonts.size.xxxl
          }]}>
          Desafio React Native
        </Text>
      </View>

      {/* 
        View para Formulário - Aqui na verdade é um formulário de verificação de usuário que no fim faz 'login' no sistema. Assim salvando as informações do usuário para mostrar em outras telas.
      */}
      <View
        style={{
          width: "90%",
          flexDirection: "column",
          gap: 20,
          borderTopWidth: 1,
          borderColor: theme.colors.white,
          borderRadius: 4,
          paddingTop: 24,
        }}>

        {/* Texto de Introdução ao Formulário */}
        <Text style={[
          styles.text, {
            textAlign: "center",
            fontSize: theme.fonts.size.xxl,
            fontFamily: theme.fonts.fontFamily.regular
          }]}>
          Faça Login e ganhe acesso ao App.
        </Text>

        {/* Formulário */}
        <View style={styles.form}>
          <Text style={styles.label}>Usuário do GitHub</Text>
          <TextInput style={styles.input}
            onChangeText={(text) => { setData(text), setError("") }}
            placeholder="Digite o nome do usuário" />
          <Button title="Verificar"
            onPress={handleSubmit} />
        </View>
        {
          message &&
          <Text style={[
            styles.text, {
              fontSize: theme.fonts.size.base,
              fontFamily: theme.fonts.fontFamily.light,
              textAlign: "center",
            }]}>
            {message}
          </Text>
        }

        {
          error &&
          <Text style={[
            styles.text, {
              fontSize: theme.fonts.size.base,
              fontFamily: theme.fonts.fontFamily.light,
              color: theme.colors.red,
              textAlign: "center",
            }]}>
            {error}
          </Text>
        }

        <Text
          style={[
            styles.text, {
              fontSize: theme.fonts.size.base,
              fontFamily: theme.fonts.fontFamily.light,
              textAlign: "center",
            }]}>
          Não há Cadastro no GitHub? Faça <Link
            href={'https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home'}
            style={{
              color: theme.colors.blue,
              fontSize: theme.fonts.size.base,
            }}>
            Clicando Aqui
          </Link>
        </Text>

      </View>
      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 24,
      }}>
        <Text style={[
          styles.text, {
            fontSize: theme.fonts.size.base,
            fontFamily: theme.fonts.fontFamily.light,
            textAlign: "center",
          }]}>
          Feito por @SamuelSaxz
        </Text>
      </View>
    </View>
  );
}

export default connect((state: any) => ({ user: state.user }))(Register);

