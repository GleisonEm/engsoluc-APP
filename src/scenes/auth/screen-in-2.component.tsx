import React from 'react';
import ContentView from '../../layouts/auth/sign-in-2';

export const ScreenTwo = ({ navigation, route }): React.ReactElement => {
  const name = route.params.name;
  const email = route.params.email;

 return (
    <ContentView navigation={navigation} name={name} email={email}/>
 );
};
