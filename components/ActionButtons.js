import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Images } from '../App/Themes';



export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.buttonContainer} >
                    <View style={styles.buttonView}>
                        <Image
                            style={styles.button}
                            source={Images.rewind}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Image
                            style={styles.button}
                            source={Images.nope}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Image
                            style={styles.button}
                            source={Images.boost}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Image
                            style={styles.button}
                            source={Images.like}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Image
                            style={styles.button}
                            source={Images.superLike}
                        />
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(238,238,238)',
        flexDirection: 'row',
        resizeMode: 'center',
        justifyContent: "space-between",

    },
    buttonView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: 'center'
    }
});