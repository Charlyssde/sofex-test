import { SafeAreaView, Text, View, Image, Pressable, Linking, Alert, Platform, BackHandler } from "react-native"
import { Colors } from "../styles/colors";
import style from "../styles/styles";
import StarRating from 'react-native-star-rating';
import Action from "./Action";
import MapView from 'react-native-maps';

export default Details = (props) => {
    const {
        route,
        navigation
    } = props;

    const pressDirections = () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${route.params.item.Latitude},${route.params.item.Longitude}`;
        const label = route.params.item.PlaceName;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });


        Linking.openURL(url);
    }
    const pressCall = (phone) => {
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phone}`;
        }
        else {
            phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Phone number is not available');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    }
    const pressWebsite = () => {
        navigation.push('WebSite', { url: route.params.item.Site })
    }

    return (
        <SafeAreaView>
            <View>
                <View style={{ height: '40%', width: '100%' }}>
                    <MapView style={{ width: '100%', height: '100%' }}
                        initialRegion={{
                            latitude: route.params.item.Latitude,
                            longitude: route.params.item.Longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'row', height: '25%', width: '100%', padding: 10, justifyContent: 'center' }}>
                    <View style={style.column, { width: '80%', height: '80%', justifyContent: 'center' }}>
                        <View style={style.container}>
                            <Text style={style.title}>{route.params.item.PlaceName}</Text>
                        </View>
                        <View style={style.container, { width: '50%', marginLeft: 10 }} disabled={true}>
                            <StarRating
                                fullStarColor={Colors.Orange}
                                starSize={20}
                                disabled={true}
                                maxStars={5}
                                rating={route.params.item.Rating}
                                selectedStar={(rating) => { }}
                            />
                        </View>
                        <View style={{ marginTop: 20, marginHorizontal: 10 }}>
                            <Text style={style.subtitle}>{route.params.item.AddressLine1}</Text>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={style.subtitle}>{route.params.item.AddressLine2}</Text>
                        </View>
                        <View style={style.container}>
                            <Text style={style.subtitle}>{route.params.item.Category}</Text>
                        </View>
                    </View>
                    <View style={style.column, { width: '20%', height: '30%', justifyContent: 'flex-start' }}>
                        {route.params.item.IsPetFriendly ?
                            <View style={style.container}>
                                <Image source={require('../assets/dogFriendlyActive.png')} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                            </View> :
                            null}
                    </View>
                </View>
                <View style={{ height: '35%', width: '100%', borderTopColor: Colors.GrayOne, borderTopWidth: 1 }}>
                    <View style={{ width: '100%', height: '33%', padding: 5, borderTopWidth: 1, borderTopColor: Colors.GrayOne }}>
                        <Pressable onPress={() => { pressDirections() }}>
                            <Action title={'Directions'} info={""} />
                        </Pressable>
                    </View>
                    <View style={{ width: '100%', height: '33%', padding: 5, borderTopWidth: 1, borderTopColor: Colors.GrayOne }}>
                        <Pressable onPress={() => { pressCall(route.params.item.PhoneNumber) }}>
                            <Action title={'Call'} info={route.params.item.PhoneNumber} />
                        </Pressable>
                    </View>
                    <View style={{ width: '100%', height: '33%', padding: 5, borderTopWidth: 1, borderTopColor: Colors.GrayOne }}>
                        <Pressable onPress={() => { pressWebsite() }}>
                            <Action title={'Website'} info={route.params.item.Site} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}