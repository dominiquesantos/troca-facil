import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '../context/AuthContext';
import { PostProvider } from '../context/PostContext';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <PostProvider>
          <Slot />
        </PostProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
