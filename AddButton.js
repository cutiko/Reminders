import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import {styles} from './styles';

export default ({title = "AGREGAR", onPress}) => <TouchableHighlight
  style={styles.button}
  onPress={onPress}
>
  <Text style={styles.textBtn}>{title}</Text>
</TouchableHighlight>