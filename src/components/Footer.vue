<script setup lang="ts">
import { Copyright, Heart } from 'lucide-vue-next';
</script>

<template>
  <footer class="w-full py-12 md:py-20 mt-20 flex flex-col items-center border-t border-white/5 relative overflow-hidden">
    <!-- Subtle Background Glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-indigo-500/10 blur-[150px] rounded-full translate-y-1/2" />
    
    <div class="relative z-10 w-full max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
      <div class="flex flex-col gap-4">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 group justify-center md:justify-start">
          <div class="w-8 h-8 rounded-lg glass bg-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform p-1">
            <img src="/Lensly.svg" alt="Lensly" class="w-full h-full brightness-0 invert" />
          </div>
          <span class="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Lensly</span>
        </a>
        <p class="text-sm text-slate-500 max-w-xs font-medium">
          Professional-grade desktop photo management and AI-powered analysis, built with .NET 9 and Avalonia UI.
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-12 md:gap-24">
        <div class="flex flex-col gap-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400">Project</h4>
          <div class="flex flex-col gap-2">
            <a href="https://github.com/Plokosko/Lensly" target="_blank" class="text-sm text-slate-500 hover:text-white transition-colors">Documentation</a>
            <a href="https://github.com/Plokosko/Lensly/releases/tag/Main" target="_blank" class="text-sm text-slate-500 hover:text-white transition-colors">Release Notes</a>
            <a href="https://opensource.com/" target="_blank" class="text-sm text-slate-500 hover:text-white transition-colors">Open Source</a>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400">Community</h4>
          <div class="flex flex-col gap-2">
            <a href="https://discord.gg/pdUSAbdM82" target="_blank" class="text-sm text-slate-500 hover:text-white transition-colors">Discord</a>
            <a href="https://twstalker.com/Plokosko" target="_blank" class="text-sm text-slate-500 hover:text-white transition-colors">Twitter</a>
            <a href="mailto:david.villem@spsehalova.sk" class="text-sm text-slate-500 hover:text-white transition-colors">Support</a>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400">Legal</h4>
          <div class="flex flex-col gap-2">
            <a href="/privacy" class="text-sm text-slate-500 hover:text-white transition-colors">Privacy</a>
            <a href="/terms" class="text-sm text-slate-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20 text-center flex flex-col items-center gap-4">
      <div class="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase tracking-widest">
        <Copyright class="w-3 h-3" />
        2026 Lensly Project • Built with 
        <Heart class="w-3 h-3 text-red-500/50" />
        by Pluk
      </div>
    </div>
  </footer>
</template>
