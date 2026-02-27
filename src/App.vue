<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

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
  <div class="relative min-h-screen w-full bg-slate-950 selection:bg-indigo-500/30">
    <!-- Noise Texture Overlay -->
    <div class="noise-overlay" />

    <!-- Animated Background Blobs -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div class="blob bg-indigo-600/40 w-[600px] h-[600px] -top-20 -left-20 blur-[120px]" />
      <div class="blob bg-violet-600/30 w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[150px] [animation-delay:2s]" />
      <div class="blob bg-blue-600/20 w-[700px] h-[700px] -bottom-40 -right-40 blur-[100px] [animation-delay:4s]" />
      <div class="blob bg-slate-400/10 w-[400px] h-[400px] top-1/4 right-1/4 blur-[80px] [animation-delay:6s]" />
    </div>

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col items-center">
      <Navbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<style>
/* Base typography */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>
