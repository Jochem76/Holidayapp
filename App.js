import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./components/Home";
import SettingsScreen from "./components/Settings";
import AboutScreen from "./components/About";
import CountScreen from "./components/Count";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();


export default function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      barStyle={{ backgroundColor: '#FF9100' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Count"
        component={CountScreen}
        options={{
          tabBarLabel: 'Count',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-clock" color={color} size={26} />
          ),
        }}
      />
           <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
