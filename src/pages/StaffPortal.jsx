import React, { useState, useEffect, useMemo } from "react";
import { base44 } from "@/api/base44Client";
import { format, isSameDay, addMonths, subMonths, startOfMonth } from "date-fns";
import { Loader2, Trash2, Clock, CalendarDays, LogOut } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import CalendarGrid from "@/components/schedule/CalendarGrid";
import BlockForm from "@/components/schedule/BlockForm";

export default function StaffPortal() {
  const [user, setUser] = useState(null);
  const [userMap, setUserMap] = useState({});
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState(startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const load = async (me) => {
    const isAdmin = me.role === "admin";
    const res = await base44.entities.ScheduleBlock.filter(
      isAdmin ? {} : { created_by_id: me.id },
      "start_date"
    );
    setBlocks(res);
    if (isAdmin) {
      const users = await base44.entities.User.list();
      setUserMap(Object.fromEntries(users.map((u) => [u.id, u.full_name || u.email])));
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const me = await base44.auth.me();
        setUser(me);
        await load(me);
      } catch (e) {
        // ignore — ProtectedRoute gates access
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const selectedDayBlocks = useMemo(
    () => blocks.filter((b) => isSameDay(new Date(b.start_date), selectedDate)),
    [blocks, selectedDate]
  );

  const handleAdded = async () => {
    if (user) await load(user);
  };

  const handleDelete = async (id) => {
    await base44.entities.ScheduleBlock.delete(id);
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  const handleSignOut = async () => {
    await base44.auth.logout("/login");
  };

  return (
    <div className="relative min-h-screen bg-stonebg">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.base44.com/images/public/6a67b5b8cea8c1982f3940ce/f4b9080d5_image.png')",
          filter: "blur(3px)",
          transform: "scale(1.06)",
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-slatedeep/85 via-coldstone/80 to-slatedeep/85" />
      <SiteNav />
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        <header className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-medium tracking-label text-primary">Staff Portal</span>
              <h1 className="mt-2 font-heading text-3xl font-semibold text-foreground sm:text-4xl">My Schedule</h1>
            </div>
            <button
              onClick={handleSignOut}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground/70 transition hover:text-primary"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
          <p className="mt-2 text-sm text-foreground/60">
            {user
              ? user.role === "admin"
                ? "Admin view — you can see every staff member's busy blocks."
                : `Welcome back, ${user.full_name || user.email}. Mark the time blocks when you're busy.`
              : "Mark the time blocks when you're busy."}
          </p>
        </header>

        {loading ? (
          <div className="flex items-center gap-2 text-foreground/60">
            <Loader2 className="h-5 w-5 animate-spin" /> Loading your schedule…
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="rounded-2xl border border-border bg-card p-5">
              <CalendarGrid
                month={month}
                blocks={blocks}
                selectedDate={selectedDate}
                onSelect={setSelectedDate}
                onPrev={() => setMonth(subMonths(month, 1))}
                onNext={() => setMonth(addMonths(month, 1))}
              />
            </div>

            <aside className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {format(selectedDate, "EEEE, MMM d")}
                </h3>
              </div>
              <p className="mt-1 text-xs text-foreground/50">Busy time blocks</p>

              <div className="mt-4 space-y-2">
                {selectedDayBlocks.length === 0 ? (
                  <p className="rounded-lg border border-dashed border-border px-3 py-6 text-center text-sm text-foreground/50">
                    No blocks scheduled for this day.
                  </p>
                ) : (
                  selectedDayBlocks.map((b) => (
                    <div
                      key={b.id}
                      className="flex items-center justify-between rounded-lg border border-border bg-stonebg/50 px-3 py-2"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">{b.title}</p>
                        <p className="flex items-center gap-1 text-xs text-foreground/50">
                          <Clock className="h-3 w-3" />
                          {format(new Date(b.start_date), "h:mm a")} – {format(new Date(b.end_date), "h:mm a")}
                        </p>
                        {user?.role === "admin" && (
                          <p className="truncate text-[11px] text-foreground/40">
                            {userMap[b.created_by_id] || "Staff"}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => handleDelete(b.id)}
                        className="ml-2 shrink-0 text-foreground/40 transition hover:text-destructive"
                        aria-label="Delete block"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-5 border-t border-border pt-4">
                <BlockForm date={format(selectedDate, "yyyy-MM-dd")} onAdded={handleAdded} />
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}