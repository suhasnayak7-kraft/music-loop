import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { MOODS, ICON_GRIDS, ACTION_FREQUENCIES } from './constants';
import { useAudio } from './hooks/useAudio';

export default function App() {
    const [activeMood, setActiveMood] = useState(MOODS[0].id);
    const [activeIcon, setActiveIcon] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { init, playTone } = useAudio();

    // Initialize audio engine on first interaction to bypass autoplay restrictions
    useEffect(() => {
        const handleFirstInteraction = () => {
            init();
            window.removeEventListener('click', handleFirstInteraction);
        };
        window.addEventListener('click', handleFirstInteraction);
        return () => window.removeEventListener('click', handleFirstInteraction);
    }, [init]);

    const handleIconClick = (iconData, colorClasses) => {
        init(); // Ensure initialized
        setActiveIcon({ ...iconData, colorClasses });
        setIsPlaying(true);

        // Play the generated sound distinct out of the unique frequency dictionary
        playTone(activeMood, iconData.id);

        // Reset visual playing state
        setTimeout(() => setIsPlaying(false), 300);
    };

    const ActiveIconComponent = activeIcon?.Icon || Volume2;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 p-8 font-sans selection:bg-pink-200">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header Section */}
                <header className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
                        Interaction Sound Lab
                    </h1>
                    <p className="text-slate-500 max-w-lg mx-auto text-lg">
                        Test how different UI sounds feel across various contexts. Select a mood, then click an icon to generate a programmatic audio response.
                    </p>
                </header>

                {/* Mood Tabs */}
                {/* Mood Selector: Responsive */}
                <div className="flex justify-center w-full max-w-xs mx-auto sm:max-w-none">
                    {/* Mobile Dropdown */}
                    <div className="sm:hidden w-full relative">
                        <select
                            value={activeMood}
                            onChange={(e) => setActiveMood(e.target.value)}
                            className="w-full appearance-none bg-white border border-slate-200 text-slate-900 text-sm font-semibold rounded-2xl p-4 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                        >
                            {MOODS.map(mood => (
                                <option key={mood.id} value={mood.id}>
                                    {mood.label}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
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

                {/* Active Sound Visualizer */}
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

                {/* 20-Icon Grid Area (4 Groups of 5 Icons) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white/50 p-8 rounded-3xl border border-slate-100 shadow-sm backdrop-blur-sm">
                    {ICON_GRIDS.map((grid, groupIdx) => (
                        <div key={groupIdx} className="flex flex-col items-center">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b-2 border-slate-100 pb-3 w-full text-center">
                                {grid.title}
                            </h3>

                            <div className="grid grid-cols-2 gap-4 w-full place-items-center">
                                {/* 5th icon spans 2 columns at the bottom for an interesting layout */}
                                {grid.icons.map((item, idx) => {
                                    const Icon = item.Icon;
                                    const isLastOdd = idx === 4;
                                    const isActive = activeIcon?.id === item.id;
                                    const colors = grid.colorClasses;

                                    return (
                                        <div
                                            key={item.id}
                                            className={`flex flex-col items-center gap-3 w-full ${isLastOdd ? 'col-span-2' : 'col-span-1'}`}
                                        >
                                            <button
                                                onClick={() => handleIconClick(item, colors)}
                                                title={`Frequency: ${ACTION_FREQUENCIES[item.id] || 400}Hz`}
                                                className={`
                          group relative w-16 h-16 rounded-2xl flex items-center justify-center
                          transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                          border bg-white
                          ${!isActive ? `hover:shadow-lg ${colors.border} ${colors.bgHover} hover:-translate-y-2 border-slate-200` : ''}
                          active:scale-90 ${colors.bgActive}
                          ${isActive ? `ring-2 ${colors.ring} ring-offset-4 border-transparent shadow-md` : ''}
                        `}
                                            >
                                                <Icon
                                                    size={28}
                                                    className={`
                            transition-colors duration-300
                            ${isActive ? colors.textActive : `text-slate-600 ${colors.textHover}`}
                          `}
                                                />
                                            </button>
                                            <span className={`text-xs font-semibold transition-colors ${isActive ? colors.textActive : `text-slate-500 ${colors.textHover}`}`}>
                                                {item.label}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
