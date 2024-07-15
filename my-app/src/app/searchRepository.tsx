import { Text, View } from "react-native";
import styles from "./styles";
import theme from "@/src/theme";
import { ScrollView } from "react-native-gesture-handler";
import ViewRepository from "@/src/components/Repository";

export default function searchRepository() {
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
          // paddingTop: 64,
          padding: 12,
          backgroundColor: theme.colors.black,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.text}>Seus Repositórios</Text>
        <ViewRepository search={true} />
      </ScrollView>
    </View>
  );
}
