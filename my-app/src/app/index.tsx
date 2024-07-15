import { Button, Text, TextInput, View } from "react-native";
import styles from "@/src/app/styles";
import theme from "@/src/theme";
import { router } from "expo-router";

export default function Register() {
  return (
    <View style={styles.container}>
      {/* Introdução ao App */}
      <View style={{
        alignItems: "center",
        gap: 4,
      }}>
        <Text style={[
          styles.text,{
            fontSize: theme.fonts.size.xxl
          }]}>
          Bem - Vindo ao
        </Text>
        <Text style={[
          styles.text,{
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
          styles.text,{
            textAlign: "center",
            fontFamily: theme.fonts.fontFamily.regular
          }]}>
          Verifique Se o Usuário Existe no GitHub.
        </Text>

        {/* Formulário */}
        <View style={styles.form}>
          <Text style={styles.label}>Nome do Usuário no GitHub</Text>
          <TextInput style={styles.input}
            placeholder="Digite o nome do usuário" />
          <Button title="Verificar" onPress={() => router.replace("/home")} />
        </View>

        <Text style={[
          styles.text,{
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