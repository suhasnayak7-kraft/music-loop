import React, { useState, useEffect } from 'react';
import { MOODS } from './constants';
import { useAudio } from './hooks/useAudio';
import { HeaderControls } from './components/HeaderControls';
import { MoodSelector } from './components/MoodSelector';
import { ActiveVisualizer } from './components/ActiveVisualizer';
import { IconGrid } from './components/IconGrid';

export default function App() {
    const [activeMood, setActiveMood] = useState(MOODS[0].id);
    const [activeIcon, setActiveIcon] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // UI State
    const [theme, setTheme] = useState('light');
    const [font, setFont] = useState('font-sans'); // The tailwind typography class

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

    // Handle Document Dark Mode Toggle
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleIconClick = (iconData, colorClasses) => {
        init(); // Ensure initialized
        setActiveIcon({ ...iconData, colorClasses });
        setIsPlaying(true);

        // Play the generated sound distinct out of the unique frequency dictionary
        playTone(activeMood, iconData.id);

        // Reset visual playing state
        setTimeout(() => setIsPlaying(false), 300);
    };

    return (
        <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 p-8 pt-4 transition-colors duration-300 selection:bg-pink-200 ${font}`}>
            <div className="max-w-4xl mx-auto space-y-6">

                {/* Top Controls: Dark Mode & Typography Selectors */}
                <HeaderControls theme={theme} setTheme={setTheme} font={font} setFont={setFont} />

                {/* Header Section */}
                <header className="text-center space-y-4 pt-6 pb-6">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm transition-colors duration-300">
                        Interaction Sound Lab
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-lg transition-colors duration-300">
                        Test how different UI sounds feel across various contexts. Select a mood, then click an icon to generate a programmatic audio response.
                    </p>
                </header>

                <MoodSelector
                    activeMood={activeMood}
                    setActiveMood={setActiveMood}
                />

                <ActiveVisualizer
                    isPlaying={isPlaying}
                    activeIcon={activeIcon}
                />

                <IconGrid
                    activeIcon={activeIcon}
                    handleIconClick={handleIconClick}
                />

            </div>
        </div>
    );
}
