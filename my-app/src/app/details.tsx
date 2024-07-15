// Functions React Native and Expo Router
import { Button, Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";

// Functions React
import { useEffect, useState } from "react";

// components
import PhotoProfile from "@/src/components/PhotoProfile";
import theme from "@/src/theme";
import styles from "@/src/app/styles";

// Axios
import axios from "axios";

export default function Details() {

  const [data, setData] = useState({
    id: 0,
    name: "",
    description: "",
    stargazers_count: 0,
    forks_count: 0,
    language: "",
    parent: {
      language: "",
    },
    html_url: "",
  });

  useEffect(() => {
    async function getRepository({ user, repository }: { user: string, repository: string }) {
      try {
        const response = await axios.get(`https://api.github.com/repos/${user}/${repository}`);
        setData(response.data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    getRepository({ user: "cardTunic", repository: "habits" });
  }, []);

  return (
    <View style={styles.container} key={data.id}>
      <ScrollView>
        <PhotoProfile style={{
          width: 400,
          height: 400,
        }}
          source={{ uri: "https://github.com/cardTunic.png" }} />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.description ? data.description : 'Não há descrição'}</Text>
        <Text style={styles.text}>Linguagem: {data.language ? data.language : data.parent.language}</Text>
        <Pressable>
          <Button title="Link para o Repositório" onPress={() => { router.push({ pathname: data.html_url }) }} />
        </Pressable>
      </ScrollView>
    </View>
  );
}