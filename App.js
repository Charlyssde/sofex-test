import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './components/ListScreen'
import Details from './components/Details'
import WebsiteView from './components/WebsiteView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Details" component={Details} options={{headerShown:true}} />
        <Stack.Screen name="WebSite" component={WebsiteView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}