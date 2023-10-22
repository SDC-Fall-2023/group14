import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from "react";

import axios from "axios";



const url = "http://10.140.103.88:3001/api";


export default function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }
  , []);

  return (
    <View style={styles.container}>
      <Text>{data ? data.message : "Loading..."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
