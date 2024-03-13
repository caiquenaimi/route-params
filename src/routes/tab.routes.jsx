import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import { Text } from "react-native";

import {user} from "../data/Profile";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#04d361",
        tabBarInactiveTintColor: "#000",
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 90,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,
          elevation: 21,
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{user}}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text
                style={{ color: "#04d361", marginTop: -30, marginBottom: 10 }}
              >
                Profile
              </Text>
            ) : null,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text
                style={{ color: "#04d361", marginTop: -30, marginBottom: 10 ,
              }}
                >
                Home
              </Text>
            ) : null,
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" color={color} size={size} />
          ),
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text
                style={{ color: "#04d361", marginTop: -30, marginBottom: 10 }}
              >
                Category
              </Text>
            ) : null,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
