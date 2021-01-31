import React from 'react';
import CarItem from "./components/CarItem";
import {View, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function App() {
  return (
        <View style={styles.container}>
          <CarItem
          name="Model S"
          tagline="Order Online for"
          taglineCTA="Touchless Delivery"
          image={require('./assets/images/ModelS.jpeg')}
          />
          <StatusBar style="auto" />
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  }
});
