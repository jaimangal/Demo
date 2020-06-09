import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  item: {
    backgroundColor: "#fff",
    width: SCREEN_WIDTH-20,
    height: 100,
    borderWidth: 6,
    borderColor: "#F8F8F8",
    paddingTop: 5,
    paddingBottom: 10,
    justifyContent: "space-between"
  },
  titleContainer: {
    flex: .5
  },
  title: {
    paddingLeft: 10,
    fontSize: 16
  },
  buttonContainer: {
    flex: .5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  }
})
