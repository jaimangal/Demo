import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  headerContainer: {
    flex: .1
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  inputContainer: {
    flex: .2,
    flexDirection: 'row',
    marginTop: 10
  },
  input: {
    height: 45,
    width: SCREEN_WIDTH-20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonContainer: {
    flex: .33,
    padding: 5,
    marginTop: 30
  }
})
