import React from 'react';
import { ImageProps, NativeModules } from 'react-native';
import { SplashScreen } from 'expo';

export interface LoadingAnimationProps extends ImageProps {
  loading: boolean;
}

export const SplashImage = (props: LoadingAnimationProps): React.ReactElement | undefined => {

  if (!props.loading) {
    NativeModules.SplashScreen.close({
      animationType: 3,
      duration: 500,
    });
  }

  return null;
};
