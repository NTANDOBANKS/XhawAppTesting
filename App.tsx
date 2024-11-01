import React, { useRef, FC } from 'react';
import { View, Text, Button, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App'; // Your first App screen
import SecondScreen from './SecondScreen'; // Second screen to navigate to
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Learnership"
        onPress={() => navigation.navigate('SecondScreen')}
      />
    </View>
  );
};




const Stack = createStackNavigator();

const MainApp: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App: FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -5], // Move up by 5 units
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'brown' }}>
      <View style={{ backgroundColor: 'brown', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 30 }}>Empowering the Nation</Text>
      </View>

      {/* Navigation Bar */}
      <Animated.View
        style={{
          backgroundColor: 'brown',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          transform: [{ translateY }],
        }}
        onLayout={startAnimation}
      >
        <Button title="Home" color="brown" onPress={startAnimation} titleStyle={{ color: 'black' }} />
        <Button title="Learnership" color="brown" onPress={startAnimation} titleStyle={{ color: 'black' }} />
        <Button title="Short Courses" color="brown" onPress={startAnimation} titleStyle={{ color: 'black' }} />
        <Button title="Booking" color="brown" onPress={startAnimation} titleStyle={{ color: 'black' }} />
        <Button title="Contact Us" color="brown" onPress={startAnimation} titleStyle={{ color: 'black' }} />
      </Animated.View>

      {/* Main Content */}
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Our Mission</Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: 'darkbrown', width: '100%', marginBottom: 10 }} />
        <Text style={{ marginBottom: 10 }}>
          Empowering the Nation was founded in 2018 and provides courses in
          Johannesburg. Numerous domestic workers and gardeners have received
          training through both the six-month Learnerships and the six-week
          Short Skills Training Programmes to enhance their skills and
          increase their marketability.
        </Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: 'darkbrown', width: '100%' }} />
      </View>

      {/* Footer */}
      <View style={{ backgroundColor: 'black', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'grey' }}>Empowering the Nation</Text>
      </View>
    </View>
  );
};

export default App;
