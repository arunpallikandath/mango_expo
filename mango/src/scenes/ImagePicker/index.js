import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import {
    callGoogleVisionApi, parseTextDetection, parseWebDetection,
    parseObjectDetection, parseLabelDetection, parseLogoDetection
  } from '_services'

export default function ImagePickerExample({ navigation }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(data);

    if (!data.cancelled) {
        callGoogleVisionApi(data.base64).then((result) => {
            result.json().then((data) => {
              //  let text = parseTextDetection(data);
              // let objectLabels = parseObjectDetection(data);
              let labels = parseLabelDetection(data);
              let logoLabels = parseLogoDetection(data);
              let webLabels = parseWebDetection(data);
              //console.log(text);
              //setLoading(false);
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

      // return result.base64
      //setImage(result.uri);
    } 
  };

  pickImage(); 

  return null;
}
