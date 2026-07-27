import React, { useState } from "react";
import { File, ChevronRight, ChevronDown, Folder } from "lucide-react";

function buildTree(files) {
  const root = { children: {}, files: [] };
  for (const f of files) {
    const parts = f.path.split("/");
    let node = root;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!node.children[part]) {
        node.children[part] = { name: part, path: parts.slice(0, i + 1).join("/"), children: {}, files: [] };
      }
      node = node.children[part];
    }
    node.files.push({ name: parts[parts.length - 1], path: f.path, size: f.size });
  }
  return root;
}

function FolderRow({ folder, depth, active, onSelect }) {
  const [open, setOpen] = useState(false);
  const childFolders = Object.values(folder.children).sort((a, b) => a.name.localeCompare(b.name));
  const childFiles = folder.files.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-1.5 rounded px-2 py-1 text-left text-sm hover:bg-stonebg"
        style={{ paddingLeft: depth * 12 + 8 }}
      >
        {open ? (
          <ChevronDown className="h-3.5 w-3.5 text-foreground/50" />
        ) : (
          <ChevronRight className="h-3.5 w-3.5 text-foreground/50" />
        )}
        <Folder className="h-4 w-4 text-primary/70" />
        <span className="text-foreground/80">{folder.name}</span>
      </button>
      {open && (
        <div>
          {childFolders.map((f) => (
            <FolderRow key={f.path} folder={f} depth={depth + 1} active={active} onSelect={onSelect} />
          ))}
          {childFiles.map((file) => (
            <button
              key={file.path}
              onClick={() => onSelect(file.path)}
              className={`flex w-full items-center gap-1.5 rounded px-2 py-1 text-left text-sm ${
                active === file.path ? "bg-primary/10 text-primary" : "hover:bg-stonebg text-foreground/70"
              }`}
              style={{ paddingLeft: (depth + 1) * 12 + 8 }}
            >
              <File className="h-4 w-4 shrink-0" />
              <span className="truncate">{file.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileTree({ files, active, onSelect }) {
  const root = buildTree(files);
  const childFolders = Object.values(root.children).sort((a, b) => a.name.localeCompare(b.name));
  const childFiles = root.files.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      {childFolders.map((f) => (
        <FolderRow key={f.path} folder={f} depth={0} active={active} onSelect={onSelect} />
      ))}
      {childFiles.map((file) => (
        <button
          key={file.path}
          onClick={() => onSelect(file.path)}
          className={`flex w-full items-center gap-1.5 rounded px-2 py-1 text-left text-sm ${
            active === file.path ? "bg-primary/10 text-primary" : "hover:bg-stonebg text-foreground/70"
          }`}
          style={{ paddingLeft: 8 }}
        >
          <File className="h-4 w-4 shrink-0" />
          <span className="truncate">{file.name}</span>
        </button>
      ))}
    </div>
  );
}