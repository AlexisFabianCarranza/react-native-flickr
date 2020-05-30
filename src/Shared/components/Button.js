import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Button as ButtonPaper} from 'react-native-paper';

const Button = ({onPress, children}) => {
  const {buttonStyle} = styles;

  return (
    <ButtonPaper onPress={onPress} style={buttonStyle}>
      {children}
    </ButtonPaper>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

export default Button;
