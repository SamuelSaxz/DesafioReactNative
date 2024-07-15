import { Button, Text, View } from "react-native";
import styles from "@/src/app/styles";
import theme from "@/src/theme";
import { TextInput } from "react-native-gesture-handler";
import { Link } from "expo-router";
import PhotoProfile from "@/src/components/PhotoProfile";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{
        width: "90%",
        flexDirection: "column",
        gap: 20,
      }}>
        <View style={styles.form}>
          <Text style={styles.label}>Procure outros Desenvolvedores</Text>
          <TextInput style={styles.input}
            placeholder="Digite o Nome do Usuário" />
          <Button title="Procurar Dev" onPress={() => { }} />
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
            <Text style={[styles.text, {textAlign: "center"}]}>Devs Encontrados:</Text>
            <View style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              borderWidth: 1,
              borderTopColor: theme.colors.gray,
              borderLeftColor: theme.colors.gray,
              borderRightColor: theme.colors.gray,
              borderBottomColor: theme.colors.white,
              borderRadius: 4,
              padding: 12,
            }}>
              <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}>
                <PhotoProfile source={{ uri: "https://github.com/SamuelSaxz.png" }} />
                <Text style={[styles.text, {
                  fontSize: theme.fonts.size.base,
                  fontFamily: theme.fonts.fontFamily.regular,
                  width: "85%",
                }]}
                >
                  SamuelSaxz
                </Text>
              </View>
              <Button title="Ver Perfil" onPress={() => {}} />
            </View>
            <View style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              borderWidth: 1,
              borderTopColor: theme.colors.gray,
              borderLeftColor: theme.colors.gray,
              borderRightColor: theme.colors.gray,
              borderBottomColor: theme.colors.white,
              borderRadius: 4,
              padding: 12,
            }}>
              <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}>
                <PhotoProfile source={{ uri: "https://github.com/SamuelSaxz.png" }} />
                <Text style={[styles.text, {
                  fontSize: theme.fonts.size.base,
                  fontFamily: theme.fonts.fontFamily.regular,
                  width: "85%",
                }]}
                >
                  SamuelSaxz
                </Text>
              </View>
              <Button title="Ver Perfil" onPress={() => {}} />
            </View>
            <View style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              borderWidth: 1,
              borderTopColor: theme.colors.gray,
              borderLeftColor: theme.colors.gray,
              borderRightColor: theme.colors.gray,
              borderBottomColor: theme.colors.white,
              borderRadius: 4,
              padding: 12,
            }}>
              <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}>
                <PhotoProfile source={{ uri: "https://github.com/SamuelSaxz.png" }} />
                <Text style={[styles.text, {
                  fontSize: theme.fonts.size.base,
                  fontFamily: theme.fonts.fontFamily.regular,
                  width: "85%",
                }]}
                >
                  SamuelSaxz
                </Text>
              </View>
              <Button title="Ver Perfil" onPress={() => {}} />
            </View>
          </View>
          <Link href={"/"} style={styles.text}>Cadastro de Usuário</Link>
        </View>
    </View>
  );
}