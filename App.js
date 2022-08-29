import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, Pressable } from 'react-native';
import { VirtualizedList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyTheme = {
  dark: true,
  colors: {
    primary: '#99aab5',
    background: '#36393F',
    card: '#2F3136',
    text: 'whitesmoke',
    border: '#4e5d94',
    notification: '#eb3493',
  },
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: 'slategray',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 100,
  },
});

function HomeScreen({ navigation }) {
  const DATA = [];

  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`
  });

  const getItemCount = (data) => 50;

  const Item = ({ title }) => (
    <Pressable style={styles.item}>
      <Text>{title}</Text>
    </Pressable>
  );
  return (
    <SafeAreaView>
      <VirtualizedList
      data={DATA}
      initialNumToRender={4}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.key}
      getItemCount={getItemCount}
      getItem={getItem}
      />
    </SafeAreaView>
  );
}

function RecentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function NewScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back home" />
    </View>
  );
}

  // const createTwoButtonAlert = () =>
  // Alert.alert(
  //   "Alert Title",
  //   "My Alert Msg",
  //   [
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel"
  //     },
  //     { text: "OK", onPress: () => console.log("OK Pressed") }
  //   ]
  // );

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Home" 
        screenOptions={{
          drawerType: 'front'
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Recent" component={RecentScreen} />
        <Drawer.Screen name="New" component={NewScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}