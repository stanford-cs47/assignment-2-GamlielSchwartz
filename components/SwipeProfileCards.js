import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Profiles } from '../App/Themes';
import SwipeCards from 'react-native-swipe-cards';

export default function SwipeProfileCards() {
    const [currProfile, setCurrProfile] = useState(Profiles.random());

    function NoMoreCards() {
        return (
            <View>
                <Text style={styles.noMoreCardsText}>You have rejected everyone on Tinder!</Text>
            </View>
        )
    }

    function Card(props) {
        console.log("!!!" + props.cardData.text)
        return (
            <View style={styles.content} >
                <View style={styles.card}>
                    <Image
                        source={currProfile.image}
                        style={{ width: '100%', justifyContent:'flex-start' }}
                    />
                    <View flexDirection="column" style={{ margin: 20 }}>
                        <View flexDirection='row'>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                                {currProfile.name}
                            </Text>
                            <Text style={{ fontSize: 24 }}>
                                , {currProfile.age}
                            </Text>
                        </View>
                        <Text style={{ fontSize: 16, color: 'rgb(215,215,215)' }}>
                            {currProfile.occupation}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    // function getNextProfile() {
    //     while()
    // }

    function handleYup(card) {
        console.log(`Yup for ${card.text}`)
        setCurrProfile(Profiles.random())
    }
    function handleNope(card) {
        console.log(`Nope for ${card.text}`)
        setCurrProfile(Profiles.random())

    }
    function handleMaybe(card) {
        console.log(`Maybe for ${card.text}`)
        setCurrProfile(Profiles.random())

    }
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
        <View style={{ flex: 6, width: '100%' }}>
            <SwipeCards
                cards={[
                    { text: 'Tomato', backgroundColor: 'red' },
                    { text: 'Aubergine', backgroundColor: 'purple' },
                    { text: 'Courgette', backgroundColor: 'green' },
                    { text: 'Blueberry', backgroundColor: 'blue' },
                    { text: 'Umm...', backgroundColor: 'cyan' },
                    { text: 'orange', backgroundColor: 'orange' },
                ]}
                renderCard={(cardData) => <Card cardData={cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}

                handleYup={handleYup}
                handleNope={handleNope}
                handleMaybe={handleMaybe}
                hasMaybeAction
            />
        </View>
    )
}

const styles = StyleSheet.create({
    noMoreCardsText: {
        fontSize: 22,
    },
    card: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#C5C5C5',
        margin: '5%',
        height: '90%',
        justifyContent: "flex-start",
        alignItems: 'center',
        width: '100%',

    },
    content: {
        flexDirection: "row",
        width: '90%',
        backgroundColor: 'rgb(238, 238, 238)'
    },
})