import { 
    StyleSheet
} from 'react-native';

const globalStyles = StyleSheet.create({
	mainContainer: {  
		height: "100%",
		backgroundColor: 'ghostwhite',
	},
	background: {
		justifyContent: "center",
		backgroundColor: "limegreen",
		height: "70%",
		paddingBottom: 30,
		paddingRight: 30,
		paddingLeft: 30,
		paddingTop: 0,
	},
	appsContent: {
		flex: 1,
		alignItems: "center",
		flexDirection: "column",
	},
	titleText: {
		fontSize: 40,
		fontWeight: '700',
		color: "white",
		alignSelf: "center",
	},
	highlight: {
		fontWeight: '700',
	},
	
});

export default globalStyles;