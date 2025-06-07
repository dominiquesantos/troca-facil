import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CreatePost from '../app/screens/CreatePost';
import EditPost from '../app/screens/EditPost/index';
import Home from '../app/screens/Home';
import Login from '../app/screens/Login';
import { useAuth } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
          <Stack.Screen name="EditPost" component={EditPost} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}
