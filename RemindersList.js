import React from 'react';
import { FlatList, Text, View } from 'react-native'
import {styles} from "./styles";

export default function ({data}) {

  return(
    <FlatList
      data={data}
      renderItem={item}
    />
  );

}

const item = ({item}) => <View style={styles.row}><Text>{item.title}</Text></View>;