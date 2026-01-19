import { Editor } from './Editor';
import { Preview } from './Preview';
import { Note } from '../types';
import { BookOpen } from 'lucide-react';

interface MainProps {
  activeNote: Note | null;
  onUpdateNote: (id: string, updates: Partial<Omit<Note, 'id' | 'createdAt'>>) => void;
}

/**
 * Main content area with split editor and preview
 */
export const Main = ({ activeNote, onUpdateNote }: MainProps) => {
  if (!activeNote) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="text-center">
          <BookOpen className="w-20 h-20 text-dark-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-dark-400 mb-2">选择或创建一个笔记</h2>
          <p className="text-dark-500">从左侧列表选择笔记，或点击"+"创建新笔记</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex h-full">
      {/* Editor Pane */}
      <div className="w-1/2 h-full border-r border-dark-700/50">
        <Editor note={activeNote} onUpdateNote={onUpdateNote} />
      </div>

      {/* Preview Pane */}
      <div className="w-1/2 h-full">
        <Preview note={activeNote} />
      </div>
    </div>
  );
};

