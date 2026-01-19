# Markdown Note App

一个现代化的 Markdown 笔记应用，支持实时预览、代码高亮和本地存储。

## ✨ 功能特性

- 📝 **Markdown 编辑**: 支持完整的 Markdown 语法
- 👀 **实时预览**: 左侧编辑，右侧实时预览
- 🎨 **代码高亮**: 支持多种编程语言的语法高亮
- 💾 **自动保存**: 所有更改自动保存到浏览器本地存储
- 🔍 **快速搜索**: 通过标题或内容快速查找笔记
- 🎯 **简洁界面**: 现代化的深色主题设计

## 🚀 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 快速构建工具
- **Tailwind CSS** - 样式框架
- **react-markdown** - Markdown 渲染
- **react-syntax-highlighter** - 代码语法高亮
- **lucide-react** - 图标库

## 📦 安装

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 🌐 部署到 Vercel

本项目已针对 Vercel 部署进行优化：

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. Vercel 会自动检测配置并部署

或使用 Vercel CLI：

```bash
npm install -g vercel
vercel
```

## 📁 项目结构

```
markdown-note-app/
├── public/              # 静态资源
├── src/
│   ├── components/      # React 组件
│   │   ├── Layout.tsx   # 布局组件
│   │   ├── Sidebar.tsx  # 侧边栏（笔记列表）
│   │   ├── Main.tsx     # 主内容区
│   │   ├── Editor.tsx   # Markdown 编辑器
│   │   └── Preview.tsx  # 预览组件
│   ├── hooks/           # 自定义 Hooks
│   │   └── useNotes.ts  # 笔记管理逻辑
│   ├── types/           # TypeScript 类型定义
│   │   └── index.ts
│   ├── App.tsx          # 根组件
│   ├── main.tsx         # 入口文件
│   └── index.css        # 全局样式
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── vercel.json          # Vercel 配置
```

## 🎯 使用说明

1. **创建笔记**: 点击左上角的 "+" 按钮创建新笔记
2. **编辑笔记**: 在左侧编辑器中输入 Markdown 内容
3. **查看预览**: 右侧实时显示渲染后的效果
4. **搜索笔记**: 使用搜索框快速查找笔记
5. **删除笔记**: 悬停在笔记上，点击删除图标

## 📝 Markdown 语法支持

- 标题 (H1-H6)
- 粗体、斜体、删除线
- 列表（有序、无序）
- 链接和图片
- 代码块（支持语法高亮）
- 引用
- 表格
- 分隔线

## 🎨 代码高亮示例

支持的语言包括但不限于：

- JavaScript/TypeScript
- Python
- Java
- C/C++
- Go
- Rust
- HTML/CSS
- SQL
- Bash
- 等等...

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

