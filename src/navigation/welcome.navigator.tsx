import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SignIn4Screen } from '../scenes/auth/screen-in-start.component';
import { ScreenTwo } from '../scenes/auth/screen-in-2.component';
import { ScreenThree } from '../scenes/auth/screen-in-3.component';
import { ScreenFour } from '../scenes/auth/screen-in-4.component';
import { ScreenFive } from '../scenes/auth/screen-in-5.component';
import { ScreenResult } from '../scenes/auth/screen-result.component';
import { ScreenWebview } from '../scenes/auth/webview.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

/*const AuthMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <AuthScreen {...props}/>}>
    <TopTab.Screen name='AuthGrid' component={AuthGridScreen}/>
    <TopTab.Screen name='AuthList' component={AuthListScreen}/>
  </TopTab.Navigator>
);*/

// const AuthLoginNavigator = (initialScreen): React.ReactElement => {
//   return initialScreen == 'SignIn' ? <SignInScreen/> : <HomeNavigator/>;
// };

const AuthLoginNavigator = (): React.ReactElement => {
  return <SignIn4Screen/>;
};


export const WelcomeNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Auth' component={AuthLoginNavigator}/>
    <Stack.Screen name='screen-2' component={ScreenTwo}/>
    <Stack.Screen name='screen-3' component={ScreenThree}/>
    <Stack.Screen name='screen-4' component={ScreenFour}/>
    <Stack.Screen name='screen-5' component={ScreenFive}/>
    <Stack.Screen name='screen-result' component={ScreenResult}/>
    <Stack.Screen name='screen-webview' component={ScreenWebview}/>
  </Stack.Navigator>
);
