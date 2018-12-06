import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './Screens/MainScreen.js';
import AboutScreen from './Screens/AboutScreen.js';
import LeadershipScreen from './Screens/LeadershipScreen.js';
import SummaryScreen from './Screens/SummaryScreen.js';
import ExperiencesScreen from './Screens/ExperiencesScreen.js';
import EducationScreen from './Screens/EducationScreen.js';
import ActivitiesScreen from './Screens/ActivitiesScreen.js';

import { ColorConstants } from './Constants.js'

const AppNavigator = createStackNavigator(
{
	Main:  MainScreen,
	About: AboutScreen,
	Leadership: LeadershipScreen,
	Summary: SummaryScreen,
	Experiences: ExperiencesScreen,
	Education: EducationScreen,
	Activities: ActivitiesScreen,
},
{
	headerMode: 'screen',
	initialRouteName: 'Main',
	defaultNavigationOptions: {
	  headerStyle: {
      backgroundColor: ColorConstants.DARKER_COLOR,
    },
    headerTintColor: ColorConstants.LIGHTER_COLOR,
	}
},
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {

  render() {
    return ( 
      <AppContainer /> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


