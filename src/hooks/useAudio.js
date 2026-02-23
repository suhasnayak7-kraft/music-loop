import { useRef, useCallback } from 'react';
import { ACTION_FREQUENCIES } from '../constants';

export function useAudio() {
    const ctxRef = useRef(null);

    const init = useCallback(() => {
        if (!ctxRef.current) {
            ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
    }, []);

    const playTone = useCallback((mood, actionId) => {
        if (!ctxRef.current) return;

        // Resume context if suspended (browser autoplay policy)
        if (ctxRef.current.state === 'suspended') {
            ctxRef.current.resume();
        }

        const osc = ctxRef.current.createOscillator();
        const gainNode = ctxRef.current.createGain();

        osc.connect(gainNode);
        gainNode.connect(ctxRef.current.destination);

        const now = ctxRef.current.currentTime;
        // Every single icon maps to a unique frequency lookup
        const baseFreq = ACTION_FREQUENCIES[actionId] || 400;

        // Apply mood characteristics
        // The 4 Moods * 20 Action Freqs = 80 Unique Permutations
        switch (mood) {
            case 'neutral':
                // Neutral: Pure Sine Wave, precise UI "blip"
                osc.type = 'sine';
                osc.frequency.setValueAtTime(baseFreq, now);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.5, now + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
                osc.start(now);
                osc.stop(now + 0.15);
                break;

            case 'playful':
                // Playful: Triangle Wave, bouncy pitch slide up
                osc.type = 'triangle';
                // Start slightly lower, bend up drastically
                osc.frequency.setValueAtTime(baseFreq * 0.8, now);
                osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.2);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.4, now + 0.05);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
                break;

            case 'secure':
                // Secure: Deep Square Wave, weighted metallic "thud"
                osc.type = 'square';
                // Halve the pitch, extremely fast decay
                osc.frequency.setValueAtTime(baseFreq * 0.4, now);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08); // much faster
                osc.start(now);
                osc.stop(now + 0.08);

                // Add a secondary immediate low-pitch transient click
                const clickOsc = ctxRef.current.createOscillator();
                const clickGain = ctxRef.current.createGain();
                clickOsc.type = 'triangle';
                clickOsc.frequency.setValueAtTime(100, now); // 100Hz pop
                clickOsc.connect(clickGain);
                clickGain.connect(ctxRef.current.destination);
                clickGain.gain.setValueAtTime(0.3, now);
                clickGain.gain.exponentialRampToValueAtTime(0.01, now + 0.02);
                clickOsc.start(now);
                clickOsc.stop(now + 0.02);
                break;

            case 'urgent':
                // Urgent: Sawtooth wave, shrill, rapid double-beep
                osc.type = 'sawtooth';
                // Pitch up for urgency
                osc.frequency.setValueAtTime(baseFreq * 1.25, now);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                osc.start(now);
                osc.stop(now + 0.1);

                // Re-trigger the same pitch instantly after a gap for a double-siren effect
                const osc2 = ctxRef.current.createOscillator();
                const gain2 = ctxRef.current.createGain();
                osc2.type = 'sawtooth';
                osc2.connect(gain2);
                gain2.connect(ctxRef.current.destination);

                // Slightly detuned second beep
                osc2.frequency.setValueAtTime(baseFreq * 1.28, now + 0.15);
                gain2.gain.setValueAtTime(0, now + 0.15);
                gain2.gain.linearRampToValueAtTime(0.3, now + 0.16);
                gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
                osc2.start(now + 0.15);
                osc2.stop(now + 0.25);
                break;
        }
    }, []);

    return { init, playTone };
}
