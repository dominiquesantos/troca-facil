import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CreatePost from '../app/screens/CreatePost';
import EditPost from '../app/screens/EditPost';
import Home from '../app/screens/Home';
import { Post } from '../types';

export type RootStackParamList = {
  Home: undefined;
  CreatePost: undefined;
  EditPost: { post: Post };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="CreatePost" component={CreatePost} options={{ title: 'Criar Post' }} />
      <Stack.Screen name="EditPost" component={EditPost} options={{ title: 'Editar Post' }} />
    </Stack.Navigator>
  );
}
