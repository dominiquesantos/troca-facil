import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CreatePost() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Post</Text>
      <View style={styles.underline} />

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Título</Text>
        <TextInput style={styles.input} placeholder="Digite o título" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Texto</Text>
        <TextInput
          style={[styles.input, { height: 120 }]}
          placeholder="Digite o texto"
          multiline
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Autor</Text>
        <TextInput style={styles.input} placeholder="Digite o nome do autor" />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 16,
  },
  underline: {
    height: 3,
    width: 90,
    backgroundColor: '#4CAF50',
    alignSelf: 'center',
    borderRadius: 2,
    marginBottom: 24,
    marginTop: 4,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    marginBottom: 8,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  deleteButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
