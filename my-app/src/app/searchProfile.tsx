import { Button, Text, View } from "react-native";
import styles from "./styles";
import PhotoProfile from "@/src/components/PhotoProfile";
import theme from "@/src/theme";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";

function searchProfile({ user }: any) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.black,
    }}>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 64,
          gap: 20,
          padding: 12,
          backgroundColor: theme.colors.black,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Imagem do perfil */}
        <PhotoProfile style={{
          width: '100%',
          height: 400,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
          source={{ uri: (`${user.avatar_url}`) }} />

        {/* Menu para Seguidores e Seguindo */}
        <View style={{
          flexDirection: "row",
        }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              borderRightWidth: 1,
              borderRightColor: theme.colors.gray,
              padding: 12,
              paddingEnd: 24
            }}>
            <Text style={styles.text}>
              Seguidores
            </Text>
            <Text style={[styles.text, {
              fontSize: theme.fonts.size.xl,
              fontFamily: theme.fonts.fontFamily.regular,
              color: theme.colors.blue,
            }]}>
              {user.followers}
            </Text>
          </View>
          <View style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            padding: 12,
            paddingStart: 24
          }}>
            <Text style={styles.text}>
              Seguindo
            </Text>
            <Text style={[styles.text, {
              fontSize: theme.fonts.size.xl,
              fontFamily: theme.fonts.fontFamily.regular,
              color: theme.colors.blue,
            }]}>
              {user.following}
            </Text>
          </View>
        </View>

        <View style={{
          width: "95%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 12,
        }}>
          <Text style={[
            styles.text,
            {
              fontSize: theme.fonts.size.xxxl,
              fontFamily: theme.fonts.fontFamily.regular,
            }
          ]}>
            {user.name}
          </Text>
          <Text style={
            {
              fontSize: theme.fonts.size.xl,
              fontFamily: theme.fonts.fontFamily.regular,
              color: theme.colors.gray,
            }
          }>
            {user.email}
          </Text>
          <Text style={
            {
              fontSize: theme.fonts.size.xl,
              fontFamily: theme.fonts.fontFamily.regular,
              color: theme.colors.white,
            }
          }>
            Bio - {user.bio}
          </Text>
        </View>
        <View style={{
          width: "100%",
        }}>
          <Button title="Ver Repositórios" onPress={() => { router.push("searchRepository") }} />
        </View>
      </ScrollView >
    </View>
  );
}

export default connect((state: any) => ({user: state.searchUser}))(searchProfile);