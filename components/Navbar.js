import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { Images } from '../App/Themes';


export default class Navbar extends React.Component {

    render() {
        return (
                <View style={styles.navBar} >
                    <Image
                        style={styles.navButton}
                        source={Images.gear}
                    />
                    <Image
                        style={styles.navLogo}
                        source={Images.logo}
                    />
                    <Image
                        style={styles.navButton}
                        source={Images.chat}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    navBar: {
        height: Platform.OS === 'ios' ? 56 : 44,
        marginTop: 30,
        flexDirection: "row",
        backgroundColor: 'rgb(238,238,238)',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    navButton: {
        width: Platform.OS === 'ios' ? 50 : 38, 
        height: Platform.OS === 'ios' ? 50 : 38, 
        tintColor: "#C5C5C5"
    },
    navLogo: { 
        width: Platform.OS === 'ios' ? 120 : 100, 
        height: Platform.OS === 'ios' ? 50 : 38, 
        resizeMode: "center" 
    }
});