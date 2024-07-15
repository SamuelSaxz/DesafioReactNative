import PhotoProfile from "@/src/components/PhotoProfile";
import theme from "@/src/theme";
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { connect } from "react-redux";

function Layout({ user }: any) {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.white,
      tabBarStyle: {
        backgroundColor: theme.colors.black,
        borderColor: theme.colors.black,
      },
    }}>

      <Tabs.Screen name="repository" options={{
        title: "Repositório",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='source-repository' size={size} color={color} />
        ),
      }} />

      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarIcon: ({ size, color }) => (
          <Foundation name='home' size={size} color={color} />
        ),
      }} />

      <Tabs.Screen name="profile" options={{
        title: "Perfil",
        tabBarIcon: () => <PhotoProfile source={{ uri: (`${user.avatar_url}`) }} />,
      }} />
      
    </Tabs>
  );
}

export default connect((state: any) => ({user: state.user}))(Layout);