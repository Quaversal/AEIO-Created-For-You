import React, { useState, useEffect } from "react";
import { Loader2, AlertCircle, FileCode, Github } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import FileTree from "@/components/FileTree";

const REPO_OWNER = "Quaversal";
const REPO_NAME = "AEIO-Planner";
const BRANCH = "main";

const TREE_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${BRANCH}?recursive=1`;
const rawUrl = (path) =>
  `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${path
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;

export default function StaffPortal() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [active, setActive] = useState(null);
  const [content, setContent] = useState("");
  const [fileLoading, setFileLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(TREE_URL, { headers: { Accept: "application/vnd.github+json" } });
        if (!res.ok) throw new Error(`GitHub API error (${res.status}).`);
        const data = await res.json();
        const blobs = (data.tree || [])
          .filter((n) => n.type === "blob")
          .map((n) => ({ path: n.path, size: n.size }));
        setFiles(blobs);
      } catch (e) {
        setError(e.message || "Failed to load repository.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const openFile = async (path) => {
    setActive(path);
    setFileLoading(true);
    setContent("");
    try {
      const res = await fetch(rawUrl(path));
      if (!res.ok) throw new Error("Failed to load file.");
      setContent(await res.text());
    } catch (e) {
      setContent("// Failed to load file.");
    } finally {
      setFileLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stonebg">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        <header className="mb-8">
          <span className="text-xs font-medium tracking-label text-primary">Staff Portal</span>
          <h1 className="mt-2 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            AEIO-Planner Source
          </h1>
          <p className="mt-2 flex items-center gap-2 text-sm text-foreground/60">
            <Github className="h-4 w-4" />
            Browsing <span className="font-medium text-foreground/80">{REPO_OWNER}/{REPO_NAME}</span> — the full
            codebase, in-browser.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="h-[70vh] overflow-y-auto rounded-2xl border border-border bg-card p-3">
            {loading ? (
              <div className="flex items-center gap-2 p-4 text-sm text-foreground/60">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading files…
              </div>
            ) : error ? (
              <div className="flex items-start gap-2 p-4 text-sm text-destructive">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            ) : files.length === 0 ? (
              <div className="p-4 text-sm text-foreground/50">This repository has no files.</div>
            ) : (
              <FileTree files={files} active={active} onSelect={openFile} />
            )}
          </aside>

          <section className="flex h-[70vh] flex-col overflow-hidden rounded-2xl border border-border bg-card">
            {active ? (
              <>
                <div className="flex items-center gap-2 border-b border-border px-4 py-3 text-sm font-medium text-foreground/80">
                  <FileCode className="h-4 w-4 shrink-0 text-primary" />
                  <span className="truncate">{active}</span>
                </div>
                <div className="flex-1 overflow-auto">
                  {fileLoading ? (
                    <div className="flex items-center gap-2 p-6 text-sm text-foreground/60">
                      <Loader2 className="h-4 w-4 animate-spin" /> Loading…
                    </div>
                  ) : (
                    <pre className="whitespace-pre p-4 font-mono text-xs leading-relaxed text-foreground/80">
                      <code>{content}</code>
                    </pre>
                  )}
                </div>
              </>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-foreground/50">
                Select a file to view its source.
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}