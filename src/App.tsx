import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { useNotes } from './hooks/useNotes';

function App() {
  const {
    notes,
    activeNote,
    activeNoteId,
    setActiveNoteId,
    addNote,
    deleteNote,
    updateNote,
  } = useNotes();

  return (
    <Layout>
      <div className="flex h-full">
        <Sidebar
          notes={notes}
          activeNoteId={activeNoteId}
          onSelectNote={setActiveNoteId}
          onAddNote={addNote}
          onDeleteNote={deleteNote}
        />
        <Main
          activeNote={activeNote}
          onUpdateNote={updateNote}
        />
      </div>
    </Layout>
  );
}

export default App;

