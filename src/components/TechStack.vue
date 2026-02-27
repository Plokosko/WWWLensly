<script setup lang="ts">
import { Cpu, Braces, Layers, Zap } from 'lucide-vue-next';

const techStack = [
  { name: 'Avalonia UI', icon: Layers, color: 'text-indigo-400', desc: 'Cross-platform XAML-based interface for desktop-class experiences.' },
  { name: 'ONNX Runtime', icon: Cpu, color: 'text-emerald-400', desc: 'High-performance AI inference for face recognition.' },
  { name: 'Magick.NET', icon: Zap, color: 'text-orange-400', desc: 'Robust image processing across hundreds of formats.' },
  { name: '.NET 9', icon: Braces, color: 'text-violet-400', desc: 'The cutting-edge C# 13 runtime for maximum performance.' }
];
</script>

<template>
  <section id="tech" class="py-20 md:py-32 w-full flex flex-col items-center">
    <div class="glass w-full max-w-5xl rounded-[3rem] border-white/20 p-12 relative overflow-hidden">
      <!-- Background Glow -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <!-- Left: Text -->
        <div class="flex flex-col justify-center">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 glass rounded-2xl flex items-center justify-center bg-indigo-500/20">
              <Braces class="w-6 h-6 text-indigo-400" />
            </div>
            <h2 class="text-3xl font-black uppercase tracking-widest text-indigo-400">Developer's Corner</h2>
          </div>
          <h3 class="text-4xl md:text-5xl font-black mb-8 leading-tight">Built on the Edge of Performance.</h3>
          <p class="text-lg text-slate-400 font-medium mb-12">
            Lensly isn't just a media manager; it's a testament to modern engineering. 
            We've combined the world's most powerful engines to deliver a seamless, high-performance experience.
          </p>
          <div class="flex gap-4">
            <a href="https://github.com" class="glass px-6 py-3 rounded-2xl flex items-center gap-3 font-bold hover:bg-white/10 transition-colors">
              Read Documentation
            </a>
          </div>
        </div>

        <!-- Right: Code Editor Card -->
        <div class="glass-dark rounded-[2.5rem] border-white/10 overflow-hidden shadow-2xl">
          <!-- Editor Header -->
          <div class="bg-black/40 px-6 py-4 flex items-center justify-between border-b border-white/5">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500/50" />
              <div class="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div class="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div class="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">Lensly.csproj</div>
            <div class="w-10" />
          </div>
          
          <!-- Editor Body -->
          <div class="p-8 font-mono text-sm space-y-8">
            <div v-for="tech in techStack" :key="tech.name" class="group">
              <div class="flex items-center gap-4 mb-3">
                <component :is="tech.icon" class="w-5 h-5 opacity-80" :class="tech.color" />
                <span class="text-indigo-300 font-bold">&lt;PackageReference Include="{{ tech.name }}" /&gt;</span>
              </div>
              <p class="text-slate-500 pl-9 border-l border-white/10 transition-colors group-hover:border-indigo-500/50">
                {{ tech.desc }}
              </p>
            </div>
            <div class="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
              <span class="text-indigo-400 font-bold">Runtime</span>
              <span class="text-violet-400 font-bold">osx-arm64</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
