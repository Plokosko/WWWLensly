<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Download, Github, Monitor, Apple, Terminal } from 'lucide-vue-next';
import VanillaTilt from 'vanilla-tilt';

const tiltElement = ref<HTMLElement | null>(null);
const userOS = ref<'Windows' | 'macOS' | 'Linux' | 'Unknown'>('Unknown');

onMounted(() => {
  // OS Detection
  const platform = window.navigator.userAgent.toLowerCase();
  if (platform.includes('win')) userOS.value = 'macOS';
  else if (platform.includes('mac')) userOS.value = 'macOS';
  else if (platform.includes('linux')) userOS.value = 'macOS';

  // 3D Tilt Effect
  if (tiltElement.value) {
    VanillaTilt.init(tiltElement.value, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.4,
      perspective: 1000,
      scale: 1.05
    });
  }
});

const getOSIcon = () => {
  switch (userOS.value) {
    case 'Windows': return Monitor;
    case 'macOS': return Apple;
    case 'Linux': return Terminal;
    default: return Download;
  }
};
</script>

<template>
  <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center overflow-visible">
    <!-- Main Headline -->
    <div class="relative z-10 max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <h1 class="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
        <span class="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">
          Photo Management, <br />
        </span>
        <span class="bg-clip-text text-transparent bg-gradient-to-tr from-indigo-400 via-violet-400 to-indigo-600">
          Reimagined.
        </span>
      </h1>
      <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
        Professional-grade desktop photo management and AI-powered analysis. Built with .NET 9 and Avalonia UI, optimized for the macOS experience.
      </p>

      <!-- Download Hub (The Hero Card) -->
      <div 
        ref="tiltElement"
        class="glass relative max-w-lg mx-auto p-10 rounded-[3rem] border-white/20 flex flex-col items-center gap-8 group cursor-default"
      >
        <div class="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent pointer-events-none" />
        
        <!-- App Icon/Logo Placeholder -->
        <div class="w-20 h-20 rounded-3xl glass flex items-center justify-center bg-indigo-500/20 group-hover:scale-110 transition-transform duration-500 shadow-2xl relative p-4">
          <div class="absolute inset-0 bg-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
          <img src="/Lensly.svg" alt="Lensly" class="w-full h-full relative z-10 brightness-0 invert" />
        </div>

        <div class="flex flex-col gap-2">
          <span class="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase">Latest Stable Build</span>
          <h2 class="text-3xl font-bold">Lensly</h2>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 w-full">
          <a href="https://github.com/Plokosko/Lensly/releases/download/Main/Lensly.zip" class="relative flex-1 flex items-center justify-center gap-3 bg-white text-slate-950 font-bold py-4 px-8 rounded-2xl overflow-hidden hover:scale-105 transition-transform group">
            <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shimmer" />
            <component :is="getOSIcon()" class="w-5 h-5" />
            Download for {{ userOS }}
          </a>
          
          <a href="https://github.com/Plokosko/Lensly" target="_blank" class="flex-1 flex items-center justify-center gap-3 glass border-white/10 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105">
            <Github class="w-5 h-5" />
            View Source
          </a>
        </div>

        <div class="text-slate-500 text-sm font-medium flex gap-6 mt-2">
          <span>64-bit Installer</span>
          <span>•</span>
          <span>407.3 MB</span>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
      <div class="w-[2px] h-10 bg-gradient-to-b from-white/0 via-white to-white/0" />
    </div>
  </section>
</template>

<style scoped>
.animate-in {
  animation: slide-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
