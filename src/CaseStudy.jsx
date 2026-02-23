import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudy() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-pink-200">
            {/* Top Nav Minimal */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
                <div className="flex h-14 items-center px-4 sm:px-8">
                    <a href="/" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        <ArrowLeft size={16} />
                        Back to App
                    </a>
                </div>
            </header>

            {/* Layout Wrapper */}
            <div className="mx-auto flex w-full max-w-[1400px] items-start px-4 sm:px-8">

                {/* Left Sidebar */}
                <aside className="fixed top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-slate-200 py-6 pr-6 lg:block border-b-0">
                    <nav className="flex flex-col space-y-6">
                        <div>
                            <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold text-slate-900">Application</h4>
                            <div className="grid grid-flow-row auto-rows-max text-sm gap-0.5 mt-1">
                                <a href="/" className="group flex w-full items-center rounded-md border border-transparent px-2 py-2 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">Sound Engine UI</a>
                                <a href="/case-study" className="group flex w-full items-center rounded-md border border-transparent px-2 py-2 bg-blue-50/60 font-medium text-blue-700 transition-colors">Case Study</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold text-slate-900">Links</h4>
                            <div className="grid grid-flow-row auto-rows-max text-sm gap-0.5 mt-1">
                                <a href="https://github.com/suhasnayak7-kraft/music-loop" target="_blank" rel="noreferrer" className="group flex w-full items-center rounded-md border border-transparent px-2 py-2 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">GitHub Repository</a>
                            </div>
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:pl-[17rem] xl:pr-[17rem] pt-12 pb-16 min-h-screen">
                    <article className="prose prose-slate max-w-[45rem] w-full">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Interaction Sound Lab: Case Study</h1>
                        <p className="text-sm text-slate-500 mb-8 border-b border-slate-200 pb-8 tracking-wide">Last updated February 23, 2026</p>

                        <p className="text-lg text-slate-800 font-medium mb-12">
                            The Interaction Sound Lab is a procedural tool for exploring cross-modal feedback (auditory, visual, and physical). Below is the narrative of how we pivoted from a complex beat-maker to a hyper-focused UX engineering tool, mapping out exactly how we use procedural math and Figma Design Tokens to replace `mp3` files.
                        </p>

                        <h2 id="motivation" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">The Pivot: Form finding Function</h2>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            <strong>v0.1.0:</strong> This project began conceptually as a "Sound to Loop Beat Maker". The initial ideation was massive: audio file exports, databases, and 16-step sequencing algorithms.
                        </p>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            However, the actual problem we wanted to solve wasn't "how do we make music?", it was "how do we make user interfaces feel more tactile?" We aggressively scoped down and scrapped external `.mp3` libraries entirely in favor of a procedural frontend utility focusing exclusively on programmatic UX/UI feedback sounds using the Native Web Audio API.
                        </p>

                        <h2 id="the-engine" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">v1.0.0: The Synthesizer Pipeline</h2>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            Web applications often neglect audio because dealing with static `.mp3` files introduces latency. Even a 50ms audio delay ruins the physical "feel" of a click. We needed zero-latency responses.
                        </p>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            To solve this, we built a <strong>custom physics engine</strong> in React. We established <strong>20 Unique Base Frequencies</strong>—every single icon is assigned a hard-coded bespoke pitch (Hz). For example, a heavy "Delete" action is deeply pitched at 220Hz, whereas a cheerful "Create" action spikes at 680Hz.
                        </p>

                        <h2 id="style-guide" className="text-2xl font-bold mt-16 mb-6 scroll-mt-24 text-slate-900 tracking-tight">Figma Design Tokens & Categories</h2>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            Once the audio pipeline was flawless, we needed the UI to reflect granular semantic control. The app utilizes a strict <strong>Figma Token Hierarchy</strong>. The foundation rests entirely on the neutral `slate` scale, reserving vibrant colors *only* for the semantic categories to map visual cues directly to the audio pitch ranges:
                        </p>
                        <div className="overflow-hidden mb-8 rounded-xl border border-slate-200 bg-white shadow-sm">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-900/80 uppercase tracking-wider text-[11px] font-bold">
                                    <tr>
                                        <th className="p-4 border-b border-slate-200">Category</th>
                                        <th className="p-4 border-b border-slate-200">Semantic Token</th>
                                        <th className="p-4 border-b border-slate-200">Base Pitch</th>
                                        <th className="p-4 border-b border-slate-200">Usage</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-medium text-slate-800">Navigation</td>
                                        <td className="p-4 font-mono text-blue-600 bg-blue-50/50">blue-*</td>
                                        <td className="p-4 text-slate-600">~400Hz (Mid)</td>
                                        <td className="p-4 text-slate-600">Standard routing actions</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-medium text-slate-800">Data Actions</td>
                                        <td className="p-4 font-mono text-rose-600 bg-rose-50/50">rose-*</td>
                                        <td className="p-4 text-slate-600">~300Hz (Deep)</td>
                                        <td className="p-4 text-slate-600">Destructive logic</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-medium text-slate-800">System</td>
                                        <td className="p-4 font-mono text-violet-600 bg-violet-50/50">violet-*</td>
                                        <td className="p-4 text-slate-600">~500Hz (Hi-Mid)</td>
                                        <td className="p-4 text-slate-600">User settings</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-medium text-slate-800">Utilities</td>
                                        <td className="p-4 font-mono text-emerald-600 bg-emerald-50/50">emerald-*</td>
                                        <td className="p-4 text-slate-600">~600Hz (High)</td>
                                        <td className="p-4 text-slate-600">Downloads, positives</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-lg font-bold mt-10 mb-3 text-slate-900">Global UI Tokens</h3>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            Global structural components are built exclusively from mapped Slate tokens to guarantee contrast and consistency across Light and Dark mode variations.
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-slate-700 space-y-2 marker:text-slate-300">
                            <li><code className="text-slate-900 bg-slate-100 px-1 py-0.5 rounded font-mono text-[13px]">bg-app</code>: <code>slate-50</code> (Light) / <code>slate-950</code> (Dark)</li>
                            <li><code className="text-slate-900 bg-slate-100 px-1 py-0.5 rounded font-mono text-[13px]">bg-surface</code>: <code>white</code> / <code>slate-900</code> — Cards, grids, controls</li>
                            <li><code className="text-slate-900 bg-slate-100 px-1 py-0.5 rounded font-mono text-[13px]">border-subtle</code>: <code>slate-200</code> / <code>slate-800</code> — Borders for squircles/controls</li>
                            <li><code className="text-slate-900 bg-slate-100 px-1 py-0.5 rounded font-mono text-[13px]">text-secondary</code>: <code>slate-500</code> / <code>slate-400</code> — Descriptions, inactive tabs</li>
                        </ul>

                        <h2 id="interaction" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">Interactive States & Physics</h2>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            The UI uses tightly coupled Interactive Color Tokens. Depending on the semantic category (e.g. Navigation is Blue), the component mathematically shifts into that color's specific ramp:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-slate-700 space-y-2 marker:text-slate-300">
                            <li><strong>category-default:</strong> <code>color-500</code> — The active ring state and central visualizer burst.</li>
                            <li><strong>category-hover-bg:</strong> <code>color-50</code> — The background of the squircle on hover.</li>
                            <li><strong>category-active-bg:</strong> <code>color-100</code> — The background of the squircle on click.</li>
                            <li><strong>category-hover-border:</strong> <code>color-300</code> — The border glow of squircle on hover.</li>
                        </ul>

                        <p className="mb-4 text-slate-700 leading-relaxed">
                            The physical "Interaction Lifecycle" pushes these colors into motion via a strict physics loop:
                            <br /><strong>Hover:</strong> The user sees an <code>ease-in-out</code> pop (<code>scale-[1.05]</code>) and elevation (<code>-translate-y-2</code>) signalling weight.
                            <br /><strong>Click:</strong> The UI instantly dips (<code>scale-95</code>). Simultaneously, the hidden <code>AudioContext</code> fires, and the central visualizer physically throbs using the <code>category-default</code> token.
                        </p>

                        <h2 id="typography" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">Typography</h2>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            Typography significantly dictates the perceived "weight" of audio signals. By hot-swapping between the highly engineered <strong>Space Grotesk</strong> or the bouncy, rounded <strong>Poppins</strong>, a UX researcher can immediately hear how the exact same 300Hz square wave "feels" completely different depending on the visual framing around it.
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-slate-700 space-y-3 marker:text-slate-300">
                            <li><strong className="text-slate-900 font-sans">Inter:</strong> Default system fallback, highly parsed and clean.</li>
                            <li><strong className="text-slate-900" style={{ fontFamily: "Poppins" }}>Poppins:</strong> Friendly and rounded, matching bouncy tones perfectly.</li>
                            <li><strong className="text-slate-900" style={{ fontFamily: "Space Grotesk" }}>Space Grotesk:</strong> Engineered and strict, pairs with "Secure" square waves.</li>
                            <li><strong className="text-slate-900" style={{ fontFamily: "Roboto" }}>Roboto:</strong> Standard corporate reliability.</li>
                            <li><strong className="text-slate-900" style={{ fontFamily: "Urbanist" }}>Urbanist:</strong> Modern geometric structure.</li>
                        </ul>

                        <p className="mb-4 text-slate-700 leading-relaxed">
                            <strong>System Scaling:</strong>
                            <br />- <code>text-4xl</code> (36px / 40px LH) — App Titles with <code>tracking-tight</code>.
                            <br />- <code>text-lg</code> (18px / 28px LH) — Descriptions.
                            <br />- <code>text-sm</code> (14px / 20px LH) — Mood Tabs and Dropdowns (<code>font-semibold</code>).
                            <br />- <code>text-xs</code> (12px / 16px LH) — Grid Titles and Icon Labels (<code>tracking-widest</code>).
                        </p>

                        <h2 id="sizing" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">Sizing & Spacing</h2>
                        <ul className="list-disc pl-5 mb-8 text-slate-700 space-y-2 marker:text-slate-300">
                            <li><strong>Spacing:</strong> The grid strictly adheres to a 4px/8px baseline (<code>spacing-1</code>=4px up to <code>spacing-16</code>=64px).</li>
                            <li><strong>Element Sizing:</strong> Squircles are rigidly bound to <code>size-16</code> (64x64px), while the central visualizer rests at <code>size-24</code> (96x96px).</li>
                            <li><strong>Border Radii:</strong> Ranging from <code>rounded-xl</code> (12px) for buttons, <code>rounded-2xl</code> (16px) for massive glass panels, and <code>rounded-full</code> enforcing the central circular threshold.</li>
                        </ul>

                    </article>
                </main>

                {/* Right Sidebar */}
                <aside className="fixed top-14 right-0 hidden h-[calc(100vh-3.5rem)] w-64 overflow-y-auto py-10 pl-8 pr-4 xl:block">
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-900">On this page</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#motivation" className="hover:text-slate-900 transition-colors">The Pivot</a></li>
                            <li><a href="#the-engine" className="hover:text-slate-900 transition-colors">Synthesizer Pipeline</a></li>
                            <li><a href="#style-guide" className="hover:text-slate-900 transition-colors">Figma Tokens & Categories</a></li>
                            <li><a href="#interaction" className="hover:text-slate-900 transition-colors">Interactive States & Physics</a></li>
                            <li><a href="#typography" className="hover:text-slate-900 transition-colors">Typography</a></li>
                            <li><a href="#sizing" className="hover:text-slate-900 transition-colors">Sizing & Spacing</a></li>
                        </ul>
                    </div>
                </aside>

            </div>
        </div>
    );
}
