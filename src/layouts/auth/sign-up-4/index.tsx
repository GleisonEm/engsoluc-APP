import React from 'react';
import { View, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { Button, CheckBox, Input, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ProfileAvatar } from './extra/profile-avatar.component';
import { EmailIcon, EyeIcon, EyeOffIcon, FacebookIcon, GoogleIcon, PersonIcon, PlusIcon, TwitterIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import { CellIcon } from '../../../components/icons';
import Auth from '../../../services/api/Auth';

export default ({ navigation }): React.ReactElement => {

  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [phone, setPhone] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>();
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = async () => {
    if (password != passwordConfirm) {
      Alert.alert('Opa', 'As senhas digitadas estão diferentes. Verifique e tente novamente.');
      return false;
    }

    let data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirm,
      phone: phone,
    };

    setLoading(true);
    const result = await Auth.register(data);
    setLoading(false);

    if (!result.ok) {
      Alert.alert('Opa', result.message);
      return false;
    }

    const { token } = result;
    console.log('Token: ', token);
    navigation.navigate('SmsScreen', {token, email})

  };

  const onSignInButtonPress = (): void => {
    let data = {

    }
    navigation && navigation.navigate('SignIn4');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const onPasswordConfirmIconPress = (): void => {
    setPasswordConfirmVisible(!passwordConfirmVisible);
  };

  /*const renderPhotoButton = (): React.ReactElement => (
    <Button
      style={styles.editAvatarButton}
      size='small'
      icon={PlusIcon}
    />
  );*/



  return (
    <KeyboardAvoidingView>
    <StatusBar backgroundColor="#000000" barStyle="light-content"/>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/start-screen.png')}>
        <View style={styles.headerContainer}>
          <Text
            category='h4'
            status='control'>
            Bem-vindo(a)!
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            status='control'
            autoCapitalize='none'
            placeholder='Seu nome'
            autoCompleteType='off'
            icon={PersonIcon}
            value={name}
            onChangeText={setName}
          />
          <Input
            style={styles.formInput}
            status='control'
            autoCapitalize='none'
            autoCompleteType='email'
            keyboardType='email-address'
            placeholder='Email'
            icon={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.formInput}
            status='control'
            autoCapitalize='none'
            autoCompleteType='tel'
            placeholder='Telefone'
            icon={CellIcon}
            value={phone}
            onChangeText={setPhone}
          />
          <Input
            style={styles.formInput}
            status='control'
            autoCapitalize='none'
            secureTextEntry={!passwordVisible}
            placeholder='Senha'
            icon={passwordVisible ? EyeIcon : EyeOffIcon}
            value={password}
            onChangeText={setPassword}
            onIconPress={onPasswordIconPress}
          />
          <Input
            style={styles.formInput}
            status='control'
            autoCapitalize='none'
            secureTextEntry={!passwordConfirmVisible}
            placeholder='Confime a senha'
            icon={passwordConfirmVisible ? EyeIcon : EyeOffIcon}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            onIconPress={onPasswordConfirmIconPress}
          />
          <CheckBox
            style={styles.termsCheckBox}
            textStyle={styles.termsCheckBoxText}
            text='Eu li e aceito os termos e condições.'
            checked={termsAccepted}
            onChange={(checked: boolean) => setTermsAccepted(checked)}
          />
        </View>
        {loading && <ActivityIndicator />}
        <Button
          style={styles.signUpButton}
          size='giant'
          onPress={onSignUpButtonPress}
          disabled={!name || !email || !phone || !password || !passwordConfirm || !termsAccepted}>
          Registrar
        </Button>
        <Button
          style={styles.signInButton}
          appearance='ghost'
          status='control'
          onPress={onSignInButtonPress}>
          Já possui uma conta? Faça login
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    overlayColor: 'rgba(0,0,0,.8)',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    minHeight: 86,
  },
  profileAvatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    alignSelf: 'center',
    backgroundColor: 'background-basic-color-1',
    tintColor: 'text-hint-color',
  },
  editAvatarButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  formContainer: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 16,
  },
  formInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
    marginBottom: 14,
  },
  termsCheckBoxText: {
    color: 'text-control-color',
  },
  signUpButton: {
      marginHorizontal: 16,
      backgroundColor: '#c29558',
      borderColor: '#c29558',
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
  },
});
