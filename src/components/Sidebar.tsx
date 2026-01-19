import { useState } from 'react';
import { Plus, Search, Trash2, FileText } from 'lucide-react';
import { Note } from '../types';

interface SidebarProps {
  notes: Note[];
  activeNoteId: string | null;
  onSelectNote: (id: string) => void;
  onAddNote: () => void;
  onDeleteNote: (id: string) => void;
}

/**
 * Sidebar component with note list and search functionality
 */
export const Sidebar = ({ 
  notes, 
  activeNoteId, 
  onSelectNote, 
  onAddNote, 
  onDeleteNote 
}: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter notes based on search query
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 24 * 7) {
      return date.toLocaleDateString('zh-CN', { weekday: 'short' });
    } else {
      return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="w-80 h-full bg-dark-800/50 backdrop-blur-sm border-r border-dark-700/50 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-dark-700/50">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-white flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary-400" />
            我的笔记
          </h1>
          <button
            onClick={onAddNote}
            className="p-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white transition-all duration-200 hover:scale-105 active:scale-95"
            title="新建笔记"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Search Box */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
          <input
            type="text"
            placeholder="搜索笔记..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-dark-700/50 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto">
        {filteredNotes.length === 0 ? (
          <div className="p-8 text-center text-dark-400">
            {searchQuery ? '未找到匹配的笔记' : '暂无笔记，点击上方按钮创建'}
          </div>
        ) : (
          <div className="p-2">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                onClick={() => onSelectNote(note.id)}
                className={`group relative p-4 mb-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  activeNoteId === note.id
                    ? 'bg-primary-600/20 border border-primary-500/50 shadow-lg shadow-primary-500/10'
                    : 'bg-dark-700/30 border border-transparent hover:bg-dark-700/50 hover:border-dark-600'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white truncate mb-1">
                      {note.title || '无标题'}
                    </h3>
                    <p className="text-sm text-dark-400 truncate mb-2">
                      {note.content.substring(0, 50) || '空笔记'}
                    </p>
                    <span className="text-xs text-dark-500">
                      {formatDate(note.createdAt)}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteNote(note.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md hover:bg-red-500/20 text-dark-400 hover:text-red-400 transition-all duration-200"
                    title="删除笔记"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-dark-700/50 text-center text-xs text-dark-500">
        共 {notes.length} 条笔记
      </div>
    </div>
  );
};

