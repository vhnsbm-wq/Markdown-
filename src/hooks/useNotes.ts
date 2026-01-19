import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Note } from '../types';

const STORAGE_KEY = 'markdown-notes';

/**
 * Custom hook for managing notes with localStorage persistence
 */
export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  // Load notes from localStorage on mount
  useEffect(() => {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    if (storedNotes) {
      try {
        const parsed = JSON.parse(storedNotes);
        setNotes(parsed);
        if (parsed.length > 0) {
          setActiveNoteId(parsed[0].id);
        }
      } catch (error) {
        console.error('Failed to parse notes from localStorage:', error);
      }
    } else {
      // Create a welcome note if no notes exist
      const welcomeNote: Note = {
        id: uuidv4(),
        title: '欢迎使用 Markdown 笔记',
        content: `# 欢迎使用 Markdown 笔记应用

## 功能特性

- ✨ **实时预览**: 左侧编辑，右侧实时预览
- 💾 **自动保存**: 所有更改自动保存到本地
- 🔍 **快速搜索**: 通过标题或内容搜索笔记
- 🎨 **代码高亮**: 支持多种编程语言的语法高亮

## Markdown 语法示例

### 代码块

\`\`\`javascript
function hello() {
  console.log('Hello, World!');
}
\`\`\`

### 列表

- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2

### 引用

> 这是一段引用文本

### 链接

[访问 GitHub](https://github.com)

开始创建你的第一个笔记吧！`,
        createdAt: Date.now(),
      };
      setNotes([welcomeNote]);
      setActiveNoteId(welcomeNote.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([welcomeNote]));
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }
  }, [notes]);

  /**
   * Add a new note
   */
  const addNote = () => {
    const newNote: Note = {
      id: uuidv4(),
      title: '新建笔记',
      content: '',
      createdAt: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
  };

  /**
   * Delete a note by ID
   */
  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    
    // If the deleted note was active, select another note
    if (activeNoteId === id) {
      if (updatedNotes.length > 0) {
        setActiveNoteId(updatedNotes[0].id);
      } else {
        setActiveNoteId(null);
      }
    }
  };

  /**
   * Update a note's title or content
   */
  const updateNote = (id: string, updates: Partial<Omit<Note, 'id' | 'createdAt'>>) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, ...updates } : note
    ));
  };

  /**
   * Get the currently active note
   */
  const activeNote = notes.find(note => note.id === activeNoteId) || null;

  return {
    notes,
    activeNote,
    activeNoteId,
    setActiveNoteId,
    addNote,
    deleteNote,
    updateNote,
  };
};

