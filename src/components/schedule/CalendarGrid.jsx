import React from "react";
import {
  format,
  isSameMonth,
  isSameDay,
  isToday,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarGrid({ month, blocks, selectedDate, onSelect, onPrev, onNext }) {
  const start = startOfWeek(startOfMonth(month), { weekStartsOn: 0 });
  const end = endOfWeek(endOfMonth(month), { weekStartsOn: 0 });
  const days = eachDayOfInterval({ start, end });

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={onPrev}
          className="rounded-lg p-1.5 text-foreground/60 hover:bg-stonebg hover:text-foreground"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h3 className="font-heading text-lg font-semibold text-foreground">{format(month, "MMMM yyyy")}</h3>
        <button
          onClick={onNext}
          className="rounded-lg p-1.5 text-foreground/60 hover:bg-stonebg hover:text-foreground"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-1 grid grid-cols-7 text-center text-xs font-medium text-foreground/40">
        {WEEKDAYS.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => {
          const dayBlocks = blocks.filter((b) => isSameDay(new Date(b.start_date), d));
          const inMonth = isSameMonth(d, month);
          const selected = selectedDate && isSameDay(d, selectedDate);
          const today = isToday(d);
          return (
            <button
              key={d.toISOString()}
              onClick={() => onSelect(d)}
              className={`flex min-h-[64px] flex-col items-start gap-1 rounded-lg border p-1.5 text-left transition ${
                selected ? "border-primary bg-primary/10" : "border-border hover:bg-stonebg"
              } ${inMonth ? "" : "opacity-40"}`}
            >
              <span
                className={`text-xs font-medium ${
                  today
                    ? "flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    : "text-foreground/70"
                }`}
              >
                {format(d, "d")}
              </span>
              <div className="w-full space-y-0.5">
                {dayBlocks.slice(0, 2).map((b) => (
                  <div
                    key={b.id}
                    className="truncate rounded bg-coldstone/15 px-1 py-0.5 text-[10px] font-medium text-coldstone"
                  >
                    {b.title}
                  </div>
                ))}
                {dayBlocks.length > 2 && (
                  <div className="px-1 text-[10px] text-foreground/40">+{dayBlocks.length - 2} more</div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}