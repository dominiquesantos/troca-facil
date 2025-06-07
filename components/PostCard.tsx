import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type PostCardProps = {
  title: string;
  author: string;
  timeAgo: string;
  onPress?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
  isAdmin?: boolean;
};

export default function PostCard({
  title,
  author,
  timeAgo,
  onPress,
  onDelete,
  onEdit,
  isAdmin = false,
}: PostCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Por {author}</Text>
        <Text style={styles.time}>{timeAgo}</Text>
      </View>

      {isAdmin && (
        <View style={styles.actions}>
          {onEdit && (
            <TouchableOpacity style={styles.buttonEdit} onPress={onEdit}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          )}
          {onDelete && (
            <TouchableOpacity style={styles.buttonDelete} onPress={onDelete}>
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F8F7FF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    maxWidth: 220,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  actions: {
    justifyContent: 'center',
    gap: 8,
  },
  buttonEdit: {
    backgroundColor: '#228B22',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 6,
  },
  buttonDelete: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
});
