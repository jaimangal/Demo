import React from 'react';
import { Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Style from './ListStyles';
import { setItemsProps, setCompletedItemsProps } from "App/Stores/AddItems/Reducers";
import CheckBox from 'react-native-check-box';


class NewTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: this.props.todoList,
      completedList: [],
      isChecked: false
    };
  }

  componentDidMount() {
    this.props.setItemsProps(this.state.itemList);
  }

  deleteItems = id => {
    this.setState(prevState => {
      return {
        itemList: prevState.itemList.filter( (item, i) => {
          this.props.setItemsProps(this.state.itemList);
            return item.id !== id
          })
        }
      })
    }

    handleCompleted = (id) => {
      const { itemList } = this.state;
      let newList = itemList;
      for (var i in newList) {
        if (newList[i].id == id) {
          newList[i].status= !newList[i].status;
          this.setState({itemList: newList})
          break; //Stop this loop, we found it!
        }
      }
    }

    componentWillUnmount() {
      const { itemList } = this.state;
      let completedList = [];
      itemList&&itemList.map( (item) => {
        if(item.status) {
          completedList.push(item);
        }
      })
      this.props.setCompletedItemsProps(completedList);
      this.props.setItemsProps(itemList);
    }

  render() {
    const { itemList } = this.state;
    return (
      <SafeAreaView style={Style.container}>
        <FlatList
          data={itemList}
          renderItem={({ item }) => <View style={Style.item}>
            <View style={Style.titleContainer}>
              <Text numberOfLines={1} style={Style.title}>{item.name}</Text>
            </View>
            <View style={Style.buttonContainer}>
              <View style={{flex: .7, flexDirection: 'row'}}>
                <CheckBox
                  style={{flex: .5, padding: 10}}
                  onClick={()=>{
                    this.handleCompleted(item.id)
                  }}
                  isChecked={item.status}
                  leftText={"Completed"}
                />
                <CheckBox
                  style={{flex: .5, padding: 10}}
                  onClick={()=>{
                    this.handleCompleted(item.id)
                  }}
                  isChecked={!item.status}
                  leftText={"Incompleted"}
                />
              </View>
              <View style={{flex: .3}}>
                <Button
                  title="Remove"
                  color="#E74C3C"
                  onPress={() => this.deleteItems(item.id)}
                />
              </View>
            </View>
          </View>}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    )
  }
}


const mapStateToProps = (state) => ({
  todoList: state.todoStates.todoList,
})

const mapDispatchToProps = (dispatch) => ({
  setItemsProps: items => dispatch(setItemsProps(items)),
  setCompletedItemsProps: items => dispatch(setCompletedItemsProps(items))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodoList)
