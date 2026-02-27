<script setup lang="ts">
import { Twitter, Github, MessageSquare, Mail, ExternalLink } from 'lucide-vue-next';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Plokosko/Lensly' },
  { name: 'Discord', icon: MessageSquare, href: 'https://discord.gg/pdUSAbdM82' },
  { name: 'Twitter', icon: Twitter, href: 'https://twstalker.com/Plokosko' },
  { name: 'Email Support', icon: Mail, href: 'mailto:david.villem@spsehalova.sk' }
];
</script>

<template>
  <section id="contact" class="py-20 md:py-32 w-full flex flex-col items-center">
    <div class="glass w-full max-w-3xl rounded-[3rem] border-white/20 p-12 relative overflow-hidden flex flex-col items-center text-center">
      
      <h2 class="text-4xl md:text-5xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40">
        Get in Touch
      </h2>
      <p class="text-lg text-slate-400 font-medium mb-12 max-w-xl">
        Have a question or want to contribute? Reach out to our core team through any of these channels.
      </p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <a 
          v-for="social in socialLinks" 
          :key="social.name" 
          :href="social.href"
          target="_blank"
          class="flex items-center justify-between p-6 glass rounded-2xl border-white/5 hover:border-white/20 hover:bg-white/5 transition-all group"
        >
          <div class="flex items-center gap-4">
            <component :is="social.icon" class="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:text-indigo-400 transition-all" />
            <span class="font-bold text-slate-300 group-hover:text-white">{{ social.name }}</span>
          </div>
          <ExternalLink class="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  </section>
</template>
