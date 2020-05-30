import React from 'react';
import {Card as CardPaper} from 'react-native-paper';

const Card = props => {
  return <CardPaper style={styles.containerStyle}>{props.children}</CardPaper>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    margin: '3%',
  },
};

export default Card;
