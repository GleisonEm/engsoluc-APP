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

export default ({name, email, respostasScreen2, respostasScreen3}): React.ReactElement => {

  const styles2 = useStyleSheet(themedStyle);
  const [questionChecked, setQuestionChecked] = React.useState<boolean>(false);
  const [questionChecked1, setQuestion1Checked] = React.useState<boolean>(false);
  const [questionChecked2, setQuestion2Checked] = React.useState<boolean>(false);
  const [questionChecked3, setQuestion3Checked] = React.useState<boolean>(false);
  const [questionChecked4, setQuestion4Checked] = React.useState<boolean>(false);
  const [questionChecked5, setQuestion5Checked] = React.useState<boolean>(false);
  const [questionChecked6, setQuestion6Checked] = React.useState<boolean>(false);
  const [questionChecked7, setQuestion7Checked] = React.useState<boolean>(false);


  const navigation = useNavigation();

  const onChangeQuestion = () => {
    setQuestionChecked(!questionChecked);
  };

  const onChangeQuestion1 = () => {
    setQuestion1Checked(!questionChecked1);
  };

  const onChangeQuestion2 = () => {
    setQuestion2Checked(!questionChecked2);
  };

  const onChangeQuestion3 = () => {
    setQuestion3Checked(!questionChecked3);
  };

  const onChangeQuestion4 = () => {
    setQuestion4Checked(!questionChecked4);
  };

  const onChangeQuestion5 = () => {
    setQuestion5Checked(!questionChecked5);
  };

  const onChangeQuestion6 = () => {
    setQuestion6Checked(!questionChecked6);
  };

  const onChangeQuestion7 = () => {
    setQuestionChecked(false);
    setQuestion1Checked(false);
    setQuestion2Checked(false);
    setQuestion3Checked(false);
    setQuestion4Checked(false);
    setQuestion5Checked(false);
    setQuestion6Checked(false);
    setQuestion7Checked(!questionChecked7);
  };

 
  const onSignInButtonPress = async (): void => { 
    var respostas = [];

    if(questionChecked) {
      respostas.push(1);
    }

    if(questionChecked1) {
      respostas.push(2);
    }

    if(questionChecked2) {
      respostas.push(3);
    }

    if(questionChecked3) {
      respostas.push(4);
    }

    if(questionChecked4) {
      respostas.push(5);
    }

    if(questionChecked5) {
      respostas.push(6);
    }

    if(questionChecked6) {
      respostas.push(7);
    }

    if(questionChecked7) {
      respostas.push(8);
    }

    navigation.navigate('screen-5', { email: email, name: name, respostasScreen2: respostasScreen2, respostasScreen3:respostasScreen3, respostasScreen4:respostas});
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
          <Text
              style={styles.textQ1}
              category='h4'>Nos últimos 8 dias, sentiu algum desses</Text>
            <View style={styles2.textQuestion}>
            <Text
              style={styles.textQ3}
              category='h3'>sintomas ?</Text>
              <Text
              style={styles.textQ2}
              category='h3'>*</Text>
            </View>
              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked}
                  onChange={onChangeQuestion}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Febre</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked1}
                  onChange={onChangeQuestion1}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Dores na garganta</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
                <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked2}
                  onChange={onChangeQuestion2}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Tosse seca</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
                <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked3}
                  onChange={onChangeQuestion3}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Diarreia</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
                <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked4}
                  onChange={onChangeQuestion4}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Dores na cabeça</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
                <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked5}
                  onChange={onChangeQuestion5}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Falta de ar ou cansaço</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
                <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked6}
                  onChange={onChangeQuestion6}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Perca de olfato ou paladar</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
                <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked7}
                  onChange={onChangeQuestion7}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Nenhum desses acima.</Text>
              </View>
        
          </View>
          
        </View>
        <TouchableOpacity>
          <Button
            style={styles.signInButton}
            size='medium'
            icon={ArrowOutForwardIcon}
            disabled={!questionChecked && !questionChecked1 && !questionChecked2 && !questionChecked3 && !questionChecked4 && !questionChecked5 && !questionChecked6 && !questionChecked7}
            onPress={onSignInButtonPress}>
            {'Prosseguir [4/5]'}
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
  marginHorizontal: 5,
  alignSelf: "flex-start",
  fontFamily: 'Roboto',
  fontSize: 16,
  fontWeight: 'normal',
  color: '#000000'
 }, 
 textQ2: { 
  marginHorizontal: 5,
  marginBottom: 20,
  alignSelf: "flex-start",
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: 'normal',
  color: '#ff3333'
 }, 

 textQ3: { 
  marginLeft: 5,
  alignSelf: "flex-start",
  fontFamily: 'Roboto',
  fontSize: 16,
  fontWeight: 'normal',
  color: '#000000'
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
    maxHeight: 400,
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
