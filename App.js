import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Import react navigation
import { NavigationContainer } from '@react-navigation/native'; //container
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //bottom nav
import { createStackNavigator } from '@react-navigation/stack';
//import screens
import {HomeScreen } from './app/screens/home.js';
import {ProfileScreen} from './app/screens/profile.js';
import { JobScreen, LegalScreen, DonateScreen } from './app/screens/screens.js';
import {FinScreen } from './app/screens/financial.js';

// temporary, will delete later
import { FinAppScreen } from './app/screens/FinDocScreen.js';

//Authentication
import { AuthContext } from './app/screens/context';
//import sign in and create account
import {SignIn, CreateAccount, ForgotPassword, ResetPassword} from './app/screens/signin.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StackRouter } from 'react-navigation';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}

function JobStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={JobScreen}
      />
    </Stack.Navigator>
  )
}


function LegalStack() {
  return (
    <Stack.Navigator>
      {/* Landing page */}
      <Stack.Screen
        name="Legal"
        component={LegalScreen}
      />
      {/* Add actual page for legal consultation */}
    </Stack.Navigator>
  )
}


function FinStack() {
  return (
    <Stack.Navigator>
      {/* Landing page */}
      <Stack.Screen 
        name="Financial"
        component={FinScreen}
      />
      {/* Actual application */}
      <Stack.Screen
        name="FinDocs"
        component={FinAppScreen}
      />
    </Stack.Navigator>
  )
}


function DonateStack() {
  return (
    <Stack.Navigator>
      {/* Landing page */}
      <Stack.Screen 
        name="Donate"
        component={DonateScreen}
      />
      {/* Add the actual donation screen here */}
    </Stack.Navigator>
  )
}


// // make a stack out of all these screens
// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{activeTintColor: 'blue', inactiveTintColor: 'black'}}>
//       <Tab.Screen
//         // Each tab leads to a stack, which has the actual components
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name='home' color={color} size={size}/>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Jobs"
//         component={JobStack}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name='briefcase' color={color} size={size}/>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Legal"
//         component={LegalStack}
//         // onPress={() => this.props.navigation.navigate('LegalScreen')}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name='people' color={color} size={size}/>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Assistance"
//         component={FinStack}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name='hand-holding-usd' color={color} size={size}/>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Donate"
//         component={DonateStack}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name='gift' color={color} size={size}/>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  //registering these components are stacks

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        //isLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        //isLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        //isLoading(false);
        setUserToken(null);
      }
    };
  }, []);



  return  (
    <AuthContext.Provider value={authContext}>
   <NavigationContainer style={styles.container}>
     {userToken ? (
       <Tab.Navigator
       initialRouteName="Home"
       tabBarOptions={{activeTintColor: 'blue', inactiveTintColor: 'black'}}>
       <Tab.Screen
         // Each tab leads to a stack, which has the actual components
         name="Home"
         component={HomeStack}
         options={{
           tabBarIcon: ({color, size}) => (
             <Ionicons name='home' color={color} size={size}/>
           ),
         }}
       />
       <Tab.Screen
         name="Jobs"
         component={JobStack}
         options={{
           tabBarIcon: ({color, size}) => (
             <Ionicons name='briefcase' color={color} size={size}/>
           ),
         }}
       />
       <Tab.Screen
         name="Legal"
         component={LegalStack}
         // onPress={() => this.props.navigation.navigate('LegalScreen')}
         options={{
           tabBarIcon: ({color, size}) => (
             <Ionicons name='people' color={color} size={size}/>
           ),
         }}
       />
       <Tab.Screen
         name="Assistance"
         component={FinStack}
         options={{
           tabBarIcon: ({color, size}) => (
             <Icon name='hand-holding-usd' color={color} size={size}/>
           ),
         }}
       />
       <Tab.Screen
         name="Donate"
         component={DonateStack}
         options={{
           tabBarIcon: ({color, size}) => (
             <Ionicons name='gift' color={color} size={size}/>
           ),
         }}
       />
     </Tab.Navigator>
     ) : (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen> 
        <Stack.Screen name="ResetPassword" component={ResetPassword}></Stack.Screen> 
        <Stack.Screen name="CreateAccount" component={CreateAccount}></Stack.Screen>
    </Stack.Navigator>
     )}
     {/* <Stack.Navigator>
       <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>  
       <Stack.Screen name="CreateAccount" component={CreateAccount}></Stack.Screen>
     </Stack.Navigator> */}
   </NavigationContainer>
   </AuthContext.Provider>
    
  );  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3bffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
