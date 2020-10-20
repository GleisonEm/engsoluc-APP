import React from 'react';
import ContentView from '../../layouts/auth/sign-in-5';

export const ScreenFive = ({ navigation, route }): React.ReactElement => {

  return (<ContentView navigation={navigation} email={route.params.email} name={route.params.name} respostasScreen2={route.params.respostasScreen2} respostasScreen3={route.params.respostasScreen3} respostasScreen4={route.params.respostasScreen4}/>);
};