import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {add_data_personne} from '../redux/personne/action';
import AppBarHeader from './../component/AppBar';

const HomeScreen = ({navigation}) => {
  const {data} = useSelector(state => state);
  console.log('data:', data);
  const dispatch = useDispatch();
  const [personne, setPersonne] = useState(data);

  const onSendData = () => {
    if (personne.surname === '') {
      Alert.alert('Infos', 'surname is epmty');
      return;
    } else if (personne.name === '') {
      Alert.alert('Infos', 'name is epmty');
      return;
    } else {
      dispatch(add_data_personne(personne));
      navigation.navigate('SecondScreen');
    }
  };
  return (
    <View style={{flex: 1}}>
      <AppBarHeader title="Home " />
      <TextInput
        style={{width: '48%', borderColor: 'gray'}}
        placeholder="Surname"
        value={personne.surname}
        onChangeText={text =>
          setPersonne(data => ({
            ...data,
            surname: text,
          }))
        }
      />
      <TextInput
        style={{width: '48%', borderColor: 'gray'}}
        placeholder="Name"
        value={personne.name}
        onChangeText={text =>
          setPersonne(data => ({
            ...data,
            name: text,
          }))
        }
      />

      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'green',
          margin: 8,
          height: 45,
          borderRadius: 10,
        }}
        onPress={() => {
          onSendData();
        }}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Redux persi</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
