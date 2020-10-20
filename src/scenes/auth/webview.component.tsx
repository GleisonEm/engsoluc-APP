import React from 'react';
import { WebView } from 'react-native-webview';

export const ScreenWebview = ({ navigation }): React.ReactElement => (
   // <WebView source={{ uri: 'https://www.gov.br/cgu/pt-br/coronavirus/faq-coronavirus' }} />
   <WebView
   source={{
     uri: 'https://www.gov.br/cgu/pt-br/coronavirus/faq-coronavirus'
   }}
   style={{ marginTop: 20 }}
 />
);
