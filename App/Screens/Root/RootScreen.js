import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'

class RootScreen extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <View style={Helpers.fill}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
