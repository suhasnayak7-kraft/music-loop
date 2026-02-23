import React from 'react';
import { Volume2 } from 'lucide-react';

export function ActiveVisualizer({ isPlaying, activeIcon }) {
    const ActiveIconComponent = activeIcon?.Icon || Volume2;

    return (
        <div className="flex justify-center my-16">
            <div className="relative">
                {isPlaying && activeIcon && (
                    <>
                        <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${activeIcon.colorClasses?.bg || 'bg-slate-400'}`}></div>
                        <div className={`absolute -inset-4 rounded-full animate-pulse opacity-50 ring-2 ${activeIcon.colorClasses?.ring || 'ring-slate-300'}`}></div>
                    </>
                )}
                <div className={`
          relative z-10 w-24 h-24 rounded-full flex items-center justify-center
          transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${isPlaying && activeIcon
                        ? `${activeIcon.colorClasses?.bg || 'bg-slate-500'} text-white shadow-xl scale-[1.15] ${activeIcon.colorClasses?.shadow || ''}`
                        : 'bg-white border-2 border-slate-200 text-slate-400 shadow-sm'}
        `}>
                    <ActiveIconComponent size={40} className={isPlaying ? "animate-bounce" : ""} />
                </div>
            </div>
        </div>
    );
}
