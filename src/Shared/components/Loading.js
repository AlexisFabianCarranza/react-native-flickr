import {ActivityIndicator, Colors} from 'react-native-paper';
import {View} from 'react-native';
import React from 'react';

export default () => {
  const {loading} = styles;
  return (
    <View style={loading}>
      <ActivityIndicator animating={true} color={Colors.red800} size='larger' />
    </View>
  );
};

const styles = {
  loading: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
