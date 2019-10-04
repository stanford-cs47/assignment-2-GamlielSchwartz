import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Profiles } from './App/Themes';
import Navbar from './components/Navbar';
import ActionButtons from './components/ActionButtons'
import SwipeProfileCards from './components/SwipeProfileCards';

export default class App extends React.Component {
    constructor() {
        super();

        var haroldProfile = Profiles.harold;
        this.state = {
            profileImage: haroldProfile.image,
            name: haroldProfile.name,
            age: haroldProfile.age,
            occupation: haroldProfile.occupation
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Navbar/>
                <View style={styles.lineStyle} />
                <SwipeProfileCards/>
                <View style={styles.lineStyle} />
                <ActionButtons/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgb(238,238,238)',
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
    },
});