import React from 'react';
import { 
    StyleSheet
} from 'react-native';

const globalStyles = StyleSheet.create({
	mainContainer: {  
		height: "100%",	
		backgroundColor: 'lavenderblush',
	},
	background: {
		justifyContent: "center",
		backgroundColor: "limegreen",
		height: "70%",
		padding: 30,
		
	},
	appsContent: {
		flex: 1,
		alignItems: "center",
	},
	titleText: {
		
		fontSize: 40,
		fontWeight: '700',
		color: "white",
		alignSelf: "center",
		// top: '30%',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default globalStyles;