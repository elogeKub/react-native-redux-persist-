import React from 'react';
import {View} from 'react-native';

import {Appbar} from 'react-native-paper';

const AppBarHeader = ({title}) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <View>
      <Appbar.Header style={{backgroundColor: 'blue'}}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title={title} />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    </View>
  );
};

export default AppBarHeader;
