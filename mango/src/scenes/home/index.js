import React, {useState} from 'react'
import { View, TextInput, Image, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { IconButton, Colors, FAB } from 'react-native-paper';

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        height: '100%'
    },
    logo: {
        width: 180,
        height: 180,
        resizeMode: 'stretch',
        margin: 10
        
    },
    searchbox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 350,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 20 
    },
    searchinput: {
        height: 50,
        width: 245, 
        paddingLeft: 5,
        marginLeft: 20
    },
    searchicon: {
        justifyContent: 'flex-start',
        marginLeft: 5,
        marginRight: 5
    },
    searchButton: {
        backgroundColor: Colors.grey300,
        borderRadius: 0
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 40,
        backgroundColor: Colors.orange700,
       color: 'white'
      },

});



const HomePage = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchPress = () => {
        console.log(searchTerm);
        navigation.navigate('ProductSearch', {
            searchText: searchTerm });
    }
    const homeHtml = 
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>

        <ScrollView style={styles.body} keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
            <Image
                style={styles.logo}
                source={require('./../../assets/click-logo.png')}
            />
            <View style={styles.searchbox}>
            {/* <Ionicons style={styles.searchicon} name="ios-search" size={20} color="#000"/> */}
            <TextInput style={styles.searchinput}
            placeholder="Search product here"
            onChangeText={text => setSearchTerm(text)}
            />
        
            <Ionicons style={styles.searchicon} name="ios-mic" size={30} color={Colors.orange700}/>
            <IconButton 
            icon="magnify"
            color={Colors.black}
            size={30}
            style={styles.searchButton}
            onPress={() => onSearchPress()}

            />
            {/* <Ionicons style={styles.searchicon} name="arrow-forward" size={30} color="#000"/> */}
            </View>
            <FAB
            style={styles.fab}
            large
            icon="camera"
            color={Colors.white}
            onPress={() => console.log('Pressed')}
        />
        </ScrollView>
      
    </KeyboardAvoidingView>
    return homeHtml;
}


export default HomePage