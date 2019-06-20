import React, {Component} from 'react';
import {Modal, View, Button, TextInput} from 'react-native';
import {styles} from './styles';

export default class extends Component {

  state = {
    title: ""
  };

  handleChange = (event)=> this.setState({title: event});

  handleReminder = ()=> {
    const {title} = this.state;
    if (!title.split(' ').join('')) return;
    const {addReminder, closeModal} = this.props;
    addReminder({title, key: String(Date.now())});
    this.setState({title:""});
    closeModal()
  };

  render() {
    const {visible, closeModal} = this.props;
    const {title} = this.state;

    return (
      <Modal
        animationType='slide'
        visible={visible}
      >
        <View style={[styles.container]}>
          <TextInput
            style={{margin: 16, backgroundColor: '#f5f5f5', padding: 16}}
            placeholder="something"
            value={title}
            onChangeText={this.handleChange}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Button
              title='AÑADIR'
              onPress={this.handleReminder}
            />
            <Button
              title='CANCELAR'
              onPress={()=>closeModal()}
            />
          </View>
        </View>
      </Modal>
    );
  }
}