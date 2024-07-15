// Functions React Native and Expo Router
import { Button, Pressable, Text, View } from "react-native";
import { Link, router } from "expo-router";

// components
import PhotoProfile from "../PhotoProfile";

// styles
import { styles } from "./styles";
import theme from "@/src/theme";

// icons
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

// Functions React
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

export default function ViewRepository({ user }: { user: string }) {
  const [data, setData] = useState([{
    id: 0,
    name: "",
    description: "",
    stargazers_count: 0,
    forks_count: 0,
    language: "",
    parent: {
      language: "",
    }
  }]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(`https://api.github.com/users/${user}/repos`);
        setData(response.data);
      }
      catch (error: any) {
        console.log(error.message);
      }
    }
    getUser();
  }, []);

  return (
    <>
      {
        data.sort((a, b) => b.stargazers_count - a.stargazers_count).map((item, index) => (
          <View style={styles.ViewRepository} key={item.id}>
            <PhotoProfile style={styles.photoProfile}
              source={{ uri: "https://github.com/" + user + ".png" }} />
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
                <Pressable>
                  <Button title="Ver Detalhes" onPress={() => { router.push("/details") }} />
                </Pressable>
              </View>
            </View>
          </View>
        ))
      }
    </>
  );
}