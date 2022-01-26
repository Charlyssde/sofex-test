import { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { useEffect } from 'react/cjs/react.development';
import style from '../styles/styles'
import { getDistance, getPreciseDistance } from 'geolib';
import StarRating from 'react-native-star-rating';
import { Colors } from '../styles/colors'

export default Card = (props) => {

    const {
        item,
        navigation
    } = props;

    const [distance, setDistance] = useState("");

    useEffect(() => {
        if (item.Latitude !== undefined && item.Longitude !== undefined) {
            calculateDistance();
        }
    }, [props])


    const calculateDistance = () => {
        let dist = getPreciseDistance(
            { latitude: item.Latitude, longitude: item.Longitude },
            { latitude: item.Latitude, longitude: item.Longitude }
        );
        setDistance(dist);
    }

    const launchNextScreen = () => {
        navigation.push('Details', {item:item})
    }

    return (
        <View style={style.card} >
            <View style={style.row}>
                <View style={style.column, { width: '20%' }}>
                    <Image source={{ uri: item.Thumbnail }} style={style.image} />
                </View>

                <View style={style.column, { width: '60%' }}>
                    <View style={style.container}>
                        <Text style={style.title}>{item.PlaceName}</Text>
                    </View>
                    <View style={style.container} disabled={true}>
                        <StarRating
                            fullStarColor={Colors.Orange}
                            starSize={20}
                            disabled={true}
                            maxStars={5}
                            rating={item.Rating}
                            selectedStar={(rating) => { }}
                        />
                    </View>
                    <View style={style.container}>
                        <Text style={style.subtitle}>{item.Address}</Text>
                    </View>
                    <View style={style.container}>
                        <Text style={style.subtitle}>{item.Category}</Text>

                    </View>
                </View>

                <View style={style.column, { width: '20%' }}>
                    <Pressable onPress={() => {launchNextScreen()}} style={{backgroundColor:Colors.Transparent, height:'50%'}}>
                        <View style={style.container}>
                            <View style={style.row, {alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                <Text style={style.subtitle}>{(distance > 1000 ? (distance / 1000) + " KM" : distance + "M")}</Text>
                                <Text style={style.icon}> {">"} </Text>
                            </View>
                        </View>
                    </Pressable>
                    {item.IsPetFriendly ?
                        <View style={style.container}>
                            <Image source={require('../assets/dogFriendlyActive.png')} resizeMode='contain' style={{width:'100%', height:'100%'}}/>
                        </View> :
                        null}
                </View>
            </View>
        </View>
    )
}