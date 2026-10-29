/**
 * Robotic AI Voice Assistant using the Web Speech Synthesis API
 * Features pitch tuning and robotic speech cadences
 */

class VoiceAssistant {
  constructor() {
    this.enabled = true;
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.selectedVoice = null;
    this.audioCtx = null;

    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('voice_assistant_enabled');
      if (saved !== null) {
        this.enabled = saved === 'true';
      }

      if (this.synth) {
        this.loadVoice();
        if (this.synth.onvoiceschanged !== undefined) {
          this.synth.onvoiceschanged = () => this.loadVoice();
        }
      }
    }
  }

  loadVoice() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return;
    // Prioritize natural or robotic-sounding English voices
    this.selectedVoice =
      voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('David') || v.name.includes('Samantha') || v.name.includes('Alex'))) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      voices[0];
  }

  // Play a subtle high-tech futuristic bleep before speech
  playFuturisticChime() {
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.audioCtx = new AudioContext();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.audioCtx.currentTime); // A5 note
      osc.frequency.exponentialRampToValueAtTime(1760, this.audioCtx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.03, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch (e) {
      // Audio context might be restricted before first click; ignore gracefully
    }
  }

  speak(text) {
    if (!this.enabled || !this.synth) return;

    // Run asynchronously with zero UI thread block
    setTimeout(() => {
      try {
        if (!this.selectedVoice) {
          this.loadVoice();
        }

        // Play subtle tech chime
        this.playFuturisticChime();

        // Cancel previous utterance
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        if (this.selectedVoice) {
          utterance.voice = this.selectedVoice;
        }

        // Robotic Voice modulation parameters
        utterance.pitch = 0.9;
        utterance.rate = 1.15; // Crisp, responsive speed
        utterance.volume = 1.0;

        this.synth.speak(utterance);
      } catch (err) {
        // Ignore synthesis errors gracefully
      }
    }, 0);
  }

  toggle() {
    this.enabled = !this.enabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('voice_assistant_enabled', String(this.enabled));
    }
    if (!this.enabled && this.synth) {
      this.synth.cancel();
    } else if (this.enabled) {
      this.speak("Voice guidance activated.");
    }
    return this.enabled;
  }

  stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {
        // Ignore
      }
    }
  }
}

export const aiVoice = new VoiceAssistant();

