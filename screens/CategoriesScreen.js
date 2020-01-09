import React from 'react'
import { View, Text, StyleSheet, FlatList, Platform, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'
const CategoriesScreen = props => {
    console.log(CATEGORIES);


    const renderGridItem = (itemData) => {
        return <TouchableOpacity style={ss.gridItem} onPress={() => {
            props.navigation.navigate({ routeName: 'CategoryMeals' });
        }}>

            <View >
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    }
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    );
};
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',

    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const ss = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});

export default CategoriesScreen;