import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProfileScreen from "./src/screens/ProfileScreen";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  }
});

export default createAppContainer(AppNavigator);