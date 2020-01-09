import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
const CategoryMealsScreen = props => {
    return (
        <View style={ss.screen}>
            <Text>CategoryMealsScreen  </Text>
            <Button title="Go to details" onPress={() => {
                props.navigation.navigate('MealDetail')
            }} />
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
export default CategoryMealsScreen;