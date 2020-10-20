import React, {useState, useEffect} from 'react';
import { StyleSheet, View, StatusBar, Alert, AsyncStorage, ActivityIndicator, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text, CheckBox, StyleService, useStyleSheet} from '@ui-kitten/components';
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

export default ({name, email, respostasScreen2}): React.ReactElement => {

  const styles2 = useStyleSheet(themedStyle);
  const [verifyQ1, setVerifyQ1] = useState(false);
  const [simChecked, setSimChecked] = React.useState<boolean>(false);
  const [naoChecked, setNaoChecked] = React.useState<boolean>(false);
  const [naoseiChecked, setNaoseiChecked] = React.useState<boolean>(false);

  const navigation = useNavigation();

  const setSim = () => {
    setVerifyQ1(true);
    setSimChecked(true);
    setNaoChecked(false);
    setNaoseiChecked(false);
  };

  const setNao = () => {
    setVerifyQ1(true);
    setSimChecked(false);
    setNaoChecked(true);
    setNaoseiChecked(false);
  };

  const setNaosei = () => {
    setVerifyQ1(true);
    setSimChecked(false);
    setNaoChecked(false);
    setNaoseiChecked(true);
  };

  const onSignInButtonPress = async (): void => {
    var questao1;

    //question 1 
    if(simChecked){
      questao1 = 1;
    }

    if(naoChecked){
      questao1 = 2;
    }

    if(naoseiChecked){
      questao1 =  3;
    }

    navigation.navigate('screen-4', { email: email, name: name, respostasScreen2: respostasScreen2, respostasScreen3:questao1});
  }

  return (
    <KeyboardAvoidingView>
      <StatusBar backgroundColor="#000000" barStyle="light-content"/>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/telacompleta.png')}>
        <View style={styles.headerContainer}>
        <Text
            category='h4'
            status='control'>
           Sobre sua rotina
          </Text>
          <Text
            category='h4'
            status='control'>
           x
          </Text>
          <Text
            category='h4'
            status='control'>
           COVID-19
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles2.footerPayments}>
            <View style={styles2.textQuestion}>
              <Text
              style={styles.textQ1}
              category='h4'>Teve contato com alguém com covid-19 ?</Text>
              <Text
              style={styles.textQ2}
              category='h3'>*</Text>
            </View>
              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={simChecked}
                  onChange={setSim}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Sim</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={naoChecked}
                  onChange={setNao}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Não</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={naoseiChecked}
                  onChange={setNaosei}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Não sei</Text>
              </View>
        
          </View>
          
        </View>
        <TouchableOpacity>
          <Button
            style={styles.signInButton}
            size='medium'
            icon={ArrowOutForwardIcon}
            disabled={!verifyQ1}
            onPress={onSignInButtonPress}>
            {'Prosseguir [3/5]'}
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
    minHeight: 206,
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
 }, 

 textQ1: { 
  margin: 5,
  marginBottom: 20,
  alignSelf: "flex-start",
  fontFamily: 'Roboto',
  fontSize: 16,
  fontWeight: 'normal',
  color: '#000000'
 }, 
 textQ2: { 
  alignSelf: "flex-start",
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: 'normal',
  color: '#ff3333'
 }, 

 
});

const themedStyle = StyleService.create({
  container: {
    flex: 1,
  },
  listDays: {
    flex: 1,
    margin: 10,
    paddingBottom: 8,
  },
  textTitlePayment: {
    padding: 5,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold'
  },
  textMoney: {
    paddingHorizontal: 5,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'normal'
  },
  textDays: {
    marginLeft: 20,
    fontSize: 15,
    color: '#696969',
    fontWeight: 'normal'
  },
  textCard: {
    paddingHorizontal: 5,
    fontSize: 15,
    color: '#696969',
    fontWeight: 'normal'
  },
  textQuestion: {
    flexDirection: 'row',
  },
  item: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderLeftWidth: 4,
    borderLeftColor: 'background-basic-color-3',
    borderRightWidth: 4,
    borderRightColor: 'background-basic-color-3',
    borderBottomColor: 'background-basic-color-3',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginVertical: 0.5,
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  footerCheckPayment: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 0.5,
    marginVertical: 8,
    marginHorizontal: 6,
  },
  footerPayments: {
    flex: 1,
    padding: 6,
    backgroundColor: '#ffffff',
    maxHeight: 180,
    borderColor: '#dadce0',
    borderRadius: 4,
    elevation: 7
  },
  footerPayments2: {
    flex: 1,
    marginTop: 20,
    padding: 6,
    backgroundColor: '#ffffff',
    maxHeight: 180,
    borderColor: '#dadce0',
    borderRadius: 4,
    elevation: 7
  },
  boxPayments: {
    outlineBackgroundColor: '#ffa934',
    iconTintColor: '#ffa934',
    borderRadius: 0,
    color: '#ffa934',
    borderColor: '#ff0000',
    tintColor: '#ff0000',
  },
  checkoutButton: {
    backgroundColor: '#ffa934',
    borderColor: '#ffa934',
  },
  containerActivity: {
   flex: 1,
   alignItems: 'center',
   justifyContent: "center"
 },
 horizontalActivity: {
   flexDirection: "row",
   justifyContent: "space-around",
   padding: 100
 },
});
