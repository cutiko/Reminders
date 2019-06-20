import React from 'react';
import {View, Text} from 'react-native'
import {styles} from "./styles";

export default ({text='Reminders'}) => <View style={styles.navbar}><Text style={styles.title}>{text}</Text></View>