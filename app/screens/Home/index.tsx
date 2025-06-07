import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { usePostContext } from '../../../context/PostContext';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { Post } from '../../../types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function Home() {
  const { posts } = usePostContext();
  const [search, setSearch] = useState('');
  const navigation = useNavigation<NavigationProps>();

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar post..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('CreatePost')}
      >
        <Text style={styles.buttonText}>Criar Novo Post</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredPosts}
        keyExtractor={item => item.id}
        renderItem={({ item }: { item: Post }) => (
          <View style={styles.postCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.content}</Text>
            <Text style={styles.author}>Autor: {item.author}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditPost', { post: item })}>
              <Text style={styles.editButton}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  searchInput: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 8 },
  createButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: { color: '#fff' },
  postCard: {
    backgroundColor: '#FED173',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: { fontWeight: 'bold' },
  author: { marginTop: 5 },
  editButton: { color: '#173E44', marginTop: 10, fontWeight: 'bold' },
});
