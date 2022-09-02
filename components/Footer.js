import { Text, View  } from "react-native";

const Footer = (props) => {
    return(
        <View>
            <Text>{props.titulo}</Text>
            <Text>{props.subtitulo}</Text>
        </View>
    );
}

export default Footer;