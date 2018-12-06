import { Constants } from 'expo'
import React from 'react'
import { Dimensions, StyleSheet, Image, View, Text } from 'react-native'

import CategoryButton from '../Components/CategoryButton'
import { ColorConstants } from '../Constants.js'

const MainScreen = (props)  => (
	<View style={styles.container}>
		<View style={styles.nameContainer}>
			<Text 
				style={styles.name}			
			> Alexander Drewno </Text>
		</View>
		<View style={styles.buttonContainer}>
			<CategoryButton 
				source={require('../assets/meIcon.png')}
				onPress={() => props.navigation.push('About')}
			/>	
			<CategoryButton 
				source={require('../assets/summaryIcon.png')}	
				onPress={() => props.navigation.push('Summary')}
			/>
			<CategoryButton 
				source={require('../assets/leadershipIcon.png')}
				onPress={() => props.navigation.push('Leadership')}
			/>
			<CategoryButton 
				source={require('../assets/experiencesIcon.png')}
				onPress={() => props.navigation.push('Experiences')}
			/>
			<CategoryButton 
				source={require('../assets/educationIcon.png')}
				onPress={() => props.navigation.push('Education')}
			/>
			<CategoryButton 
				source={require('../assets/activitiesIcon.png')}
				onPress={() => props.navigation.push('Activities')}
			/>
		</View>
	</View>		
)

MainScreen.navigationOptions = {
	header: null,
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: ColorConstants.LIGHTER_COLOR,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	nameContainer: {
		backgroundColor: ColorConstants.DARKER_COLOR,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		height: Dimensions.get('window').height/6
	},
  name: {
		fontSize: 50,
		color: ColorConstants.LIGHTEST_COLOR,
	},
	buttonContainer: {
		backgroundColor: ColorConstants.LIGHTER_COLOR,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height - Dimensions.get('window').height/6,
		flexDirection: 'row',
flexWrap: 'wrap',
	},
})

export default MainScreen 
