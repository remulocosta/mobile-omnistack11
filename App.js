import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  const styleTypes = ['default', 'dark-content', 'light-content'];
  return (
    <>
      <StatusBar barStyle={styleTypes[1]} backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}
