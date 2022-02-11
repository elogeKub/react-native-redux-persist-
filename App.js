import React from 'react';
// import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import {Provider} from 'react-redux';
import reducerStore from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import SecondScreen from './screen/SecondScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const App = () => {
  const {persistor, store} = reducerStore();
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
