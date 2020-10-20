import React from 'react';
import ContentView from '../../layouts/auth/sign-in-4';

export const ScreenFour = ({ navigation, route }): React.ReactElement => {

  return (<ContentView navigation={navigation} email={route.params.email} name={route.params.name} respostasScreen2={route.params.respostasScreen2} respostasScreen3={route.params.respostasScreen3}/>);
};
