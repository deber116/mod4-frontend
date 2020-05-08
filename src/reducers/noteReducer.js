export default function noteReducer (state = [], action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, action.note];
        
        case "LOAD_NOTES":
            return action.notes
        
        case "DELETE_NOTE":
            const updatedNotes = state.filter(note => {return action.note.id !== note.id})
            return updatedNotes

        case "UPDATE_NOTE":
            const newUpdatedNotes = state.map(note => {
                if (note.id === action.note.id) {
                    return action.note
                } else {
                    return note
                }
            })
            return newUpdatedNotes
      
        default:
            return state;
    }
}