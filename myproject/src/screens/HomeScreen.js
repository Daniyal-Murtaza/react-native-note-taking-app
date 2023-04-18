import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      text: newNoteText
    };
    setNotes([...notes, newNote]);
    setNewNoteText('');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { note: item, setNotes })}>
      <Text style={styles.noteItem}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Note Taking App</Text>
      <TextInput
        style={styles.input}
        value={newNoteText}
        onChangeText={(text) => setNewNoteText(text)}
        placeholder="Enter a new note"
      />
      <Button title="Add" onPress={handleAddNote} />
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.notesList}
      />
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
  },
  noteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notesList: {
    width: '100%',
  },
});