import React from 'react';
import CarItem from "./components/CarItem";
import {View, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";
import CarsList from './components/CarsList';

export default function App() {
  return (
        <View style={styles.container}>
            <CarsList/>
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
