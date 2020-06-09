import React from 'react';
import { Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Style from './ListStyles';
import { setItemsProps, setCompletedItemsProps } from "App/Stores/AddItems/Reducers";
import CheckBox from 'react-native-check-box';


class CompletedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { completedItems } = this.props;
    return (
      <SafeAreaView style={Style.container}>
        <FlatList
          data={completedItems}
          renderItem={({ item }) => <View style={Style.item}>
            <View style={Style.titleContainer}>
              <Text numberOfLines={1} style={Style.title}>{item.name}</Text>
            </View>
          </View>}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    )
  }
}


const mapStateToProps = (state) => ({
  completedItems: state.todoStates.completedItems,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletedList)
