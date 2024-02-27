function addNote() {
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');

    if (noteInput.value.trim() === '') {
        alert('Please enter a note before adding.');
        return;
    }

    const noteElement = document.createElement('div');
    noteElement.className = 'note';

    const noteText = document.createElement('span');
    noteText.innerText = noteInput.value;
    noteElement.appendChild(noteText);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function () {
        notesContainer.removeChild(noteElement);
    };

    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);

    // Clear the input field after adding a note
    noteInput.value = '';
}
