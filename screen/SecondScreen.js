import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import AppBarHeader from './../component/AppBar';

export default function SecondScreen({navigation}) {
  const [data, setData] = useState({
    name: '',
    surname: '',
  });
  return (
    <View>
      <AppBarHeader title="Second" />
      <TextInput
        onChangeText={text => setData(text)}
        value={data.name}
        mode="outlined"
        placeholder="your name"
        style={{height: 40, margin: 10}}
      />
      <TextInput
        onChangeText={text => setData(text)}
        value={data.surname}
        mode="outlined"
        placeholder="your surname"
        style={{height: 40, margin: 10}}
      />
      <Button style={{margin: 10, backgroundColor: 'blue'}} mode="contained">
        Add
      </Button>
      <Button
        onPress={() => navigation.goBack()}
        style={{margin: 10, backgroundColor: 'blue'}}
        mode="contained">
        go back
      </Button>
    </View>
  );
}
