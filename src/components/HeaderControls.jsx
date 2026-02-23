import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun } from 'lucide-react';

export function HeaderControls({ theme, setTheme, font, setFont }) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300 w-full mb-8">

            {/* Typography Selector */}
            <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Typography</span>
                <Select value={font} onValueChange={setFont}>
                    <SelectTrigger className="w-[160px] bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-medium rounded-xl h-10 shadow-none focus:ring-slate-400">
                        <SelectValue placeholder="Select Font" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                        <SelectItem value="font-sans" className="cursor-pointer font-medium p-2">Inter (Default)</SelectItem>
                        <SelectItem value="font-poppins" className="cursor-pointer font-medium p-2" style={{ fontFamily: "Poppins" }}>Poppins</SelectItem>
                        <SelectItem value="font-inter" className="cursor-pointer font-medium p-2" style={{ fontFamily: "Inter" }}>Inter</SelectItem>
                        <SelectItem value="font-space-grotesk" className="cursor-pointer font-medium p-2" style={{ fontFamily: "Space Grotesk" }}>Space Grotesk</SelectItem>
                        <SelectItem value="font-roboto" className="cursor-pointer font-medium p-2" style={{ fontFamily: "Roboto" }}>Roboto</SelectItem>
                        <SelectItem value="font-urbanist" className="cursor-pointer font-medium p-2" style={{ fontFamily: "Urbanist" }}>Urbanist</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Right Controls: Dark Mode & Case Study */}
            <div className="flex items-center gap-6">
                <a
                    href="/case-study"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                    Case Study
                </a>

                <div className="flex items-center gap-3">
                    <Sun size={18} className={`transition-colors ${theme === 'light' ? 'text-amber-500' : 'text-slate-500'}`} />
                    <Switch
                        checked={theme === 'dark'}
                        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                        className="data-[state=checked]:bg-pink-500"
                    />
                    <Moon size={18} className={`transition-colors ${theme === 'dark' ? 'text-blue-400' : 'text-slate-400'}`} />
                </div>

            </div>
        </div>
    );
}
