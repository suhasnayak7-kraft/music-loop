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
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:pl-[17rem] xl:pr-[17rem] pt-12 pb-16 min-h-screen">
                    <article className="prose prose-slate max-w-[45rem] w-full">
                        <header className="mb-12 text-center lg:text-left">
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
                            <div className="aspect-video w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center mb-6 text-slate-400 font-medium text-center px-6">
                                [v0.1.0 Conceptual Mockup: Dark Sequencer Grid & Sample Library Library Interface]
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
                                <div className="p-4 rounded-xl bg-orange-50 border border-orange-100 dark:bg-orange-900/10 dark:border-orange-900/20 shadow-sm">
                                    <h4 className="font-bold text-orange-900 dark:text-orange-400 mb-2">Pre-Refactor (Monolith)</h4>
                                    <ul className="text-xs text-orange-800 dark:text-orange-300 space-y-1 opacity-80 list-none p-0">
                                        <li>• 500+ line App.jsx</li>
                                        <li>• Logic mixed with UI</li>
                                        <li>• Heavy prop drilling</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/20 shadow-sm">
                                    <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-2">Post-Refactor (Modular)</h4>
                                    <ul className="text-xs text-blue-800 dark:text-blue-300 space-y-1 opacity-80 list-none p-0">
                                        <li>• Component Architecture</li>
                                        <li>• Dedicated useAudio hook</li>
                                        <li>• Constants-driven frequency maps</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                <strong>Logic Separation:</strong> We moved all frequency definitions to <code>constants.js</code> and handled the <code>AudioContext</code> creation through an intentional interaction gate to comply with browser safety policies.
                            </p>
                        </section>

                        <section id="design-system" className="scroll-mt-24 mt-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">5. Design System: Tokens & Showcase</h2>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                The foundation rests on a strict <strong>Figma Token Hierarchy</strong>. Below is a showcase of the semantic primitives that bridge the gap between sight and sound.
                            </p>

                            <div className="space-y-16">
                                {/* Color Swatches */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Color Primitives</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                                        {[
                                            { label: 'Slate', hex: '#64748B', category: 'Neutral' },
                                            { label: 'Blue', hex: '#3B82F6', category: 'Navigation' },
                                            { label: 'Rose', hex: '#F43F5E', category: 'Data' },
                                            { label: 'Violet', hex: '#8B5CF6', category: 'System' },
                                            { label: 'Emerald', hex: '#10B981', category: 'Utilities' }
                                        ].map((color) => (
                                            <div key={color.label} className="group cursor-default">
                                                <div className="h-16 w-full rounded-xl mb-3 shadow-md border border-slate-100 transition-transform group-hover:scale-105" style={{ backgroundColor: color.hex }}></div>
                                                <p className="text-[12px] font-bold text-slate-900 mb-0.5">{color.label}</p>
                                                <p className="text-[10px] text-slate-400 font-mono uppercase tracking-tight">{color.hex}</p>
                                                <p className="text-[10px] text-slate-500 italic mt-1">{color.category}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Component Showcase */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Component Lifecycle (Interaction Physics)</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                        <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 flex flex-col items-center text-center">
                                            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-4">
                                                <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                                            </div>
                                            <p className="text-xs font-bold text-slate-900 mb-1 leading-tight">Default State</p>
                                            <p className="text-[10px] text-slate-500 italic">Static. No auditory trigger.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-blue-100 bg-blue-50/10 flex flex-col items-center text-center">
                                            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center -translate-y-2 scale-105 shadow-xl shadow-blue-500/10 transition-all mb-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                                            </div>
                                            <p className="text-xs font-bold text-blue-600 mb-1 leading-tight">Hover Presence</p>
                                            <p className="text-[10px] text-blue-500/70 italic">Elevation + Scale 1.05x.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-rose-100 bg-rose-50/10 flex flex-col items-center text-center">
                                            <div className="w-16 h-16 rounded-2xl bg-rose-100 border border-rose-300 flex items-center justify-center scale-95 transition-all mb-4">
                                                <div className="w-8 h-8 rounded-full bg-rose-500 shadow-[0_0_25px_rgba(244,63,94,0.5)]"></div>
                                            </div>
                                            <p className="text-xs font-bold text-rose-600 mb-1 leading-tight">Active Compression</p>
                                            <p className="text-[10px] text-rose-500/70 italic">Scale 0.95x. Frequency Fire.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Typography Samples */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Typography & Brand Perception</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col h-full">
                                            <p className="text-[10px] font-mono text-slate-400 mb-6 uppercase tracking-widest">Display / Space Grotesk</p>
                                            <p className="text-4xl font-bold tracking-tight text-slate-900 mb-4" style={{ fontFamily: 'Space Grotesk' }}>Tactile Audio</p>
                                            <p className="text-sm text-slate-500 mt-auto">Used for high-contrast, mechanical headings that map to technical synth tones.</p>
                                        </div>
                                        <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col h-full">
                                            <p className="text-[10px] font-mono text-slate-400 mb-6 uppercase tracking-widest">Body / Urbanist</p>
                                            <p className="text-lg leading-relaxed text-slate-700 font-medium mb-4" style={{ fontFamily: 'Urbanist' }}>Procedural sound synthesis requires a rigid design framework. Every visual token must have a mathematical counterpart.</p>
                                            <p className="text-sm text-slate-500 mt-auto">Optimized for clean readability and modern SaaS aesthetics.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-24 mt-24 pt-16 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h2>
                            <p className="text-slate-700 leading-relaxed mb-6 italic text-lg lg:text-xl font-medium tracking-tight">
                                By bridging the gap between Design Tokens and Web Audio synthesis, we've created a laboratory that treats sound as a first-class citizen of UI design.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-12">
                                The Interaction Sound Lab proves that we can create zero-latency, tactile experiences without the weight of traditional assets. The future of SaaS isn't just visual; it's multimodal.
                            </p>
                            <div className="flex justify-center pb-12">
                                <a href="/" className="h-14 inline-flex items-center justify-center px-12 rounded-full bg-slate-950 text-white font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10">
                                    Return to Lab
                                </a>
                            </div>
                        </section>

                    </article>
                </main>

                {/* Right Sidebar */}
                <aside className="fixed top-14 right-0 hidden h-[calc(100vh-3.5rem)] w-64 overflow-y-auto py-10 pl-8 pr-4 xl:block">
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest opacity-40">On this page</h4>
                        <ul className="space-y-4 text-[13px] font-medium text-slate-500">
                            <li><a href="#problem" className="hover:text-slate-900 transition-colors block">1. Problem Statement</a></li>
                            <li><a href="#initial-design" className="hover:text-slate-900 transition-colors block">2. Initial Design</a></li>
                            <li><a href="#iterations" className="hover:text-slate-900 transition-colors block">3. Version Iterations</a></li>
                            <li><a href="#code" className="hover:text-slate-900 transition-colors block">4. Code Evolution</a></li>
                            <li><a href="#design-system" className="hover:text-slate-900 transition-colors block">5. Tokens & Showcase</a></li>
                            <li><a href="#conclusion" className="hover:text-slate-900 transition-colors block underline-offset-4 hover:underline">Conclusion</a></li>
                        </ul>
                    </div>
                </aside>

            </div>
        </div>
    );
}
