// Simple beep generator to avoid external asset dependencies
export const playAlertSound = (repeat: number = 1) => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const playSingleBeep = (startTime: number) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(880, startTime); // A5
      gainNode.gain.setValueAtTime(0.1, startTime);

      oscillator.start(startTime);
      
      // Play a "warning" pattern
      oscillator.frequency.setValueAtTime(600, startTime + 0.1);
      oscillator.frequency.setValueAtTime(880, startTime + 0.2);
      oscillator.frequency.setValueAtTime(600, startTime + 0.3);
      
      oscillator.stop(startTime + 0.5);
    };

    let startOffset = ctx.currentTime;
    for (let i = 0; i < repeat; i++) {
        playSingleBeep(startOffset);
        startOffset += 0.6; // 0.5s beep + 0.1s pause
    }
    
    // Close context after all beeps are done
    setTimeout(() => {
        if (ctx.state !== 'closed') {
            ctx.close();
        }
    }, startOffset * 1000 + 1000);

  } catch (e) {
    console.error("Audio playback failed", e);
  }
};