import { BaseRouter } from '@react-navigation/native';
import React from 'react';
import ContentView from '../../layouts/auth/sign-in-3';

export const ScreenThree = ({ navigation, route }): React.ReactElement => {

  return (<ContentView navigation={navigation} email={route.params.email} name={route.params.name} respostasScreen2={route.params.respostas}/>);
};
