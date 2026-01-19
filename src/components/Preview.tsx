import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Note } from '../types';

interface PreviewProps {
  note: Note;
}

/**
 * Preview component for rendering markdown with syntax highlighting
 */
export const Preview = ({ note }: PreviewProps) => {
  return (
    <div className="h-full overflow-y-auto bg-dark-800/30 backdrop-blur-sm">
      <div className="p-6">
        {/* Title Display */}
        <h1 className="text-3xl font-bold text-white mb-6 pb-4 border-b border-dark-700/50">
          {note.title || '无标题'}
        </h1>

        {/* Markdown Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              // Custom code block renderer with syntax highlighting
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                const codeContent = String(children).replace(/\n$/, '');
                
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg !bg-dark-900/50 !mt-4 !mb-4"
                    customStyle={{
                      padding: '1.5rem',
                      fontSize: '0.875rem',
                      lineHeight: '1.7',
                    }}
                    {...props}
                  >
                    {codeContent}
                  </SyntaxHighlighter>
                ) : (
                  <code className="px-1.5 py-0.5 rounded bg-dark-700/50 text-primary-400 font-mono text-sm" {...props}>
                    {children}
                  </code>
                );
              },
              // Custom heading styles
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-white mt-6 mb-3">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-white mt-5 mb-2">{children}</h3>
              ),
              // Custom paragraph styles
              p: ({ children }) => (
                <p className="text-dark-200 leading-relaxed mb-4">{children}</p>
              ),
              // Custom list styles
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-dark-200 mb-4 space-y-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-dark-200 mb-4 space-y-2">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-dark-200">{children}</li>
              ),
              // Custom blockquote styles
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 bg-dark-700/30 text-dark-300 italic">
                  {children}
                </blockquote>
              ),
              // Custom link styles
              a: ({ children, href }) => (
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 underline transition-colors"
                >
                  {children}
                </a>
              ),
              // Custom table styles
              table: ({ children }) => (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full border border-dark-700">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-dark-700 px-4 py-2 bg-dark-800 text-white font-semibold">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-dark-700 px-4 py-2 text-dark-200">{children}</td>
              ),
              // Custom horizontal rule
              hr: () => (
                <hr className="my-8 border-dark-700" />
              ),
            }}
          >
            {note.content || '*开始编写内容...*'}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

