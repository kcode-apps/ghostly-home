import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Licenses | GhostLy",
  description: "Third party open source libraries used to build GhostLy.",
};

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-3xl relative z-10">
        <div className="absolute inset-0 bg-glow opacity-10 pointer-events-none -z-10" />
        
        <h1 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight mb-4">Open Source Credits</h1>
        <p className="text-muted-foreground mb-12">
          GhostLy stands on great open source software. We&apos;re grateful to the community that built the tools behind this app.
          Below are the major libraries we use and their licenses.
        </p>

        <div className="space-y-12 text-white/80 leading-relaxed font-inter">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit border-b border-neutral-800 pb-2">Frontend Stack</h2>
            <ul className="space-y-6">
              <li>
                <div className="font-bold text-white mb-1">React & React DOM</div>
                <div className="text-xs text-neutral-500 font-mono mb-2">License: MIT</div>
                <p className="text-sm">Copyright (c) Meta Platforms, Inc. and affiliates.</p>
              </li>
              <li>
                <div className="font-bold text-white mb-1">Tailwind CSS</div>
                <div className="text-xs text-neutral-500 font-mono mb-2">License: MIT</div>
                <p className="text-sm">Copyright (c) Tailwind Labs, Inc.</p>
              </li>
              <li>
                <div className="font-bold text-white mb-1">Framer Motion</div>
                <div className="text-xs text-neutral-500 font-mono mb-2">License: MIT</div>
                <p className="text-sm">Copyright (c) Framer B.V.</p>
              </li>
              <li>
                <div className="font-bold text-white mb-1">Zustand</div>
                <div className="text-xs text-neutral-500 font-mono mb-2">License: MIT</div>
                <p className="text-sm">Copyright (c) 2019 Paul Henschel</p>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit border-b border-neutral-800 pb-2">Backend Stack (Rust/Tauri)</h2>
            <ul className="space-y-6">
              <li>
                <div className="font-bold text-white mb-1">Tauri (Core & Plugins)</div>
                <div className="text-xs text-neutral-500 font-mono mb-2">License: MIT / Apache 2.0</div>
                <p className="text-sm">Copyright (c) Tauri Programme within The Commons Conservancy</p>
              </li>
              <li>
                <div className="font-bold text-white mb-1">Tokio & Futures</div>
                <div className="text-xs text-neutral-500 font-mono mb-2">License: MIT</div>
                <p className="text-sm">Copyright (c) Tokio Contributors</p>
              </li>
              <li>
                <div className="font-bold text-white mb-1">Candle (Core, NN, Transformers)</div>
                <div className="text-xs text-neutral-500 font-mono mb-2">License: MIT / Apache 2.0</div>
                <p className="text-sm">Copyright (c) HuggingFace</p>
              </li>
              <li>
                <div className="font-bold text-white mb-1">Reqwest</div>
                <div className="text-xs text-neutral-500 font-mono mb-2">License: MIT / Apache 2.0</div>
                <p className="text-sm">Copyright (c) Sean McArthur</p>
              </li>
            </ul>
          </section>

          <section className="space-y-4 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
            <h2 className="text-lg font-bold text-white font-outfit">Standard Permission Notice</h2>
            <p className="text-xs text-neutral-400 font-mono whitespace-pre-wrap">
{`Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
