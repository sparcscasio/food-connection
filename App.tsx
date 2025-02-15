import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RecoilRoot, useRecoilState } from 'recoil';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './screen/HomeScreen';
import FeedDetailArea from './component/search/FeedDetailArea';

export type RootStackParamList = {
  Home: undefined;
  FeedDetail: {uid : string};
};

const Stack = createStackNavigator<RootStackParamList>();

const App2 : React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FeedDetail" component={FeedDetailArea} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App : React.FC = () => {
  return (
    <RecoilRoot>
      <App2 />
    </RecoilRoot>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;