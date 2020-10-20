import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { WelcomeNavigator } from './welcome.navigator';
import { SignIn4Screen } from '../scenes/auth/screen-in-start.component';

/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent',
  },
};

export const AppNavigator = (): React.ReactElement => (
  <NavigationContainer theme={navigatorTheme}>
    <WelcomeNavigator/>
  </NavigationContainer>
);
