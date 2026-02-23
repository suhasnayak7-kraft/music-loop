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
                <aside className="fixed top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-slate-200 py-6 pr-6 lg:block">
                    <nav className="flex flex-col space-y-2">
                        <div className="pb-4">
                            <h4 className="mb-1 rounded-md px-2 py-1 text-base font-semibold">Case Study</h4>
                            <div className="grid grid-flow-row auto-rows-max text-sm gap-1 mt-2">
                                <a href="#motivation" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-slate-100 text-slate-600 hover:text-slate-900">Why I Created This</a>
                                <a href="#style-guide" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-slate-100 text-slate-600 hover:text-slate-900">UI Style Guide</a>
                                <a href="#typography" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-slate-100 text-slate-600 hover:text-slate-900">Typography</a>
                                <a href="#technical" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-slate-100 text-slate-600 hover:text-slate-900">Technical Details</a>
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
                            The Interaction Sound Lab is a procedural tool for exploring cross-modal feedback (auditory, visual, and physical). But it wasn't always this way. Below is the narrative of how we pivoted from a complex beat-maker to a hyper-focused UX engineering tool, mapping out exactly how we use procedural math to replace `mp3` files.
                        </p>

                        <h2 id="motivation" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">The Pivot: Form finding Function</h2>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            <strong>v0.1.0:</strong> This project began conceptually as a "Sound to Loop Beat Maker". The initial ideation was massive: audio file exports, database configurations with Supabase, a backend UI for sample libraries, and complex 16-step sequencing algorithms.
                        </p>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            However, looking at the core design requirements, we realized the scope was bloated. The actual problem we wanted to solve wasn't "how do we make music?", it was "how do we make user interfaces feel more tactile?" We aggressively scoped down and pivoted into the <strong>Interaction Sound Lab</strong>. We scrapped Supabase and external `.mp3/.wav` libraries entirely in favor of a purely procedural frontend application focusing exclusively on programmatic UX/UI feedback sounds using the Native Web Audio API.
                        </p>

                        <h2 id="the-engine" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">v1.0.0: The Synthesizer Pipeline</h2>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            Web applications often neglect audio because dealing with static `.mp3` files introduces latency, bloat, and management overhead. When dealing with fluid UI states, even a 50ms audio latency ruins the physical "feel" of a click. We needed zero-latency responses.
                        </p>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            To solve this, we built a <strong>custom physics engine</strong> in React. Instead of generic grouping, we established <strong>20 Unique Base Frequencies</strong>. Every single icon on the board was assigned a hard-coded bespoke pitch (Hz). For example, a heavy "Delete" action is deeply pitched at 220Hz, whereas a cheerful "Create" action spikes at 680Hz.
                        </p>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            We then built 4 "Mood Operators". These act as mathematical modifiers against the 20 base frequencies to yield <strong>80 completely unique tones</strong>:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-slate-700 space-y-3 marker:text-slate-300">
                            <li><strong>Neutral (Sine Wave):</strong> 0 pitch modifier, 150ms drop. A clean digital blip.</li>
                            <li><strong>Playful (Triangle Wave):</strong> 1.5x exponential pitch slide upward, bouncy envelope.</li>
                            <li><strong>Secure (Square Wave):</strong> 0.4x pitch cut, 100Hz secondary pop transient, instantaneous fast decay envelope. Sounds like a solid metallic thud.</li>
                            <li><strong>Urgent (Sawtooth Wave):</strong> 1.25x pitch multiplier, double-trigger delay effect resulting in an aggressive alarm.</li>
                        </ul>

                        <h2 id="style-guide" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">v2.0.0: The Design Token Architecture</h2>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            Once the audio pipeline was flawless, we needed the UI to reflect the same level of granular semantic control. The app had to look premium, clean, and highly structured ("Clean SaaS" aesthetic).
                        </p>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            We established a strict <strong>Figma Token Hierarchy</strong>. The foundation rests entirely on the neutral `slate` scale. We reserved vibrant colors *only* for the semantic categories, mapping visual cues directly to the audio pitch ranges:
                        </p>
                        <div className="overflow-hidden mb-8 rounded-xl border border-slate-200 bg-white">
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

                        <h2 id="typography" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">Cross-Modal Perception Strategy</h2>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            The "Interaction Lifecycle" we built is a tightly knit loop:
                            <br /><strong>Hover:</strong> The user sees an `ease-in-out` scale pop (`scale-[1.05]`) signalling weight.
                            <br /><strong>Click:</strong> The UI instantly dips (`scale-95`). Simultaneously, the hidden <code>AudioContext</code> fires the mathematical algorithm, and the central visualizer physically throbs with the category's token color.
                        </p>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            To push this perception testing further, we built a Native Dark Mode toggle and connected 5 distinct Google Fonts via a Shadcn UI dropdown.
                            Typography significantly dictates the perceived "weight" of audio signals. By hot-swapping between the highly engineered <strong>Space Grotesk</strong> or the bouncy, rounded <strong>Poppins</strong>, a UX researcher can immediately hear how the *exact same* 300Hz square wave "feels" completely different depending on the visual framing around it.
                        </p>

                    </article>
                </main>

                {/* Right Sidebar */}
                <aside className="fixed top-14 right-0 hidden h-[calc(100vh-3.5rem)] w-64 overflow-y-auto py-10 pl-8 pr-4 xl:block">
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-900">On this page</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#motivation" className="hover:text-slate-900 transition-colors">Why I Created This</a></li>
                            <li><a href="#style-guide" className="hover:text-slate-900 transition-colors">UI Style Guide & Tokens</a></li>
                            <li><a href="#typography" className="hover:text-slate-900 transition-colors">Typography</a></li>
                            <li><a href="#technical" className="hover:text-slate-900 transition-colors">Technical Details</a></li>
                        </ul>
                    </div>
                </aside>

            </div>
        </div>
    );
}
