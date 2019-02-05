import React from "react";
import { View, Text, Button } from "react-native";

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome Masoud!',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Home Page"
          onPress={() => navigate('Home', {name: 'Masoud'})}
        />
      );
    }
  }