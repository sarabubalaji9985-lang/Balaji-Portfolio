/**
 * Subtle Ambient Particle Sound Synthesizer using Web Audio API
 * Generates an ultra-soft, ethereal crystal chime/shimmer when interacting with particles.
 * Throttled, low-volume (0.015 - 0.03), and respects the global sound/voice toggle.
 */

import { aiVoice } from './voiceAssistant';

class AmbientParticleSound {
  constructor() {
    this.audioCtx = null;
    this.lastPlayTime = 0;
    this.minInterval = 140; // minimum ms between sounds so it's never overwhelming
    // Soft pentatonic frequencies (Ethereal crystal scale: D5, E5, G5, A5, B5, D6)
    this.frequencies = [587.33, 659.25, 783.99, 880.0, 987.77, 1174.66];
    this.noteIndex = 0;
  }

  initContext() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  /**
   * Play an ultra-light, soft crystalline shimmer chime on mouse movement over particles
   * @param {number} speed - velocity/speed of interaction
   */
  triggerParticleShimmer(speed = 1) {
    if (!aiVoice.enabled) return;

    const now = Date.now();
    if (now - this.lastPlayTime < this.minInterval) return;
    this.lastPlayTime = now;

    try {
      this.initContext();
      if (!this.audioCtx) return;

      const t = this.audioCtx.currentTime;

      // Select next harmonious frequency from the pentatonic scale
      const freq = this.frequencies[this.noteIndex % this.frequencies.length];
      this.noteIndex++;

      // Dual oscillator for rich, warm crystal timbre (sine + soft triangle)
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      // Subtle micro-pitch glide (delicate twinkle)
      osc.frequency.exponentialRampToValueAtTime(freq * 1.02, t + 0.12);

      // Low-pass filter to ensure sound is warm, soft, and never harsh
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2400, t);

      // Ultra-light volume (0.018 peak, decaying quickly to 0.0001)
      const peakVolume = Math.min(0.022, 0.012 * Math.max(1, speed));
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(peakVolume, t + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.38);
    } catch (e) {
      // Audio context might be restricted before first interaction; ignore safely
    }
  }
}

export const particleAudio = new AmbientParticleSound();

