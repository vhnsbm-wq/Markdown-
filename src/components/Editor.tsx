import { Note } from '../types';

interface EditorProps {
  note: Note;
  onUpdateNote: (id: string, updates: Partial<Omit<Note, 'id' | 'createdAt'>>) => void;
}

/**
 * Editor component for editing note title and markdown content
 */
export const Editor = ({ note, onUpdateNote }: EditorProps) => {
  return (
    <div className="flex flex-col h-full bg-dark-800/30 backdrop-blur-sm">
      {/* Title Input */}
      <div className="p-4 border-b border-dark-700/50">
        <input
          type="text"
          value={note.title}
          onChange={(e) => onUpdateNote(note.id, { title: e.target.value })}
          placeholder="笔记标题..."
          className="w-full text-2xl font-semibold bg-transparent text-white placeholder-dark-500 focus:outline-none"
        />
      </div>

      {/* Content Textarea */}
      <div className="flex-1 overflow-hidden">
        <textarea
          value={note.content}
          onChange={(e) => onUpdateNote(note.id, { content: e.target.value })}
          placeholder="开始编写你的 Markdown 内容..."
          className="w-full h-full p-6 bg-transparent text-white placeholder-dark-500 focus:outline-none resize-none font-mono text-sm leading-relaxed"
          spellCheck={false}
        />
      </div>
    </div>
  );
};

