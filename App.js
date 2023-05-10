import React, { useState } from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import GLOBALS from './src/Global';
import { StyleSheet } from 'react-native';

export default function App() {
  const [screenState, setScreenState] = useState(GLOBALS.SCREEN.WELCOME);
  switch (screenState) {
    case GLOBALS.SCREEN.LOGIN:
      return <LoginScreen />;
    default:
      return <WelcomeScreen onNavigate={setScreenState} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
