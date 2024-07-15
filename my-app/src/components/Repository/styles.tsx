import theme from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: theme.fonts.size.xxl,
    fontFamily: theme.fonts.fontFamily.bold,
    color: theme.colors.white,
  },
  subtitle: {
    fontSize: theme.fonts.size.base,
    fontFamily: theme.fonts.fontFamily.regular,
    color: theme.colors.gray,
  },
  infoRepository: {
    fontSize: theme.fonts.size.base,
    fontFamily: theme.fonts.fontFamily.regular,
    color: theme.colors.white,
  },
  viewInfoRepository: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  menuInfoRepository: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 8,
  },
  photoProfile: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  ViewRepository: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderColor: theme.colors.gray,
    gap: 12,
  }
});