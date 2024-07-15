import { StyleSheet } from "react-native";
import theme from "@/src/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 12,
    alignItems: "center",
    paddingTop: 64,
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: theme.fonts.size.xxl,
    fontFamily: theme.fonts.fontFamily.bold,
    color: theme.colors.white,
  },
  label: {
    fontSize: theme.fonts.size.xl, color: theme.colors.white
  },
  input: {
    width: "100%",
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: theme.fonts.size.xl,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  form: {
    width: "100%",
    flexDirection: "column",
    gap: 12,
  }
});

export default styles;