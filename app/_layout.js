import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />}} />
      <Tabs.Screen name="thanks" options={{ title: 'Thanks!', tabBarIcon: ({ color }) => <AntDesign name="smileo" size={24} color={color} />}} />
    </Tabs>
  );
}
