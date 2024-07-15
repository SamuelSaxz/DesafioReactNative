// Functions React Native and Expo Router
import { Button, Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";

// components
import PhotoProfile from "@/src/components/PhotoProfile";
import theme from "@/src/theme";
import styles from "@/src/app/styles";

// Redux
import { connect } from "react-redux";

function Details({ repository }: any) {

  const data = repository;

  return (
    <>
      {
        data ?
          <View style={styles.container} key={data?.id}>
            <ScrollView contentContainerStyle={{
              gap: 16
            }}>
              <PhotoProfile style={{
                width: 400,
                height: 400,
              }}
                source={{ uri: (`${data?.owner?.avatar_url}`) }} />

              <Text style={[styles.text, {
                fontSize: theme.fonts.size.xxxl,
                textAlign: 'center',
                fontFamily: theme.fonts.fontFamily.regular,
              }]}>
                {data?.name}
              </Text>

              <Text style={styles.text}>Linguagem</Text>

              <Text style={[styles.text, {
                fontFamily: theme.fonts.fontFamily.regular,
                fontSize: theme.fonts.size.xl,
              }]}>
                {data?.language ? data?.language : data?.parent?.language}
              </Text>

              <Text style={styles.text}>Descrição</Text>

              <Text style={{
                color: theme.colors.white,
                fontSize: theme.fonts.size.xl,
              }
              }>
                {data?.description ? data?.description : 'Não há descrição'}
              </Text>

              <Button title="Link para o Repositório" onPress={() => { router.push({ pathname: data?.html_url }) }} />
            </ScrollView>
          </View>
          :
          <View style={styles.container}>
            <Text style={styles.text}>Carregando Conteúdo...</Text>
          </View>
      }
    </>
  );
}

export default connect((state: any) => ({
  repository: state.detailsRepository
}))(Details);