import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#1fff' },
    sceneContainerStyle: { backgroundColor: '#bfff' },
    drawerContentStyle: {backgroundColor: '#bfff'},
    drawerActiveBackgroundColor: '#1fff',
    drawerActiveTintColor: 'black'

  }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
      title: "All Categories",
      drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name='home' />
    }} />
    <Drawer.Screen name='Favorites'  component={FavoriteScreen} options={{
      drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name="star" />
    }}/>
  </Drawer.Navigator>
}


export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#1fff'},
          contentStyle: {backgroundColor: '#bfff'}
        }}>
          <Stack.Screen name='Drawer' component={DrawerNavigator} options={{
            headerShown: false,
          }} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
          <Stack.Screen name='MealDetailScreen' component={MealDetailScreen} />
        </Stack.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});
