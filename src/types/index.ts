/**
 * Note interface representing a single markdown note
 */
export interface Note {
  id: string;          // UUID
  title: string;       // Note title
  content: string;     // Markdown content
  createdAt: number;   // Timestamp
}

