import { StyleSheet, View, Text, Image } from "react-native";
import {styles, estilo2} from '../assets/styles/Mystyles';
export default function Banner(props){
    return(
        <View style={[estilo2.viewChild,{flex:1, backgroundColor:'yellow',marginTop:5,marginBottom:5}]}>
            <Image
                source={require(`../assets/images/${props.src}`)}
                style={{width:'100%', height:'100%', resizeMode:'stretch'}}
            />
        </View>
    );
}