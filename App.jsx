import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import './global.css'
import {Landing, Setup} from './screens'

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Landing" component={Landing}/>
            <Stack.Screen name="Setup" component={Setup}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}