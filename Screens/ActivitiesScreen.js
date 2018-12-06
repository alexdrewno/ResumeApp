import React from 'react'
import { Dimensions, StyleSheet, Image, View, Text, Button } from 'react-native'
import CategoryButton from '../Components/CategoryButton'
import { ColorConstants } from '../Constants'

export default class ActivitiesScreen extends React.Component {
  static navigationOptions = {
	
	}

	render() {
		return (
			<View style={styles.container}>	
				<Text style={styles.aboutText}> This is where activities info would go </Text>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center', 
		justifyContent: 'center',
		backgroundColor: ColorConstants.MAIN_COLOR,			
	},
	aboutText: {
		fontSize: 15,
	},
});
