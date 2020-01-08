import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const MealDetailScreen = props => {
    return (
        <View style={ss.screen}>
            <Text>MealDetailScreen</Text>
        </View>
    );
};
const ss = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default MealDetailScreen;