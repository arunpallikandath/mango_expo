import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as config from "../../../env"
import {
  callGoogleVisionApi, parseTextDetection, parseWebDetection,
  parseObjectDetection, parseLabelDetection, parseLogoDetection
} from '_services'
import { Ionicons } from '@expo/vector-icons';

const ImageScanner = ({ navigation }) => {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [loading, setLoading] = useState(false);

  const styles = StyleSheet.create({
    captureImage: {
      resizeMode: 'stretch',
      marginBottom: 15
    },
    reverseCamera: {
      resizeMode: 'stretch',
      marginBottom: 15
    },
    cameraFooter: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
      width: '100%'
    }
  });
  
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

  const captureImageAsync = async () => {
    setLoading(true);
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      let data = await cameraRef.takePictureAsync(options);
      // let imageConvert = data.base64.replace(/^data:image\/[a-z]+;base64,/, "");
      // navigation.navigate('ImageCropper', {searchText: 'Its awesome'});

      callGoogleVisionApi(data.base64).then((result) => {
        result.json().then((data) => {
          //  let text = parseTextDetection(data);
          // let objectLabels = parseObjectDetection(data);
          let labels = parseLabelDetection(data);
          let logoLabels = parseLogoDetection(data);
          let webLabels = parseWebDetection(data);
          //console.log(text);
          setLoading(false);
          navigation.navigate('Recomendations', {
            searchText:
              webLabels + '\n\n' +
              // objectLabels + '\n\n' + 
              logoLabels + '\n\n' +
              labels
          });
          // console.log(data.responses[0].fullTextAnnotation
          //   .pages[0].blocks[0].paragraphs[0].words[0].symbols);
        })
      })
    }
  }
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  let activityIndicator;
  if (loading == true) {
    activityIndicator = <ActivityIndicator size="large" color="#00CA43"
      style={{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'flex-end'
      }}></ActivityIndicator>
  }
  return (

    <View style={{ flex: 1 }}>

      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref);
      }}>
        {activityIndicator}
        {loading === false && <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>

          <View style={styles.cameraFooter}>
            <View style={{ flex: 1, alignItems: "center", }}>

            </View>
            <TouchableHighlight style={{ flex: 1, alignItems: "center", }}
              onPress={() => captureImageAsync()}>
              <Ionicons style={styles.captureImage} name="ios-camera" size={64} color="white" />
            </TouchableHighlight>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center"
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Ionicons style={styles.reverseCamera} name="md-camera-reverse-outline" size={32} color="white" />
            </TouchableOpacity>
          </View>

        </View>
        }
      </Camera>
    </View>
  );

}

export default ImageScanner;
