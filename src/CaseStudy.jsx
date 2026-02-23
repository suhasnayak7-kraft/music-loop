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
                    <nav className="flex flex-col space-y-6">
                        <div>
                            <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold text-slate-900">Application</h4>
                            <div className="grid grid-flow-row auto-rows-max text-sm gap-0.5 mt-1">
                                <a href="/" className="group flex w-full items-center rounded-md border border-transparent px-2 py-2 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">Sound Engine UI</a>
                                <a href="/case-study" className="group flex w-full items-center rounded-md border border-transparent px-2 py-2 bg-blue-50/60 font-medium text-blue-700 transition-colors">Case Study</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold text-slate-900">Project Docs</h4>
                            <div className="grid grid-flow-row auto-rows-max text-sm gap-0.5 mt-1">
                                <a href="https://github.com/suhasnayak7-kraft/music-loop" target="_blank" rel="noreferrer" className="group flex w-full items-center rounded-md border border-transparent px-2 py-2 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">Source Code</a>
                            </div>
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:pl-[17rem] xl:pr-[17rem] pt-12 pb-16 min-h-screen">
                    <article className="prose prose-slate max-w-[45rem] w-full">
                        <header className="mb-12">
                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Evolution of the Interaction Sound Lab</h1>
                            <p className="text-lg text-slate-500">A journey from a complex beat-maker to a precision UX sound engineering tool.</p>
                            <p className="text-xs font-mono text-slate-400 mt-4 uppercase tracking-widest">v2.0.0 • Published Feb 2026</p>
                        </header>

                        <section id="problem" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">1. The Problem Statement</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Standard web interfaces are often "silent" or rely on heavy, high-latency <code>.mp3</code> files for feedback. This creates a disconnect between the visual action (the click) and the auditory response. Furthermore, most "music" apps are too complex for designers to quickly test <strong>perceptual weight</strong>—how a specific sound influences the feeling of a UI component.
                            </p>
                            <div className="bg-slate-50 border-l-4 border-slate-200 p-4 italic text-slate-600 mb-8">
                                "How can we create a zero-latency, procedural feedback system where every visual token has a corresponding mathematical sound?"
                            </div>
                        </section>

                        <section id="initial-design" className="scroll-mt-24 mt-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">2. Initial Design (v0.1.0)</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The project began conceptually as <strong>"Sound to Loop Beat Maker"</strong>. The initial ideation included audio file exports, database configurations with Supabase, a backend UI for sample libraries, and 16-step sequencing algorithms.
                            </p>
                            <div className="aspect-video w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center mb-6 text-slate-400 font-medium">
                                [v0.1.0 Conceptual Mockup: Dark Sequencer Grid & Sample Library]
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                <strong>Why we pivoted:</strong> Looking at the core design requirements, we realized the scope was bloated. The actual problem we wanted to solve wasn't "how do we make music?", it was "how do we make user interfaces feel more tactile?" We aggressively scoped down and pivoted into the <strong>Interaction Sound Lab</strong>.
                            </p>
                        </section>

                        <section id="iterations" className="scroll-mt-24 mt-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">3. Version Iterations</h2>

                            <div className="space-y-12">
                                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-3 bg-blue-500/10 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">v1.0.0</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">The Synthesizer Pipeline</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        We replaced all static files with the <strong>Native Web Audio API</strong>. We assigned 20 unique base frequencies to Lucide icons and introduced the "Mood Operators" (Neutral, Playful, Secure, Urgent).
                                        <br /><br />
                                        <strong>The result:</strong> 80 completely unique tones generated in real-time on the client's processor.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-3 bg-pink-500/10 text-pink-600 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl group-hover:bg-pink-500 group-hover:text-white transition-colors">v2.0.0</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">The Polished Engine</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        The UI was refined to match the professional nature of the tool. We introduced <strong>Semantic Categories</strong> (Navigation, Data, System, Utilities) and linked them to specific pitch ranges. We also added Dark Mode parity and Typography personalization.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="code" className="scroll-mt-24 mt-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">4. Code Evolution: What Changed?</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Initially, the code resided in a massive, monolithic <code>App.jsx</code> file. To ensure professional maintainability, we performed a radical refactor.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <h4 className="font-bold text-orange-900 mb-2">Pre-Refactor (Monolith)</h4>
                                    <p className="text-xs text-orange-800 leading-relaxed italic opacity-80">
                                        "Hard to debug Web Audio lifecycle when UI state is in the same 500-line file."
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Post-Refactor (Modular)</h4>
                                    <p className="text-xs text-blue-800 leading-relaxed italic opacity-80">
                                        "Extracted IconGrid, ActiveVisualizer, and MoodSelector into separate logical modules."
                                    </p>
                                </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                <strong>Logic Separation:</strong> We moved all frequency definitions to <code>constants.js</code> and handled the <code>AudioContext</code> creation through an intentional interaction gate to comply with browser safety policies.
                            </p>
                        </section>

                        <section id="design-system" className="scroll-mt-24 mt-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">5. Design System: Tokens & Variables</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The foundation rests on a strict <strong>Figma Token Hierarchy</strong>. We reserved vibrant colors *only* for semantic categories, mapping visual cues directly to the audio pitch ranges:
                            </p>
                            <div className="overflow-hidden mb-8 rounded-xl border border-slate-200">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-50 text-slate-900 text-[11px] font-bold uppercase tracking-wider">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200">Token</th>
                                            <th className="p-4 border-b border-slate-200">Value</th>
                                            <th className="p-4 border-b border-slate-200">Mapping</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-4 font-mono text-blue-600">blue-500</td>
                                            <td className="p-4">#3B82F6</td>
                                            <td className="p-4 text-slate-600">Navigation (~400Hz)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-mono text-rose-600">rose-500</td>
                                            <td className="p-4">#F43F5E</td>
                                            <td className="p-4 text-slate-600">Data Actions (~300Hz)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-mono text-slate-900">scale-95</td>
                                            <td className="p-4">0.95x</td>
                                            <td className="p-4 text-slate-600">Active physical depression</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-24 mt-16 pt-12 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h2>
                            <p className="text-slate-700 leading-relaxed mb-6 italic text-lg">
                                By bridgeing the gap between Design Tokens and Web Audio synthesis, we've created a laboratory that treats sound as a first-class citizen of UI design.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                The Interaction Sound Lab proves that we can create zero-latency, tactile experiences without the weight of traditional assets. The future of SaaS isn't just visual; it's multimodal.
                            </p>
                            <div className="mt-12 flex justify-center">
                                <a href="/" className="h-12 inline-flex items-center justify-center px-10 rounded-full bg-slate-950 text-white font-semibold hover:bg-slate-800 transition-all active:scale-95">
                                    Return to Lab
                                </a>
                            </div>
                        </section>

                    </article>
                </main>

                {/* Right Sidebar */}
                <aside className="fixed top-14 right-0 hidden h-[calc(100vh-3.5rem)] w-64 overflow-y-auto py-10 pl-8 pr-4 xl:block">
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-widest text-[11px]">Contents</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#problem" className="hover:text-slate-900 transition-colors">1. Problem Statement</a></li>
                            <li><a href="#initial-design" className="hover:text-slate-900 transition-colors">2. Initial Design</a></li>
                            <li><a href="#iterations" className="hover:text-slate-900 transition-colors">3. Version Iterations</a></li>
                            <li><a href="#code" className="hover:text-slate-900 transition-colors">4. Code Evolution</a></li>
                            <li><a href="#design-system" className="hover:text-slate-900 transition-colors">5. Design System</a></li>
                            <li><a href="#conclusion" className="hover:text-slate-900 transition-colors">Conclusion</a></li>
                        </ul>
                    </div>
                </aside>

            </div>
        </div>
    );
}
