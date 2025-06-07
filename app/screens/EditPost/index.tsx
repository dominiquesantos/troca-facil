import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { usePostContext } from '../../../context/PostContext';
import { Post } from '../../../types';

type RouteParams = {
  EditPost: {
    post: Post;
  };
};

export default function EditPost() {
  const { updatePost, deletePost } = usePostContext();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParams, 'EditPost'>>();
  const { post } = route.params;

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [author, setAuthor] = useState(post.author);

  const handleSave = () => {
    updatePost(post.id, { title, content, author });
    navigation.goBack();
  };

  const handleDelete = () => {
    deletePost(post.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput value={content} onChangeText={setContent} style={styles.input} multiline />
      <TextInput value={author} onChangeText={setAuthor} style={styles.input} />
      <Button title="Salvar" onPress={handleSave} color="#4CAF50" />
      <Button title="Excluir" onPress={handleDelete} color="#FF9800" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 8 }
});
