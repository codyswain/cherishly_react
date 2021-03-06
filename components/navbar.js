import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Picker } from 'react-native';
import { Icon } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';

export default class Navbar extends React.Component {
	render(){
		const {navigate} = this.props.navigation;
		return (
				<View style={styles.navbar}>
					<View style={styles.navbarButton}>
						<TouchableHighlight underlayColor="transparent" onPress={() => this.props.navigation.push('Profile')}>
							<Icon name='person' size={40} color='white'/>
						</TouchableHighlight>
					</View>

					<View style={styles.navbarTitle}>
						<Text style={styles.navbarTitleText}>cherishly</Text>
					</View>

					<View style={styles.navbarButton}>
						<TouchableHighlight underlayColor="transparent" onPress={() => this.props.navigation.push('Settings')}>
							<Icon name='settings' size={40} color='white'/>
						</TouchableHighlight>
					</View>
					
				</View>

		);
	}
}

const styles = StyleSheet.create({
	navbar: {
  	flex: 1, 
  	flexDirection: 'row', 
  	backgroundColor: '#F35F64'
  },

  navbarButton: {
	flex: 1, 
	justifyContent: 'center',
	alignItems: 'center'
  },

  navbarButtonText: {
	color: 'white',
  	fontFamily: 'System',
  	fontSize: 15,
  },

  navbarTitle: {
  	flex: 3, 
  	justifyContent: 'center', 
  	alignItems: 'center',
  },

  navbarTitleText: {
  	color: 'white',
  	fontFamily: 'Optima-Bold',
  	fontSize: 30,
  },
})