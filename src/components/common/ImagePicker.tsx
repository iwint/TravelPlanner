import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlusIcon from '../../icons/PlusIcon';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';

type Props = {
  onChange: Function;
  value: any;
};

const ImagePicker = ({onChange, value}: Props) => {
  const handlePick = async () =>
    await launchImageLibrary(
      {
        mediaType: 'photo',
        assetRepresentationMode: 'auto',
        presentationStyle: 'fullScreen',
      },
      (res: ImagePickerResponse) => {
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.errorCode) {
          console.log('Image picker error: ', res.errorMessage);
        } else {
          let imageUri = res.assets?.[0]?.uri;
          onChange(imageUri);
        }
      },
    );

  return (
    <Pressable style={styles.container} onPress={handlePick}>
      {value !== null ? (
        <Image
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 10,
          }}
          source={{
            uri: value,
          }}
        />
      ) : (
        <View style={styles.button}>
          <PlusIcon />
        </View>
      )}
    </Pressable>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    height: '25%',
    width: '95%',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
    borderRadius: 10,
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#000',
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
