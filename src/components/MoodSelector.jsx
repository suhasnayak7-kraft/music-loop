import React from 'react';
import { MOODS } from '../constants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MoodSelector({ activeMood, setActiveMood }) {
    return (
        <div className="flex justify-center w-full max-w-xs mx-auto sm:max-w-none">
            {/* Mobile Dropdown via Shadcn */}
            <div className="sm:hidden w-full relative">
                <Select value={activeMood} onValueChange={(val) => setActiveMood(val)}>
                    <SelectTrigger className="w-full bg-white border-slate-200 text-slate-900 font-semibold rounded-2xl h-14 px-4 shadow-sm">
                        <SelectValue placeholder="Select a mood" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        {MOODS.map(mood => (
                            <SelectItem key={mood.id} value={mood.id} className="cursor-pointer font-medium p-3">
                                {mood.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden sm:inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex-wrap justify-center gap-1">
                {MOODS.map(mood => (
                    <button
                        key={mood.id}
                        onClick={() => setActiveMood(mood.id)}
                        className={`
              px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ease-out flex-1 sm:flex-none
              ${activeMood === mood.id
                                ? 'bg-slate-900 text-white shadow-md scale-100'
                                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}
            `}
                    >
                        {mood.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
