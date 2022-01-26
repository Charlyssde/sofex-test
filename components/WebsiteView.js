import { WebView } from 'react-native-webview';

export default WebsiteView = (props) => {
    return (
        <WebView style={{marginTop:20}} source={{uri: props.route.params.url}}/>
    )
}