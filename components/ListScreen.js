import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, SafeAreaView } from "react-native"
import style from '../styles/styles'
import Card from './Card'

export default ListScreen = ({navigation}) => {

    const [items, setItems] = useState([]);
    const [inRequest, setInRequest] = useState(true)

    useEffect(() => {
        axios.get("http://www.mocky.io/v2/5bf3ce193100008900619966")
            .then(response => {
                if (response.data.length !== 0) {
                    setItems(response.data);
                    setInRequest(false)
                }
            })
            .catch(error => {
                console.log("There was an error during the get->", error);
                setInRequest(false)
            })
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', flexDirection: 'column' }}>
            <View style={style.view}>
                <Image source={require('../assets/figoLogo.png')} resizeMode='contain' style={{ width: '75%', height: '50%', alignSelf: 'center' }} />
            </View>
            {
                inRequest && items.length === 0 ?
                <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Text style={style.title}> Cargando los elementos, por favor espere</Text>
                </View> :
                !inRequest && items.length === 0 ?
                <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Text style={style.title}> No se obtuvieron elementos</Text>
                </View>
                : !inRequest && items.length !== 0 ?
                <ScrollView scrollEnabled={true} style={{ width: '100%', height: '100%', marginVertical: 50 }} >
                {items.length !== 0 ?
                    items.map((item, i) => {

                        return (
                            <Card key={item.PlaceId + i} item={item} navigation={navigation} />
                        )
                    }) :
                    null}
            </ScrollView> : null

            }
        </SafeAreaView>
    );

}