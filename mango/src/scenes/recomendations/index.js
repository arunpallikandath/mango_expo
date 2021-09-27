import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView  } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


    const Recomendations = ({route, navigation, props}) => {

        const [index, setIndex] = React.useState(0);
        const params = navigation.state.params;

        const initialLayout = { width: Dimensions.get('window').width };
        const styles = StyleSheet.create({
            scene: {
            flex: 1,
            },
        });
        
        const predictions = () => (
            <View style={[styles.scene, { backgroundColor: 'white' }]} >
                <ScrollView><Text>{params?.searchText}</Text></ScrollView>
                <View style={{backgroundColor: 'black'}}><Text>footer</Text></View>
            </View>
        );
        
        const shopping = () => (
            <View style={[styles.scene, { backgroundColor: 'white' }]} />
        );
    
        const [routes] = React.useState([
            { key: 'predictions', title: 'Predictions' },
            { key: 'shopping', title: 'Shopping' },
        ]);

        const renderScene = SceneMap({
        predictions: predictions,
        shopping: shopping,
        });
        const renderTabBar = props => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'white', height: 5}}
              style={{ backgroundColor: 'black' }}
            />
          );
        return(
            <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}/>
            )
}

export default Recomendations