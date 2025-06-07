import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from './app/screens/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import { PostProvider } from './context/PostContext';
import AppNavigator from './navigation/AppNavigator';

function RootNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <Login />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <RootNavigator />
      </PostProvider>
    </AuthProvider>
  );
}
