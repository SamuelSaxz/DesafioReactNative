import { Image, ImageProps} from "react-native";
import { styles } from "./styles";

export default function PhotoProfile({...rest}: ImageProps) {
  return (
    <Image style={styles.image} {...rest}/>
  );  
}