import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-stonebg">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              

              
              <span className="text-foreground [font-family:'Griddy_Blocks',_sans-serif] font-normal text-5xl">Aeio</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-foreground/60">Digital First Organization
            </p>
            <p className="mt-3 text-sm font-medium text-primary">Serving the Greater New York Area</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-label text-foreground/50">Programs</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li><a href="#programs" className="transition hover:text-primary">Elementary</a></li>
              <li><a href="#programs" className="transition hover:text-primary">Middle School</a></li>
              <li><a href="#programs" className="transition hover:text-primary">High School</a></li>
              <li><a href="#programs" className="transition hover:text-primary">Enrichment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-label text-foreground/50">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li><a href="#approach" className="transition hover:text-primary">Our Approach</a></li>
              <li><a href="#stories" className="transition hover:text-primary">Stories</a></li>
              <li><a href="#enroll" className="transition hover:text-primary">Enroll</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-label text-foreground/50">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@aeio.edu</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (646) 612-1375</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Online & nationwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-foreground/50">© {new Date().getFullYear()} AEIO Homeschool. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-foreground/50">
            <a href="#" className="transition hover:text-primary">Privacy</a>
            <a href="#" className="transition hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>);

}