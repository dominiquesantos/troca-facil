import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PostCard from '../../../components/PostCard';

export default function Home() {
  const navigation = useNavigation();
  const isAdmin = true;

  function handleCreatePost() {
    navigation.navigate('CreatePost' as never);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.loginText}>Login</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Text>🔍</Text>
      </View>

      {/* Título + Botão */}
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Lista de Posts</Text>
        <TouchableOpacity style={styles.createButton} onPress={handleCreatePost}>
          <Text style={styles.createButtonText}>Criar Post</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Posts */}
      <View style={styles.postsContainer}>
        <PostCard
          author="Prof. Ana Beatriz"
          title="Como enfrentar a procrastinação e usar o seu tempo de maneira inteligente."
          timeAgo="Postado 1 hora atrás"
          isAdmin={isAdmin}
        />
        <PostCard
          author="Prof. Lucas Mendes"
          title="5 Dicas para melhorar sua produtividade nos estudos."
          timeAgo="Postado 2 horas atrás"
          isAdmin={isAdmin}
        />
        <PostCard
          author="Prof. Camila Rocha"
          title="A importância do descanso no processo de aprendizagem."
          timeAgo="Postado ontem"
          isAdmin={isAdmin}
        />
        <PostCard
          author="Prof. Pedro Silva"
          title="Como organizar sua rotina de estudos sem estresse."
          timeAgo="Postado 2 dias atrás"
          isAdmin={isAdmin}
        />
        <PostCard
          author="Prof. Marina Costa"
          title="Técnicas de memorização para aprender mais rápido."
          timeAgo="Postado 3 dias atrás"
          isAdmin={isAdmin}
        />
        <PostCard
          author="Prof. João Ribeiro"
          title="Como evitar distrações e manter o foco total."
          timeAgo="Postado 6 dias atrás"
          isAdmin={isAdmin}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#FDD9A0',
    padding: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  loginText: {
    color: '#DA8B00',
    fontWeight: '600',
    fontSize: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#DA8B00',
    width: 50,
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 12,
    marginTop: 25,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  listHeader: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTitle: {
    color: '#DA8B00',
    fontWeight: '600',
    fontSize: 16,
  },
  createButton: {
    backgroundColor: '#228B22',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  postsContainer: {
    marginTop: 24,
  },
});
