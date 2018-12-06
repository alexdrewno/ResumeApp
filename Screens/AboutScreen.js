import React from 'react'
import { Dimensions, StyleSheet, Image, View, Text, Button } from 'react-native'
import CategoryButton from '../Components/CategoryButton'
import { ColorConstants } from '../Constants.js'


export default class AboutScreen extends React.Component {
  static navigationOptions = {
		title: 'About Alexander Drewno',
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.viewOneStyle}>
					<Image 
							source={ require('../assets/selfImage.png') } 
							style={ styles.imageStyle }
					/>
					<View style={styles.textViewStyle}>
						<Text style={styles.textStyle}> Alexander Drewno </Text>
						<Text style={styles.textStyle}> 20 years old </Text>
					</View>
				</View>

				<Text style={styles.textViewTwoStyle}>
				</Text>
			
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: ColorConstants.MAIN_COLOR,
	},
 	imageStyle: {
		width: Dimensions.get('window').width/2.3,
		height: Dimensions.get('window').height/3,
		resizeMode: 'contain',
		borderColor: ColorConstants.LIGHTEST_COLOR,
		borderWidth: 4,
		margin: 12,
	},
	textStyle: {
		fontSize: 25,
		marginVertical: 15,
		color: ColorConstants.LIGHTEST_COLOR,
	},
	viewOneStyle: {	
		flexDirection: 'row',	
	},
	textViewStyle: {
		backgroundColor: ColorConstants.MAIN_COLOR,
		height: Dimensions.get('window').height/3,
		margin: 12,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textViewTwoStyle: {
		backgroundColor: ColorConstants.MAIN_COLOR,
		margin: 12,
		flex: 1,
	}
});
