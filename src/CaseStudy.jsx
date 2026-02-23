import React from 'react';
import { ArrowLeft, Maximize2, Layers, Type, Move, Palette } from 'lucide-react';

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
                                <a href="/" className="group flex w-full items-center rounded-md border border-transparent px-2 py-2 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors transition-all">Sound Engine UI</a>
                                <a href="/case-study" className="group flex w-full items-center rounded-md border border-transparent px-2 py-2 bg-blue-50/60 font-medium text-blue-700">Case Study</a>
                            </div>
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:pl-[17rem] xl:pr-[17rem] pt-12 pb-16 min-h-screen">
                    <article className="prose prose-slate max-w-[45rem] w-full mx-auto lg:mx-0">
                        <header className="mb-16">
                            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">The Interaction Sound Lab</h1>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                A clinical exploration of cross-modal UX feedback: bridging the gap between design tokens and procedural audio synthesis.
                            </p>
                            <div className="flex items-center gap-4 mt-8">
                                <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest">v2.0.0</span>
                                <span className="text-xs text-slate-400 font-mono italic">Architecture Case Study • Feb 2026</span>
                            </div>

                            <div className="mt-12 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50 grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                                <img src="/images/v2-mockup.png" alt="Interaction Sound Lab v2.0.0" className="w-full h-auto" />
                            </div>
                        </header>

                        <section id="problem" className="scroll-mt-24">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Maximize2 className="text-blue-500" size={24} />
                                1. The Problem Statement
                            </h2>
                            <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                Standard web interfaces suffer from a "Feedback Gap." Visual actions (clicks, hovers) are immediate, but high-latency <code>.mp3</code> files or total silence create a disjointed experience. We needed a system where sound is as immediate and predictable as a color change.
                            </p>
                            <div className="bg-slate-50 border-l-4 border-blue-500 p-8 rounded-r-2xl italic text-slate-700 text-xl leading-relaxed mb-8 font-medium">
                                "If a button is blue, what does that feel like in Herc (Hz)? How do we translate visual weight into auditory pressure?"
                            </div>
                        </section>

                        <section id="initial-design" className="scroll-mt-24 mt-20">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="text-pink-500" size={24} />
                                2. Initial Design (v0.1.0)
                            </h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                The project began as <strong>"Sound to Loop Beat Maker"</strong>. It was a complex beast: a 16-step sequencer, Supabase-powered sample storage, and high-fidelity mixer knobs. It was built for music production, not UX engineering.
                            </p>

                            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl mb-8 group overflow-hidden">
                                <img
                                    src="/images/v0-mockup.png"
                                    alt="Initial v0.1.0 Beatmaker Design"
                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
                                    <p className="text-xs text-slate-400 font-mono italic uppercase tracking-widest">Fig 1: The v0.1.0 Monolith Design (Legacy)</p>
                                </div>
                            </div>

                            <p className="text-slate-700 leading-relaxed font-medium text-lg">
                                <strong>The Pivot:</strong> We realized the true innovation was in the <strong>zero-latency feedback loop</strong>. We scrapped the database and samples, opting for a 100% procedural approach—generating sound directly from mathematical oscillators.
                            </p>
                        </section>

                        <section id="iterations" className="scroll-mt-24 mt-20">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Version Iterations</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl">v1.0.0</div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">The Synthesis Engine</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Eliminated all audio files. Introduced the Native Web Audio API and mapped 20 icon-to-frequency constants.
                                    </p>
                                    <p className="mt-4 text-slate-400 text-sm font-mono italic">Permutations: 80 Dynamic Tones</p>
                                </div>

                                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 bg-pink-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl">v2.0.0</div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">The Semantic Lab</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Refined the UI into a clean research tool. Added Dark Mode, cross-modal typography switching, and semantic pitch grouping.
                                    </p>
                                    <p className="mt-4 text-slate-400 text-sm font-mono italic">Focus: Lab Orchestration</p>
                                </div>
                            </div>
                        </section>

                        <section id="design-system" className="scroll-mt-24 mt-24">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">5. Design System: Precision Tokens</h2>

                            <p className="text-slate-700 text-lg leading-relaxed mb-12">
                                Every element in the lab is bound to a strict arithmetic token system. This ensures that the visual "physicality" of the UI matches the auditory "pressure" of the synth.
                            </p>

                            {/* Spacing Section */}
                            <div className="mb-20">
                                <div className="flex items-center gap-3 mb-6">
                                    <Move className="text-violet-500" size={24} />
                                    <h3 className="text-xl font-bold text-slate-900">Spacing & Grid (4px Baseline)</h3>
                                </div>
                                <div className="overflow-hidden rounded-2xl border border-slate-200">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                            <tr>
                                                <th className="p-4">Token</th>
                                                <th className="p-4">Value</th>
                                                <th className="p-4">Physical Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                                            <tr><td className="p-4 font-mono text-violet-600">space-1</td><td className="p-4 font-mono">4px</td><td className="p-4 italic">Micro-gap (Button interior)</td></tr>
                                            <tr><td className="p-4 font-mono text-violet-600">space-4</td><td className="p-4 font-mono">16px</td><td className="p-4 italic">Standard Grid Gaps</td></tr>
                                            <tr><td className="p-4 font-mono text-violet-600">space-8</td><td className="p-4 font-mono">32px</td><td className="p-4 italic">Container Breathe Room</td></tr>
                                            <tr><td className="p-4 font-mono text-violet-600">space-16</td><td className="p-4 font-mono">64px</td><td className="p-4 italic">Visualizer Safe Zone</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Typography Section */}
                            <div className="mb-20">
                                <div className="flex items-center gap-3 mb-6">
                                    <Type className="text-blue-500" size={24} />
                                    <h3 className="text-xl font-bold text-slate-900">Typography Specimens</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-100 h-full">
                                        <p className="text-[10px] font-mono text-slate-400 mb-6 uppercase tracking-widest">Headings / Space Grotesk</p>
                                        <div className="space-y-4">
                                            <p className="text-4xl font-extrabold tracking-tighter" style={{ fontFamily: 'Space Grotesk' }}>Interaction 800</p>
                                            <p className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>Procedural Lab 700</p>
                                        </div>
                                        <p className="mt-8 text-xs text-slate-400 leading-relaxed italic border-t pt-4">Mechanical and strict. Pairs with "Secure" square waves.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-100 h-full">
                                        <p className="text-[10px] font-mono text-slate-400 mb-6 uppercase tracking-widest">Body / Urbanist</p>
                                        <div className="space-y-4">
                                            <p className="text-lg font-medium leading-relaxed" style={{ fontFamily: 'Urbanist' }}>
                                                Cross-modal design ensures that visual tokens have mathematical counterparts in the frequency domain.
                                            </p>
                                            <p className="text-sm font-semibold opacity-60" style={{ fontFamily: 'Urbanist' }}>System Semantic Information</p>
                                        </div>
                                        <p className="mt-8 text-xs text-slate-400 leading-relaxed italic border-t pt-4">Bouncy and rounded. Pairs with "Playful" sine waves.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Color System Showcase */}
                            <div className="mb-20">
                                <div className="flex items-center gap-3 mb-8">
                                    <Palette className="text-emerald-500" size={24} />
                                    <h3 className="text-xl font-bold text-slate-900">Color System & Audio Mapping</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {[
                                        { label: 'Navigation', hex: '#3B82F6', freq: '400Hz', cat: 'Blue', desc: 'Mid-tone routing' },
                                        { label: 'Data Action', hex: '#F43F5E', freq: '300Hz', cat: 'Rose', desc: 'Deep-pitch logic' },
                                        { label: 'System', hex: '#8B5CF6', freq: '500Hz', cat: 'Violet', desc: 'Hi-mid settings' },
                                        { label: 'Utilities', hex: '#10B981', freq: '600Hz', cat: 'Emerald', desc: 'Zesty success' }
                                    ].map((color) => (
                                        <div key={color.label} className="group p-1 rounded-2xl border border-slate-100 bg-slate-50 relative overflow-hidden transition-all hover:bg-white hover:shadow-xl">
                                            <div className="h-20 w-full rounded-xl mb-3 shadow-inner" style={{ backgroundColor: color.hex }}></div>
                                            <div className="p-3 pt-0">
                                                <p className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">{color.label}</p>
                                                <p className="text-[14px] font-mono font-bold text-slate-800 mt-1">{color.freq}</p>
                                                <p className="text-[10px] text-slate-400 mt-2 leading-tight italic">{color.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Interaction States */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Interaction Lifecycle</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                    <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-6">
                                            <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                                        </div>
                                        <p className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-tight">Default</p>
                                        <p className="text-[10px] text-slate-400 italic">Static. Silent Equilibrium.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl border border-blue-100 bg-blue-50/10 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center -translate-y-3 scale-110 shadow-2xl shadow-blue-500/20 transition-all duration-300 mb-6">
                                            <div className="w-8 h-8 rounded-full bg-blue-200"></div>
                                        </div>
                                        <p className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-tight">Hover</p>
                                        <p className="text-[10px] text-blue-400 italic">-3px Elevation. Scale 1.1x.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl border border-rose-100 bg-rose-50/10 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-rose-500 flex items-center justify-center scale-90 transition-all duration-100 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-white opacity-20 animate-ping"></div>
                                        </div>
                                        <p className="text-xs font-bold text-rose-600 mb-2 uppercase tracking-tight">Active</p>
                                        <p className="text-[10px] text-rose-400 italic">Compression. Audio Trigger.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-24 mt-24 pt-16 border-t border-slate-100">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 italic">Next Iterations?</h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-12">
                                The Interaction Sound Lab is more than a tool; it's a manifesto for **Spatial UI Fidelity**. By codifying sound into the design system, we move from "seeing a product" to "feeling an environment."
                            </p>
                            <div className="flex justify-center pb-12">
                                <a href="/" className="h-16 inline-flex items-center justify-center px-16 rounded-full bg-slate-950 text-white font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-950/20">
                                    Return to Sound Lab
                                </a>
                            </div>
                        </section>

                    </article>
                </main>

                {/* Right Sidebar */}
                <aside className="fixed top-14 right-0 hidden h-[calc(100vh-3.5rem)] w-64 overflow-y-auto py-10 pl-8 pr-4 xl:block">
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest opacity-40">Section Index</h4>
                        <ul className="space-y-4 text-[13px] font-semibold text-slate-500">
                            <li><a href="#problem" className="hover:text-blue-500 transition-colors block">1. Problem Statement</a></li>
                            <li><a href="#initial-design" className="hover:text-pink-500 transition-colors block">2. Initial Design (v0.1.0)</a></li>
                            <li><a href="#iterations" className="hover:text-slate-900 transition-colors block">3. Version Iterations</a></li>
                            <li><a href="#design-system" className="hover:text-emerald-500 transition-colors block">5. Precision Tokens</a></li>
                        </ul>
                    </div>
                </aside>

            </div>
        </div>
    );
}
