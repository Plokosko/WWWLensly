<script setup lang="ts">
import { onMounted } from 'vue';
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
import TechStack from '../components/TechStack.vue';
import Contact from '../components/Contact.vue';

onMounted(() => {
  // Parallax background blobs
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
      const speed = (index + 1) * 0.1;
      (blob as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
    });
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <main class="w-full max-w-7xl px-6">
    <Hero />
    <Features />
    <TechStack />
    <Contact />
  </main>
</template>
