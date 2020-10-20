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

export default ({name, email, respostasScreen2, respostasScreen3, respostasScreen4}): React.ReactElement => {

  const styles2 = useStyleSheet(themedStyle);
  const [loading, setLoading] = useState(false);
  const [questionChecked, setQuestionChecked] = React.useState<boolean>(false);
  const [questionChecked1, setQuestionChecked1] = React.useState<boolean>(false);
  const [questionChecked2, setQuestionChecked2] = React.useState<boolean>(false);
  const [questionChecked3, setQuestionChecked3] = React.useState<boolean>(false);

  const navigation = useNavigation();

  const OnChangeQuestion = () => {
    setQuestionChecked(!questionChecked);
  };

  const OnChangeQuestion1 = () => {
    setQuestionChecked1(true);
    setQuestionChecked2(false);
    setQuestionChecked3(false);
  };

  const OnChangeQuestion2 = () => {
    setQuestionChecked2(true);
    setQuestionChecked3(false);
    setQuestionChecked1(false);
  };

  const OnChangeQuestion3 = () => {
    setQuestionChecked3(true);
    setQuestionChecked2(false);
    setQuestionChecked1(false);
  };

  const onSignInButtonPress = async (): void => { 
    var questao1;
    var accepterms;

    //question 1 
    if(questionChecked){
      accepterms = true;
    }

    if(questionChecked1){
      questao1 = 1;
    }

    if(questionChecked2){
      questao1 = 2;
    }

    if(questionChecked3){
      questao1 = 3;
    }

    var form = {
      name: name,
      email: email,  
      q1: respostasScreen2[0],
      q2: respostasScreen2[1],
      q3: respostasScreen2[1],
      q4: respostasScreen3,
      q5: respostasScreen4,
      q6: questao1,
      term: accepterms,
    }

    setLoading(true);
    const result = await Auth.sendForm(form);
    setLoading(false);

    if (result.ok) {
      navigation.navigate('screen-result', {resume: result.resume});
    } else {
      Alert.alert('Opa', result.message)
    }
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
              category='h4'>Alguém que reside no mesmo ambiente</Text>
            <View style={styles2.textQuestion}>
            <Text
              style={styles.textQ3}
              category='h3'>que você teve alguns desse sintomas ?</Text>
              <Text
              style={styles.textQ2}
              category='h3'>*</Text>
            </View>
              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked1}
                  onChange={OnChangeQuestion1}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Sim</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked2}
                  onChange={OnChangeQuestion2}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Não</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
                <CheckBox
                  style={styles2.boxPayments}
                  checked={questionChecked3}
                  onChange={OnChangeQuestion3}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Não tenho certeza</Text>
              </View>   
        
          </View>
          <View style={styles2.terms}>
                <Text
                  style={styles2.textTerm}
                  category='c1'>Confirmo que todas as respostas até agora são verdadeiras:
                </Text>
                <CheckBox
                  style={styles2.boxTerm}
                  checked={questionChecked}
                  onChange={OnChangeQuestion}
                />
              </View>   
        </View>
        {loading ?
          <View style={[styles.containerActivity, styles.horizontalActivity]}>
          <ActivityIndicator size="large" color="#000550" />
        </View>
        :
        <TouchableOpacity>
          <Button
            style={styles.signInButton}
            size='medium'
            icon={ArrowOutForwardIcon}
            disabled={!questionChecked || (!questionChecked3 && !questionChecked2 && !questionChecked1)}
            onPress={onSignInButtonPress}>
            {'Enviar'}
          </Button>
        </TouchableOpacity>
      }
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
  textTerm: {
    fontSize: 15,
    color: '#ffffff',
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
  terms: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 20,
    marginHorizontal: 40,
  },
  footerPayments: {
    flex: 1,
    padding: 6,
    backgroundColor: '#ffffff',
    maxHeight: 220,
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
  boxTerm: {
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
