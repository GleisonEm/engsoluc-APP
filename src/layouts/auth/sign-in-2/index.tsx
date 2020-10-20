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

export default ({email, name}): React.ReactElement => {

  const styles2 = useStyleSheet(themedStyle);
  const [verifyQ1, setVerifyQ1] = useState(false);
  const [verifyQ2, setVerifyQ2] = useState(false);
  const [verifyQ3, setVerifyQ3] = useState(false);
  const [serverChecked, setServerChecked] = React.useState<boolean>(false);
  const [pedreiroChecked, setPedreiroChecked] = React.useState<boolean>(false);
  const [amadorChecked, setAmadorChecked] = React.useState<boolean>(false);
  const [sozinhoChecked, setSozinhoChecked] = React.useState<boolean>(false);
  const [ateChecked, setAteChecked] = React.useState<boolean>(false);
  const [maisChecked, setMaisChecked] = React.useState<boolean>(false);
  const [publicoChecked, setPublicoChecked] = React.useState<boolean>(false);
  const [particularChecked, setParticularChecked] = React.useState<boolean>(false);

  const navigation = useNavigation();
  //questão 1 

  const setPedreiro = () => {
    setVerifyQ1(true);
    setServerChecked(false);
    setPedreiroChecked(true);
    setAmadorChecked(false);
  };

  const setServente = () => {
    setVerifyQ1(true);
    setServerChecked(true);
    setPedreiroChecked(false);
    setAmadorChecked(false);
  };

  const setAmador = () => {
    setVerifyQ1(true);
    setServerChecked(false);
    setPedreiroChecked(false);
    setAmadorChecked(true);
  };

  const setSozinho = () => {
    setVerifyQ2(true);
    setSozinhoChecked(true);
    setAteChecked(false);
    setMaisChecked(false);
  };

  const setAte = () => {
    setVerifyQ2(true);
    setSozinhoChecked(false);
    setAteChecked(true);
    setMaisChecked(false);
  };

  const setMais = () => {
    setVerifyQ2(true);
    setSozinhoChecked(false);
    setAteChecked(false);
    setMaisChecked(true);
  };

  const setPublico = () => {
    setVerifyQ3(true);
    setPublicoChecked(true);
    setParticularChecked(false);
  };

  const setParticular = () => {
    setVerifyQ3(true);
    setPublicoChecked(false);
    setParticularChecked(true);
  };

  const onSignInButtonPress = async (): void => { 
    var questao1;
    var questao2;
    var questao3;

    //question 1 
    if(pedreiroChecked){
      questao1 = 1;
    }

    if(serverChecked){
      questao1 = 2;
    }

    if(amadorChecked){
      questao1 =  3;
    }

    //question2
    if(sozinhoChecked){
      questao2 = 1;
    }

    if(ateChecked){
      questao2 = 2;
    }

    if(maisChecked){
      questao2 =  3;
    }

    //question3
    if(publicoChecked){
      questao3 = 1;
    }

    if(particularChecked){
      questao3 = 2;
    }

    var respostas = [questao1, questao2, questao3];
    console.log(respostas);
    navigation.navigate('screen-3', { email: email, name: name, respostas:respostas});
  }

  return (
    <KeyboardAvoidingView>
      <StatusBar backgroundColor="#000000" barStyle="light-content"/>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/telacompleta.png')}>
        <View style={styles.headerContainer}>
        <Text
            category='h3'
            status='control'>
           Sobre seu trabalho
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles2.footerPayments}>
            <Text
            style={styles.textQ1}
            category='h4'>Função na empresa ? *</Text>
              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={pedreiroChecked}
                  onChange={setPedreiro}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Pedreiro</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={serverChecked}
                  onChange={setServente}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Servente de pedreiro</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={amadorChecked}
                  onChange={setAmador}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Armador</Text>
              </View>
        
          </View>

          <View style={styles2.footerPayments2}>
            <Text
            style={styles.textQ1}
            category='h4'>Com quantas pessoas você mora ? *</Text>
              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={sozinhoChecked}
                  onChange={setSozinho}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Sozinho</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={ateChecked}
                  onChange={setAte}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Até 1</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={maisChecked}
                  onChange={setMais}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Mais de 1</Text>
              </View>
        
          </View>
          <View style={styles2.footerPayments2}>
            <Text
            style={styles.textQ1}
            category='h4'>Qual meio de transporte você utiliza frequentemente ? *</Text>
              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={publicoChecked}
                  onChange={setPublico}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Transporte público</Text>
              </View>

              <View style={styles2.footerCheckPayment}>
              <CheckBox
                  style={styles2.boxPayments}
                  checked={particularChecked}
                  onChange={setParticular}
                />
                <Text
                  style={styles2.textMoney}
                  category='c1'>Transporte particular</Text>
              </View>
        
          </View>
          
        </View>
        <TouchableOpacity>
          <Button
            style={styles.signInButton}
            size='medium'
            icon={ArrowOutForwardIcon}
            disabled={!verifyQ1 || !verifyQ2 || !verifyQ3}
            onPress={onSignInButtonPress}>
            {'Prosseguir [2/5]'}
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
    minHeight: 126,
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
