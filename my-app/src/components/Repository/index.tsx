// Functions React Native and Expo Router
import { Button, Pressable, Text, View } from "react-native";
import { router } from "expo-router";

// components
import PhotoProfile from "@/src/components/PhotoProfile";

// styles
import { styles } from "@/src/components/Repository/styles";
import theme from "@/src/theme";

// icons
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

function ViewRepository({ repository, searchRepository, dispatch, search}: { repository: any, searchRepository: any, dispatch: any, search?: boolean }) {
  const [toogle, setToogle] = useState(true);

  function getSortedRepositories() {
    if(search) {
      return toogle 
      ? [...searchRepository].sort((a, b) => b.stargazers_count - a.stargazers_count) 
      : searchRepository;
    }
    return toogle
      ? [...repository].sort((a, b) => b.stargazers_count - a.stargazers_count)
      : repository;
  }

  function viewDetails(index: number) {
    dispatch({ type: "SET_DETAILSREPOSITORY", payload: index });
    router.push("/details");
  }

  const sortedRepositories = getSortedRepositories();

  return (
    <>
      <View style={{
        flex: 1,
        flexDirection: "row",
        gap: 12,
        marginTop: 24,
      }}>
        <Text style={[styles.title, {
          flex: 1,
          textAlign: "right",
          fontSize: theme.fonts.size.xl,
        }]}>
          Ordenar Por:
        </Text>
        <TouchableOpacity onPress={() => setToogle(!toogle)}>
          <Text style={[styles.title, {
            color: theme.colors.blue,
            fontSize: theme.fonts.size.xl,
          }]}>
            {toogle ? "Mais Estrelas" : "Nome"}
          </Text>
        </TouchableOpacity>
      </View>
      {
        sortedRepositories.map((item: any) => (
          <View style={styles.ViewRepository} key={item.id}>
            <PhotoProfile style={styles.photoProfile}
              source={{ uri: (`${item.owner.avatar_url}`) }} />
            <View
              style={{
                flex: 1,
              }}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.description ? item.description : 'Não há descrição'}</Text>
              <View style={styles.menuInfoRepository}>
                <View style={styles.viewInfoRepository}>
                  <AntDesign name="star" size={24} color={theme.colors.blue} />
                  <Text style={styles.infoRepository}>
                    {item.stargazers_count < 999 ? item.stargazers_count : '999+'}
                  </Text>
                </View>
                <View style={styles.viewInfoRepository}>
                  <Ionicons name="git-network" size={24} color={theme.colors.blue} />
                  <Text style={styles.infoRepository}>
                    {item.forks_count < 999 ? item.forks_count : '999+'}
                  </Text>
                </View>
                <Button title="Ver Detalhes" onPress={(() => viewDetails(item))} />
              </View>
            </View>
          </View>
        ))
      }
    </>
  );
}

export default connect((state: any) => ({
  repository: state.repository,
  searchRepository: state.searchRepository,
}))(ViewRepository);