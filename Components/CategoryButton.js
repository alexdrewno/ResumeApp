import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Constants } from 'expo'
import { ColorConstants } from '../Constants.js'

const CategoryButton = (props) => (
	<TouchableOpacity 
		style={styles.container}
		onPress={props.onPress}
	>
		<Image 
			source={props.source}
			style={styles.imageStyle}		
		/>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width/2,
		height: (Dimensions.get('window').height - Dimensions.get('window').height/6) / 3,
		backgroundColor: ColorConstants.LIGHTER_COLOR,
		borderWidth: 1,
		borderColor: ColorConstants.LIGHTEST_COLOR,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 2,
	},
	imageStyle: {
		resizeMode: 'contain',
		width: Dimensions.get('window').width/6,
		height: (Dimensions.get('window').height - Dimensions.get('window').height/6) / 6,
	}
})
export default CategoryButton
