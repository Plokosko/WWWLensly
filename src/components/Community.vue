<script setup lang="ts">
import { Github, Star, GitFork, Users, MessageSquare } from 'lucide-vue-next';

const communityStats = [
  { label: 'Stars', value: '1,234', icon: Star, color: 'text-yellow-400' },
  { label: 'Forks', value: '156', icon: GitFork, color: 'text-indigo-400' },
  { label: 'Contributors', value: '24', icon: Users, color: 'text-emerald-400' },
  { label: 'Discord Members', value: '850', icon: MessageSquare, color: 'text-violet-400' }
];
</script>

<template>
  <section id="community" class="py-20 md:py-32 w-full flex flex-col items-center">
    <div class="mb-16 text-center">
      <h2 class="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
        Growing with the Community.
      </h2>
      <p class="text-lg text-slate-400 font-medium max-w-2xl mx-auto">
        Lensly is open-source and driven by developers who care about media management at scale.
      </p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mb-12">
      <div v-for="stat in communityStats" :key="stat.label" class="glass p-8 rounded-[2rem] border-white/10 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
        <component :is="stat.icon" class="w-8 h-8 opacity-80" :class="stat.color" />
        <div>
          <div class="text-3xl font-black mb-1">{{ stat.value }}</div>
          <div class="text-xs font-bold uppercase tracking-widest text-slate-500">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Action Link -->
    <a 
      href="https://github.com" 
      target="_blank"
      class="glass px-10 py-5 rounded-full flex items-center gap-4 hover:scale-105 transition-transform group border-white/20 bg-white/5"
    >
      <Github class="w-6 h-6" />
      <div class="flex flex-col items-start leading-none">
        <span class="text-sm font-bold opacity-60 mb-1">Star us on GitHub</span>
        <span class="text-xl font-black tracking-tight">Lensly/Lensly</span>
      </div>
      <div class="w-10 h-10 rounded-full glass bg-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors ml-4">
        <Star class="w-4 h-4 text-yellow-400" />
      </div>
    </a>
  </section>
</template>
