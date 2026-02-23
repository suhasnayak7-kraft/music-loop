import React from 'react';
import { ICON_GRIDS, ACTION_FREQUENCIES } from '../constants';

export function IconGrid({ activeIcon, handleIconClick }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-sm">
            {ICON_GRIDS.map((grid, groupIdx) => (
                <div key={groupIdx} className="flex flex-col items-center">
                    <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 border-b-2 border-slate-100 dark:border-slate-800 pb-3 w-full text-center">
                        {grid.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 w-full place-items-center">
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
                      border bg-white dark:bg-slate-950
                      ${!isActive ? `hover:shadow-lg ${colors.border} ${colors.bgHover} dark:hover:bg-slate-800 hover:-translate-y-2 border-slate-200 dark:border-slate-800` : ''}
                      active:scale-90 ${colors.bgActive}
                      ${isActive ? `ring-2 ${colors.ring} ring-offset-4 dark:ring-offset-slate-950 border-transparent shadow-md` : ''}
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
    );
}
