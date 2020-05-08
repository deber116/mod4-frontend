export const addNote = note => {
    return {
      type: 'ADD_NOTE',
      note: note
    };
};

export const loadNotes = notes => {
    return {
      type: 'LOAD_NOTES',
      notes: notes
    };
};

export const deleteNote = note => {
  return {
    type: 'DELETE_NOTE',
    note: note
  };
};

export const updateNote = note => {
  return {
    type: 'UPDATE_NOTE',
    note: note
  };
};