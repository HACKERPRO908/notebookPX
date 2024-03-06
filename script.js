const noteInput = document.getElementById('note-input');
const notesList = document.getElementById('notes-list');

function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText !== '') {
    const li = document.createElement('li');
    li.textContent = noteText;
    li.addEventListener('click', function() {
      if (confirm('Are you sure you want to delete this note?')) {
        li.remove();
      }
    });
    notesList.appendChild(li);
    noteInput.value = '';
  }
}
