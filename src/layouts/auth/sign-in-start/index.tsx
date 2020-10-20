import React, {useState, useEffect} from 'react';
import { StyleSheet, View, StatusBar, Alert, AsyncStorage, ActivityIndicator, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { EmailIcon, PersonOutlineIcon, ArrowOutForwardIcon } from '../../../components/icons';
import {
  EyeIcon,
  EyeOffIcon,
  FacebookIcon,
  GoogleIcon,
  PersonIcon,
  TwitterIcon,
} from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import Auth from '../../../services/api/Auth';
// import {  } from 'react-native-gesture-handler';

export default (): React.ReactElement => {

  const [email, setEmail] = React.useState<string>();
  const [name, setName] = React.useState<string>();

  const navigation = useNavigation();

  const onSignInButtonPress = async (): void => { 
    navigation.navigate('screen-2', { email: email, name: name});
  }

  return (
    <KeyboardAvoidingView>
      <StatusBar backgroundColor="#000000" barStyle="light-content"/>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/telacompleta.png')}>
        <View style={styles.headerContainer}>
          <Text
            style = {styles.tittle}
            category='h1'
            status='control'>
            Triagem Semanal
          </Text>
          <Text
            style = {styles.tittle}
            category='h1'
            status='control'>
            contra o covid-19
          </Text>
        </View>
        <View style={styles.formContainer}>
        <Text
            style = {styles.emailText}
            category='h4'
            status='control'>
           Endereço de e-mail *
          </Text>
          <Input
            status='control'
            placeholder='Email'
            icon={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Text
            style = {styles.emailText}
            category='h4'
            status='control'>
           Qual seu nome ? *
          </Text>
          <Input
            status='control'
            placeholder='Nome'
            icon={PersonOutlineIcon}
            value={name}
            onChangeText={setName}
          />
        </View>
       <TouchableOpacity
        delayPressIn={0.2}
        delayPressOut={0.1}
       >
          <Button
            style={styles.signInButton}
            size='medium'
            icon={ArrowOutForwardIcon}
            disabled={!name || !email}
            onPress={onSignInButtonPress}>
            {'Prosseguir [1/5]'}
          </Button>
       </TouchableOpacity>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overlayColor: 'rgba(0,0,0,.4)',
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 30,
    marginVertical: 30,
    backgroundColor: '#000550',
    borderColor: '#000550',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 12,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  containerActivity: {
   flex: 1,
   justifyContent: "center"
 },
 horizontalActivity: {
   flexDirection: "row",
   justifyContent: "space-around",
   padding: 20,
 },
 tittle: {
  alignSelf: "center"
 },
 emailText: { 
  margin: 5,
  alignSelf: "flex-start",
  fontFamily: 'Roboto',
  fontSize: 16,
  fontWeight: 'bold',
  borderColor: "black",
 }
});
