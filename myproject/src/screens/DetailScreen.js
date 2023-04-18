import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { note, setNotes } = route.params;
  const [noteText, setNoteText] = useState(note.text);

  const handleDeleteNote = () => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== note.id));
    navigation.goBack();
  };

  const handleUpdateNote = () => {
    setNotes((prevNotes) => prevNotes.map((n) => (n.id === note.id ? { ...n, text: noteText } : n)));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Note</Text>
      <TextInput
        style={styles.input}
        value={noteText}
        onChangeText={(text) => setNoteText(text)}
        multiline
        autoFocus
      />
      <View style={styles.buttons}>
        <Button title="Save" onPress={handleUpdateNote} />
        <Button title="Delete" onPress={handleDeleteNote} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});