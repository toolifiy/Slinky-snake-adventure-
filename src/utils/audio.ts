// Sound effect synthesizer using Web Audio API

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let isSoundEnabled = true;
let soundVolume = parseFloat(localStorage.getItem('snake_sound_volume') || '0.8');

export function setSoundVolume(volume: number) {
  soundVolume = volume;
  localStorage.setItem('snake_sound_volume', volume.toString());
  if (audioCtx && masterGain) {
    masterGain.gain.setValueAtTime(volume, audioCtx.currentTime);
  }
}

export function getSoundVolume(): number {
  return soundVolume;
}

function getAudioContext(): AudioContext | null {
  if (!isSoundEnabled) return null;
  
  if (!audioCtx) {
    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      audioCtx = new AudioCtxClass();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(soundVolume, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);
    } catch (e) {
      console.warn("Web Audio API is not supported in this environment.", e);
    }
  }
  
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  return audioCtx;
}

export function setSoundEnabled(enabled: boolean) {
  isSoundEnabled = enabled;
  if (!enabled && audioCtx) {
    audioCtx.close().then(() => {
      audioCtx = null;
      masterGain = null;
    }).catch(() => {
      audioCtx = null;
      masterGain = null;
    });
  }
}

export function getSoundEnabled(): boolean {
  return isSoundEnabled;
}

export function initAudio() {
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume();
  }
}

// 1. Play Eat Sound (Short cheerful synth blip with consecutive combo pitch scaling)
export function playEatSound(type: string = 'APPLE', combo: number = 0) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.connect(gain);
  gain.connect(masterGain || ctx.destination);

  const now = ctx.currentTime;

  if (type === 'BOOSTER') {
    // Glorious magical potion bubble & cork sweep sound!
    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(1600, now + 0.35);
    
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);

    // Layer 2: Twinkly sparkles for magic potion
    const delayTimes = [0.05, 0.12, 0.2];
    const freqs = [659.25, 783.99, 1046.50]; // E5, G5, C6
    delayTimes.forEach((delay, idx) => {
      const oscT = ctx.createOscillator();
      const gainT = ctx.createGain();
      oscT.type = 'triangle';
      oscT.frequency.setValueAtTime(freqs[idx], now + delay);
      
      oscT.connect(gainT);
      gainT.connect(masterGain || ctx.destination);
      
      gainT.gain.setValueAtTime(0.08, now + delay);
      gainT.gain.exponentialRampToValueAtTime(0.005, now + delay + 0.15);
      
      oscT.start(now + delay);
      oscT.stop(now + delay + 0.15);
    });
  } else if (type === 'GOLDEN_STAR') {
    // Ascending cute twinkle
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.3);
    
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === 'CHILI') {
    // Fast buzzing speed sound
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.linearRampToValueAtTime(1200, now + 0.25);
    
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.start(now);
    osc.stop(now + 0.25);
  } else if (type === 'CAKE') {
    // Melodic celebration arpeggio
    const notes = [261.63, 329.63, 392.00, 523.25]; // C E G C
    notes.forEach((freq, idx) => {
      const singleOsc = ctx.createOscillator();
      const singleGain = ctx.createGain();
      singleOsc.connect(singleGain);
      singleGain.connect(masterGain || ctx.destination);
      
      singleOsc.type = 'sine';
      singleOsc.frequency.setValueAtTime(freq, now + idx * 0.08);
      singleGain.gain.setValueAtTime(0.1, now + idx * 0.08);
      singleGain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.2);
      
      singleOsc.start(now + idx * 0.08);
      singleOsc.stop(now + idx * 0.08 + 0.2);
    });
  } else {
    // Normal super juicy retro pop eat sound (dual-tone satisfying bubble pop with ascending scale!)
    osc.type = 'sine';
    // Ascend pitch exponentially based on consecutive combo to create highly satisfying arcade feedback!
    const pitchOffset = Math.min(650, combo * 55);
    const baseFreq = 350 + pitchOffset;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 2.8, now + 0.08);
    
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
    osc.start(now);
    osc.stop(now + 0.12);

    // Layer 2: high crisp harmonic crunch starting slightly delayed (25ms)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(masterGain || ctx.destination);
    
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(baseFreq * 2, now + 0.025);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 4.2, now + 0.095);
    
    gain2.gain.setValueAtTime(0.07, now + 0.025);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.11);
    
    osc2.start(now + 0.025);
    osc2.stop(now + 0.11);
  }
}

// 2. Play Crash Sound (Sinking low cartoon crash)
export function playCrashSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  
  // Sinking tone oscillator
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(350, now);
  osc.frequency.linearRampToValueAtTime(60, now + 0.5);
  osc.connect(gain);
  gain.connect(masterGain || ctx.destination);
  
  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
  
  osc.start(now);
  osc.stop(now + 0.5);

  // Add low rumble noise for "shake/thud"
  try {
    const bufferSize = ctx.sampleRate * 0.3; // 0.3 seconds
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(100, now);
    
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.15, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain || ctx.destination);
    
    noise.start(now);
    noise.stop(now + 0.3);
  } catch (err) {
    // Fallback if buffer creation fails
  }
}

// 3. Play Level Up Sound (Cheerful cartoon fanfare)
export function playLevelUpSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  // Upward arpeggio notes
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  const durations = [0.1, 0.1, 0.1, 0.3];
  let timeAccumulator = 0;

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + timeAccumulator);
    
    osc.connect(gain);
    gain.connect(masterGain || ctx.destination);
    
    gain.gain.setValueAtTime(0.12, now + timeAccumulator);
    gain.gain.exponentialRampToValueAtTime(0.01, now + timeAccumulator + durations[idx]);
    
    osc.start(now + timeAccumulator);
    osc.stop(now + timeAccumulator + durations[idx]);
    
    timeAccumulator += 0.08;
  });
}

// 4. Play Bubble/Click Sound (Playful tap)
export function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.connect(gain);
  gain.connect(masterGain || ctx.destination);

  const now = ctx.currentTime;
  osc.type = 'sine';
  osc.frequency.setValueAtTime(600, now);
  osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
  
  gain.gain.setValueAtTime(0.1, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
  
  osc.start(now);
  osc.stop(now + 0.05);
}

// 5. Play Achievement Unlocked sound
export function playAchievementSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
  
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.06);
    osc.connect(gain);
    gain.connect(masterGain || ctx.destination);
    
    gain.gain.setValueAtTime(0.1, now + idx * 0.06);
    gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.25);
    
    osc.start(now + idx * 0.06);
    osc.stop(now + idx * 0.06 + 0.25);
  });
}
