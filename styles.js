import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 58,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    alignItems: 'center'
  },
  title: {
    fontSize: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    paddingStart: 16,
    paddingTop: 8,
    paddingEnd: 16,
    paddingBottom: 8,
  },
  button: {
    paddingTop: 8,
    paddingBottom: 8,
    margin: 16,
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  textBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export {styles}