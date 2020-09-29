import React from 'react';
import {Text, View, StyleSheet} from 'react-native';



import QRCodeScanner from 'react-native-qrcode-scanner';

class QRCodeScreen extends React.Component {
  onSuccess(e) {
    console.log('qr code success', e.data);
  }

  render() {
    const {t} = this.props;
    return (
      <View style={styles.container}>
        <QRCodeScanner
          notAuthorizedView={
            <Text style={styles.deniedText}>Permission Denied</Text>
          }
          containerStyle={styles.scannerContainer}
          cameraStyle={styles.scannerCamera}
          ref="scanner"
          onRead={(data) => this.onSuccess(data)}
          permissionDialogTitle="QR Code Scanner"
          permissionDialogMessage="All good?"
        />
        {/* <PrimaryButton
          text="Close"
          style={AuthStyles.button}
          innerStyle={AuthStyles.buttonInner}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 25,
  },
  scannerContainer: {
    marginVertical: 25,
    marginTop: 35,
  },
  scannerCamera: {
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  deniedText: {
    textAlign: 'center',
    fontSize: 18,
  },
  toastStyle: {
    opacity: 0.8,
    margin: 40,
    marginTop: 50,
  },
});

export default QRCodeScreen;
