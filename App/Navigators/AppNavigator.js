import { createAppContainer, createStackNavigator } from 'react-navigation';
import AddItemsScreen from 'App/Screens/AddItems/AddItems';
import NewList from 'App/Screens/NewList/List';
import CompletedList from 'App/Screens/CompletedList/List';

const StackNavigator = createStackNavigator({
  MainScreen: {
    screen: AddItemsScreen,
    navigationOptions: {
      title: 'Todo App',
      headerStyle: {
        backgroundColor: 'red'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        flexGrow: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        marginRight: 45
      }
    }
  },
  NewListScreen: {
    screen: NewList,
    navigationOptions: {
      title: 'New Items',
      headerStyle: {
        backgroundColor: 'red'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        flexGrow: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        marginRight: 45
      }
    }
  },
  CompletedListScreen: {
    screen: CompletedList,
    navigationOptions: {
      title: 'Completed Items',
      headerStyle: {
        backgroundColor: 'red'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        flexGrow: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        marginRight: 45
      }
    }
  },
})

export default createAppContainer(StackNavigator)
