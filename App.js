import React, {Component} from 'react';
import {View, AsyncStorage} from 'react-native';
import { styles } from './styles';
import RemindersList from './RemindersList'
import NavigationBar from './NavigationBar'
import AddButton from './AddButton';
import AddModal from './AddModal';

const KEY = "REMINDERS";

export default class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        modal: false,
        reminders: []
      };
      this.restoreDate();
  }

  restoreDate = async ()=> {
    const data = await AsyncStorage.getItem(KEY);
    this.setState({reminders: JSON.parse(data)});
  };

  handleModal = ()=> this.setState({modal:!this.state.modal});

  addReminder = (reminder)=> {
    const {reminders} = this.state;
    const update = [reminder, ...reminders];
    this.setState({reminders: update});
    AsyncStorage.setItem(KEY, JSON.stringify(update))
  };

  render() {
    const {modal, reminders} = this.state;
    return (
      <View style={styles.container}>
        <NavigationBar/>
        <AddButton
          onPress={this.handleModal}
        />
        <RemindersList data={reminders}/>
        <AddModal
          visible={modal}
          closeModal={this.handleModal}
          addReminder={this.addReminder}
        />
      </View>
    );
  }
}
