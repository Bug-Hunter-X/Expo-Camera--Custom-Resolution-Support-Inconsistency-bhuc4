import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

if (hasPermission === null) {
    return <View />; // or some loading indicator
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function getSupportedResolutions() {
    const resolutions = await cameraRef.getAvailableCameraResolutionsAsync();
    return resolutions;
  }

  const [selectedResolution, setSelectedResolution] = useState(null);
  useEffect(() => {
    (async () => {
      const resolutions = await getSupportedResolutions();
      if (resolutions) {
        setSelectedResolution(resolutions[0]); //select the highest resolution as a default
      }
    })();
  }, [cameraRef])

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={(ref) => setCameraRef(ref)} ratio={'16:9'} resolution={selectedResolution}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}>
            <Text style={{ fontSize: 18, color: 'white' }}>Flip</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
