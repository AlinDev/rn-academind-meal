import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const FavoritesScreen = props => {
    return (
        <View style={ss.screen}>
            <Text>FavoritesScreen</Text>
        </View>
    );
};
const ss = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        align: 'center',
    }
});
export default FavoritesScreen;