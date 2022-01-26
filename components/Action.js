import { Image, Text, View } from "react-native"
import { getImage } from "../styles/imgs";
import styles from "../styles/styles"

export default Action = (props) => {

    const {
        title,
        info
    } = props;

    return (
        <View style={styles.row}>
            <View style={{width:'20%', height:'100%', padding:10, justifyContent:'center', alignItems:'center'}}>
                <Image source={getImage(title)} resizeMode="contain" style={{width:'80%', height:'80%'}}/>
            </View>
            <View style={{width:'60%', height:'100%', padding:5, justifyContent:'center'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{info}</Text>
            </View>
            <View style={{width:'20%', height:'100%', padding:10, justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.icon}>{">"}</Text>
            </View>
        </View>
    )
}