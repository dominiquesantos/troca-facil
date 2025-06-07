import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { usePostContext } from '../../../context/PostContext';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { createPost } = usePostContext();
  const navigation = useNavigation();

  const handleSave = () => {
    createPost({ title, content, author });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Título" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Texto" value={content} onChangeText={setContent} style={styles.input} multiline />
      <TextInput placeholder="Autor" value={author} onChangeText={setAuthor} style={styles.input} />
      <Button title="Salvar" onPress={handleSave} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 8 }
});
