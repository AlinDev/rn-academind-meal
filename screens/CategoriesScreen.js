import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const CategoriesScreen = props => {
    return (
        <View style={ss.screen}>
            <Text>CategoriesScreen</Text>
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
export default CategoriesScreen;