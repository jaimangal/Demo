import React from 'react';
import { Platform, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Style from './AddItemsStyles';
import { setItemsProps } from "App/Stores/AddItems/Reducers";


class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  componentDidMount() {
  }

  onChanged = text => {
    this.setState({text})
  }

  viewNewList = text => {
    this.props.navigation.navigate("NewListScreen");
  }

  viewCompletedList = text => {
    this.props.navigation.navigate("CompletedListScreen");
  }

  addItems = () => {
    if (this.state.text.trim() === '') {
      return;
    } else {
      let itemList = this.props.todoList;
      let item = {
        id: Math.random(),
        name: this.state.text,
        status: false
      };
      itemList.push(item);
      this.props.setItemsProps(itemList)
      this.props.navigation.navigate("NewListScreen");
    }
  }

  render() {
    return (
      <View
        style={Style.container}
      >
        <View style={Style.headerContainer}>
          <Text  style={Style.headerText}>Add Items</Text>
        </View>
        <View style={Style.inputContainer}>
          <TextInput
            style={Style.input}
            onChangeText = {(text)=> this.onChanged(text)}
            value = {this.state.text}
            placeholder="Enter item"
          />
        </View>
        <View style={{flex: .8, flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={Style.buttonContainer}>
          <Button
            title="New List"
            onPress={() => this.viewNewList()}
          />
        </View>
        <View style={Style.buttonContainer}>
          <Button
            title="Add Item"
            onPress={() => this.addItems()}
          />
        </View>
        <View style={Style.buttonContainer}>
          <Button
            title="Completed"
            onPress={() => this.viewCompletedList()}
          />
        </View>
      </View>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  todoList: state.todoStates.todoList,
})

const mapDispatchToProps = (dispatch) => ({
  setItemsProps: items => dispatch(setItemsProps(items))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
