import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
const CategoriesScreen = props => {
    console.log(props.navigation.navigate);
    return (
        <View style={ss.screen}>
            <Text>CategoriesScreen</Text>
            <Button title="Go to meals" onPress={() => {
                props.navigation.navigate({ routeName: 'CategoryMeals' })
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
export default CategoriesScreen;