import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native-paper';
import productList from '../../assets/response.json'

const ProductSearch = ({route, navigation, props}) => {
    
    const params = navigation.state.params;

    const initialLayout = { width: Dimensions.get('window').width };
    const styles = StyleSheet.create({
        scene: {
        flex: 1,
        },
        productcard: {
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2},
            shadowRadius: 10,
            elevation: 3,
            backgroundColor: 'white',
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5,
            flex: 1,
            flexDirection: 'column'
        },
        imagecontainer: {
            flex: 0,
            alignSelf: 'center',
        },
        productimage: {
            height: 80,
            width: 100,
            resizeMode: 'contain',
        },
        productbody: {
            flex: 1,
            flexDirection: 'row',
            marginLeft: 5,
            marginTop: 5
        },
        productdetails: {
            flex: 1,
            flexDirection: 'column',
            margin: 5
        },
        producttitle: {
            color: Colors.blue700,
            flexWrap: 'wrap'
        },
        price: {
            flex: 1,
            textAlign: 'right',
            width: '100%',
            fontWeight: 'bold',
            color: Colors.green600
            
        },
        buybutton: {
            fontWeight: 'bold',
            backgroundColor: Colors.orange700,
            color: Colors.white,
            padding: 10,
            borderRadius: 10,
            flex: 1,
            alignSelf: 'flex-end',
            justifyContent: 'flex-end'

        },
        merchant: {
            flex: 1,   
            alignSelf: 'flex-start',
            fontWeight: 'bold',
        },
        delivery: {
            flex: 2,   
            alignSelf: 'center',
            fontWeight: 'bold',
        },
        productfooter: {
            flex: 1,
            flexDirection: 'row',
            padding: 5,
        },
        productheader: {
            padding: 5,
            flex: 1,
            flexDirection: 'row'

        }
        
    });
    

    const shopping = () => {
        console.log(productList.shopping_results[0].image);
        let productRows = [];
        productList.shopping_results.map((element) => {
            // const image = productList.shopping_results[1].image;
            let imageConverted = element.image.replace(/^data:image\/[a-z]+;base64,/, "");
            // console.log(imageConverted);
            productRows.push(
                <View style={styles.productcard}>
                    <View style={styles.productheader}>
                        <Text style={styles.merchant}>{element.merchant}</Text>
                        <Text style={styles.price}>${element.price}</Text>
                    </View>
                    <View style={styles.productbody}>
                            <View style={styles.imagecontainer}>
                                <Image style={styles.productimage} source={{uri: element.image, scale: 0.5}} />
                            </View>
                            <View  style={styles.productdetails}>
                                <Text style={styles.producttitle}>{element.title}</Text>

                        </View>
                    </View>
                    <View style={styles.productfooter}>
                        <View style={styles.delivery}>
                            <Text>{element.delivery}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column', marginTop: 10}}>
                                <TouchableOpacity style={styles.buybutton}>
                                    <Text style={{color: 'white'}}>Buy Now</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        });
        // for (let i = 0; i <= 100; i++) {
        //     productRows.push(
        //         <View style={styles.productcard}>
        //             <Text style={styles.paragraph}>
        //             React Native Card View for Android and IOS using
        //             "react-native-elements"
        //             </Text>
        //         </View>
        //     )
        // }

        return (
            <ScrollView style={[styles.scene, { backgroundColor: 'white' }]} >
                    {productRows}
            </ScrollView>
        );

    };


    return(
  
         shopping()
        
    );
}

export default ProductSearch