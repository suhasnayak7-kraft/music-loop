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
                            The Interaction Sound Lab is a procedural tool for exploring cross-modal feedback (auditory, visual, and physical). It relies on Native Web Audio implementations to solve the latency issues of MP3s, generating sound dynamically.
                        </p>

                        <h2 id="motivation" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">Why I Created This</h2>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            Web applications often neglect audio because dealing with `.mp3` files introduces latency, bloat, and management overhead. When dealing with fluid UI states, latency ruins the physical "feel" of a click. I built this to demonstrate that we can mathematically proceduralize UX sounds (like "Blips" for neutral actions, or "Thuds" for secure actions) directly on the client's processor using the native <code>AudioContext</code>.
                        </p>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            Cross-modal feedback—when visual, physical (input), and auditory signals align perfectly—creates a dramatic increase in perceived SaaS software quality.
                        </p>

                        <h2 id="style-guide" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">UI Style Guide & Tokens</h2>
                        <p className="mb-6 text-slate-700 leading-relaxed">
                            To ensure the auditory signals mapped correctly to visual signals, I built a strict semantic token system. Vibrant colors are reserved purely for state indication, utilizing "glassmorphism" (blur filters) and `slate` for neutrality.
                        </p>
                        <div className="overflow-hidden mb-8 rounded-xl border border-slate-200 bg-white">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-900/80 uppercase tracking-wider text-[11px] font-bold">
                                    <tr>
                                        <th className="p-4 border-b border-slate-200">Category</th>
                                        <th className="p-4 border-b border-slate-200">Semantic Color</th>
                                        <th className="p-4 border-b border-slate-200">Base Pitch</th>
                                        <th className="p-4 border-b border-slate-200">Usage</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-medium text-slate-800">Navigation</td>
                                        <td className="p-4 font-mono text-blue-600 bg-blue-50/50">slate-x / blue-x</td>
                                        <td className="p-4 text-slate-600">~400Hz (Mid)</td>
                                        <td className="p-4 text-slate-600">Standard routing actions</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-medium text-slate-800">Data Actions</td>
                                        <td className="p-4 font-mono text-rose-600 bg-rose-50/50">rose-x</td>
                                        <td className="p-4 text-slate-600">~300Hz (Deep)</td>
                                        <td className="p-4 text-slate-600">Destructive or heavy logic</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-medium text-slate-800">System</td>
                                        <td className="p-4 font-mono text-violet-600 bg-violet-50/50">violet-x</td>
                                        <td className="p-4 text-slate-600">~500Hz (Hi-Mid)</td>
                                        <td className="p-4 text-slate-600">User settings, profiles</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-medium text-slate-800">Utilities</td>
                                        <td className="p-4 font-mono text-emerald-600 bg-emerald-50/50">emerald-x</td>
                                        <td className="p-4 text-slate-600">~600Hz (High)</td>
                                        <td className="p-4 text-slate-600">Downloads, positive tasks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="typography" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">Typography</h2>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            I exposed 5 distinct typefaces to demonstrate how typography significantly dictates the perceived "weight" of the audio signals. Inter is neutral, whereas Space Grotesk feels highly mechanical, slightly altering how the brain interprets the procedural audio physics.
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-slate-700 space-y-3 marker:text-slate-300">
                            <li><strong className="text-slate-900 font-sans">Inter:</strong> Default system fallback, highly parsed and clean.</li>
                            <li><strong className="text-slate-900" style={{ fontFamily: "Poppins" }}>Poppins:</strong> Friendly and rounded, matching bouncy "Playful" tones perfectly.</li>
                            <li><strong className="text-slate-900" style={{ fontFamily: "Space Grotesk" }}>Space Grotesk:</strong> Engineered and strict, pairs with "Secure" square waves.</li>
                            <li><strong className="text-slate-900" style={{ fontFamily: "Roboto" }}>Roboto:</strong> Standard corporate reliability.</li>
                            <li><strong className="text-slate-900" style={{ fontFamily: "Urbanist" }}>Urbanist:</strong> Modern geometric structure.</li>
                        </ul>

                        <h2 id="technical" className="text-2xl font-bold mt-16 mb-4 scroll-mt-24 text-slate-900 tracking-tight">Technical Details</h2>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            The application is built on <strong>Vite, React 18, and Tailwind</strong>. It operates around an 80-permutation requirement, multiplying 20 unique base button Hz values by 4 mathematical mood envelopes (Sine, Triangle, Square, Sawtooth) inside a <code>useAudio.js</code> hook.
                        </p>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            All components are modularised using Shadcn UI standards. We strictly implement the <code>cn()</code> utility to parse classes. <code>App.jsx</code> is strictly reserved for high-level State processing and Context rendering, banning "Monolithic" massive file architectures.
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
