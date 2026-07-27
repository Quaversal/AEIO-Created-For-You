import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Plus, Loader2 } from "lucide-react";

export default function BlockForm({ date, onAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("17:00");
  const [saving, setSaving] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setSaving(true);
    try {
      const startDate = new Date(`${date}T${start}`);
      const endDate = new Date(`${date}T${end}`);
      await base44.entities.ScheduleBlock.create({
        title: title.trim(),
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
      });
      setTitle("");
      onAdded?.();
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="text-xs font-medium text-foreground/60">What are you busy with?</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Grading, Class prep"
          className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-xs font-medium text-foreground/60">Start</label>
          <input
            type="time"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-foreground/60">End</label>
          <input
            type="time"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={saving || !title.trim()}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50"
      >
        {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
        Add busy block
      </button>
    </form>
  );
}