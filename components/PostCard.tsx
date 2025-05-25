import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type PostCardProps = {
  title: string;
  author: string;
  timeAgo: string;
  onPress?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
  isAdmin?: boolean; // 👈 adiciona isso aqui
};

export default function PostCard({
  title,
  author,
  timeAgo,
  onPress,
  onDelete,
  onEdit,
  isAdmin = false, // 👈 valor padrão
}: PostCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Por {author}</Text>
        <Text style={styles.time}>{timeAgo}</Text>
      </View>

      {isAdmin && (
        <View style={styles.actions}>
          {onEdit && (
            <TouchableOpacity onPress={onEdit}>
              <Text style={styles.edit}>Editar</Text>
            </TouchableOpacity>
          )}
          {onDelete && (
            <TouchableOpacity onPress={onDelete}>
              <Text style={styles.delete}>Excluir</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#555' },
  time: { fontSize: 12, color: '#999' },
  actions: { flexDirection: 'row', gap: 8 },
  edit: { color: '#007bff', marginRight: 8 },
  delete: { color: '#ff4d4d' },
});
