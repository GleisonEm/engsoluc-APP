import React, {useEffect, useState} from 'react';
import { View, Picker, Alert, ActivityIndicator, Image} from 'react-native';
import {
  Button,
  Datepicker,
  Divider,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { EyeIcon, EyeOffIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import { WebBrowserService } from '../../../services/web-browser.service';
import { WebView } from 'react-native-webview';

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const [street, setStreet] = React.useState<string>();
  const [name, setName] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);
  const [date, setDate] = React.useState<Date>();
  const [cities, setCities] = React.useState([]);
  const [city, setCity] = React.useState(null);
  const [zone, setZone] = React.useState(null);
  const [reference, setReference] = React.useState(null);
  const [zipCode, setZipCode] = React.useState(null);
  const [number, setNumber] = React.useState(null);
  const [creating, setCreating] = React.useState(false);

  const getCities = async () => {

    const result = await Address.allCities();
    if(result.ok){
      setCities(result.cities);
      setCity(result.cities[0]);
      setZone(result.cities[0].zones[0]);
    }
  };

  const getData = async () => {
    setLoading(true);
    await getCities();
    setLoading(false);
  }

  useEffect(() =>{
    getData();
  }, []);

  const onAddButtonPress = async () => {
    // WebBrowserService.openBrowserAsync('https://www.gov.br/cgu/pt-br/coronavirus/faq-coronavirus');
    navigation.navigate('screen-webview');
  }

  return (
    <Layout style={styles.container}>
      <Layout
        style={styles.form}
        level='1'>

         <Layout style={styles.resume}>
         <Text
          style={styles.title}
          status='control'
            category='h1'>
              Resultado:
          </Text>

          <View style={styles.alert}>
            <Text
              style={styles.textAlert}
            status='control'
              category='h5'>
                Estado de Alerta: Perigo
            </Text>
          </View>

          

          <View style={styles.info}>
            <Text
            style={styles.textInfo}
            status='control'>
                De acordo com as respostas fornecidas sobre o seu contato com o covid, você está em estado de alerta do tipo perigo. 
                Por favor apresente-se ao RH para ser orientado(a).
            </Text>
          </View>
          <Image
          style={styles.image}
          source={require('./extra/artealert.png')}>

          </Image>
        </Layout>

      </Layout>
      <Button
        style={styles.addButton}
        size='medium'
        onPress={onAddButtonPress}>
        FAQ do ministerio da saúde [Covid-19]
      </Button>
      </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  form: {
    flex: 1,
    paddingHorizontal: 4,
  },
  image: {
    alignSelf: 'center',
    maxWidth: 200,
    maxHeight: 100
  },
  input: {
    marginHorizontal: 12,
    marginVertical: 8,
  },
  textTitleAviso: {
    marginHorizontal: 18,
    fontSize: 14,
    backgroundColor: '#ff0000'
  },
  textInfo: {
    marginHorizontal: 18,
    fontSize: 18,
  },
  textAlert: {
    marginHorizontal: 18,
    fontSize: 20,
    alignSelf: 'center'
  },
  middleContainer: {
    flexDirection: 'row',
  },
  middleInput: {
    width: 128,
  },
  addButton: {
    alignSelf: 'center',
    marginHorizontal: 16,
    marginBottom: 40
  },
  textTitlePayment: {
    padding: 5,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold'
  },
  footerCheckPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0.5,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  footerPayments: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 12,
    borderBottomWidth: 8,
    borderBottomColor: 'background-basic-color-3',
  },
  title: {
    padding: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 28,
    color: '#000000',
    fontFamily: 'Roboto',
    alignSelf: 'flex-start'
  },
  resume: {
    flex: 1,
  },
  alert: {
    flex: 1,
    padding: 6,
    marginVertical: 30,
    marginHorizontal: 10, 
    backgroundColor: '#ff3000',
    maxHeight: 50,
    justifyContent: 'center',
    borderColor: '#dadce0',
    borderRadius: 4,
    elevation: 11
  },

  info: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20, 
    justifyContent: 'center',
    padding: 6,
    backgroundColor: '#000000',
    maxHeight: 150,
    borderColor: '#dadce0',
    borderRadius: 4,
    elevation: 11
  },
});
