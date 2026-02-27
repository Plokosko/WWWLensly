<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Github, Menu, X } from 'lucide-vue-next';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20;
  });
});

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Tech', href: '#tech' },
  { name: 'Contact', href: '#contact' },
];
</script>

<template>
  <nav 
    class="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-[100] transition-all duration-300"
    :class="[isScrolled ? 'top-4' : 'top-6']"
  >
    <div 
      class="glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500"
      :class="[isScrolled ? 'bg-white/10 saturate-200 border-white/20' : 'bg-white/5']"
    >
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 group">
        <div class="w-8 h-8 rounded-lg glass bg-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform p-1">
          <img src="/Lensly.svg" alt="Lensly" class="w-full h-full brightness-0 invert" />
        </div>
        <span class="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Lensly</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          class="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          {{ link.name }}
        </a>
        <a 
          href="https://github.com/Plokosko/Lensly" 
          target="_blank"
          class="glass px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          <Github class="w-4 h-4" />
          <span class="text-sm font-semibold">Star</span>
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button class="md:hidden text-white" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-2 scale-95"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-16 left-0 w-full glass rounded-3xl p-6 mt-2 flex flex-col gap-4 text-center">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          @click="isMobileMenuOpen = false"
          class="text-lg font-medium text-slate-300 hover:text-white py-2"
        >
          {{ link.name }}
        </a>
        <hr class="border-white/10" />
        <a 
          href="https://github.com/Plokosko/Lensly" 
          class="flex items-center justify-center gap-2 text-white font-bold py-2"
        >
          <Github class="w-5 h-5" />
          GitHub
        </a>
      </div>
    </Transition>
  </nav>
</template>
