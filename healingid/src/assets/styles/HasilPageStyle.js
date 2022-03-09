import React from 'react';
import { 
    StyleSheet
} from 'react-native';

const hasilPageStyle = StyleSheet.create({
	mainContainer: {  
		height: "100%",
		backgroundColor: 'lavenderblush',
	},
	appsContent: {
		flex: 1,
		flexDirection: "column",
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

export default hasilPageStyle;