import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';


const CameraPreview = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState(null);

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
      return (
        <View style={{ flex: 1}}>
          <Camera style={{ flex: 1 }} type={type} ref={ref => {
              setCameraRef(ref);
          }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.4,
                  alignSelf: 'flex-end',
                  alignItems: 'flex-start',
                }}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'blue' }}> Flip </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  alignSelf: 'flex-end',
                  alignItems: 'flex-start',
                }}
                onPress={async () => {
                    if(cameraRef) {
                        let photo = await cameraRef.takePictureAsync();
                    }
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'blue' }}> Capture </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );

} 

    export default CameraPreview;
