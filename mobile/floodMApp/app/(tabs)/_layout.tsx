import { Tabs} from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
  return (
    
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f35656ff',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#F9F9F9',
          paddingVertical: 5,
          height: 60,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-file-text" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="evacuation"
        options={{
          title: "Evacuation",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dots-vertical" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
    
  );
}