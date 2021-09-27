
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ImagePickerExample from './../scenes/ImagePicker';
import ImageScanner from './../scenes/image-scanner';
import HomePage from './../scenes/home'
import ProductSearch from './../scenes/product-search';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native-paper';


const AppNavigator =  createStackNavigator(
    {
        ImageScanner: {screen: ImageScanner, navigationOptions: () => (
            {
                title: 'RAVEN',
                headerTitleStyle: {color: Colors.orange700},
                headerTransparent: true
        })},
        ProductSearch: {screen: ProductSearch, navigationOptions: () => (
            {
                title: 'Raven', 
                headerBackTitleVisible: false,
                headerBackImage: () => {return  <Ionicons  name="ios-arrow-back" size={32} color="white" />},
                headerTitleStyle: {color: Colors.orange700},
                headerStyle: {backgroundColor: 'black'}
            })},
        ImagePicker: {screen: ImagePickerExample, navigationOptions: () => ({title: 'Image Picker', headerBackTitle: 'Scan' })},
        Home: {screen: HomePage, navigationOptions: () => (
            {title: 'RAVEN', 
            headerTitleStyle: {color: Colors.orange700},
            headerStyle: {backgroundColor: 'black'}
            })
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default AppNavigator;
