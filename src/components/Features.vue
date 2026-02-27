<script setup lang="ts">
import { Video, Scan, FileJson } from 'lucide-vue-next';

const metadataSamples = [
  { label: 'Camera', value: 'Sony α7R V' },
  { label: 'Lens', value: 'FE 24-70mm f/2.8 GM II' },
  { label: 'ISO', value: '100' },
  { label: 'Aperture', value: 'f/4.0' },
  { label: 'Shutter', value: '1/125s' }
];
</script>

<template>
  <section id="features" class="py-20 md:py-32 w-full flex flex-col items-center">
    <!-- Section Header -->
    <div class="mb-20 text-center animate-in">
      <h2 class="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
        Professional Power, <br />
        Liquid Performance.
      </h2>
      <div class="h-1 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
      <!-- 1. Face Detection Card (Scanning Effect) -->
      <div class="glass p-10 rounded-[3rem] border-white/20 group relative overflow-hidden flex flex-col items-center text-center gap-8 h-full min-h-[400px]">
        <div class="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors" />
        
        <!-- Scanning Box -->
        <div class="relative w-full aspect-square glass rounded-2xl bg-black/40 border-indigo-500/20 flex items-center justify-center overflow-hidden">
          <div class="absolute inset-0 bg-indigo-500/10" />
          <Scan class="w-16 h-16 text-indigo-400 opacity-80" />
          <!-- Scan Line -->
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_15px_indigo] animate-scan" />
          <!-- Corner Indicators -->
          <div class="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-indigo-400" />
          <div class="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-indigo-400" />
          <div class="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-indigo-400" />
          <div class="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-indigo-400" />
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-4">AI Intelligence</h3>
          <p class="text-slate-400 font-medium">Deep learning face recognition and embedding generation powered by the ONNX Runtime.</p>
        </div>
        <div class="mt-auto glass px-4 py-1.5 rounded-full text-xs font-bold text-indigo-400 border-indigo-500/30 uppercase tracking-widest bg-indigo-500/10">
          ArcFace R50 Model
        </div>
      </div>

      <!-- 2. Native macOS Performance -->
      <div class="glass p-10 rounded-[3rem] border-white/20 group relative overflow-hidden flex flex-col items-center text-center gap-8 h-full min-h-[400px]">
        <div class="absolute inset-0 bg-violet-500/5 group-hover:bg-violet-500/10 transition-colors" />
        
        <!-- Video Badge Display -->
        <div class="relative w-full aspect-square glass rounded-2xl bg-black/40 border-violet-500/20 flex flex-col items-center justify-center gap-4">
          <div class="w-20 h-20 rounded-full glass flex items-center justify-center bg-violet-500/20 group-hover:scale-110 transition-transform">
            <Video class="w-10 h-10 text-violet-400" />
          </div>
          <div class="flex gap-2">
            <span class="glass px-3 py-1 rounded-lg text-[10px] font-bold text-violet-300">CORE IMAGE</span>
            <span class="glass px-3 py-1 rounded-lg text-[10px] font-bold text-violet-300">METAL API</span>
          </div>
          <div class="text-center">
            <div class="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Platform Status</div>
            <div class="text-xs font-mono text-green-400 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Native Swift Interop
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-4">macOS Native</h3>
          <p class="text-slate-400 font-medium">Leveraging Apple's Vision framework and Core Image for hardware-accelerated editing.</p>
        </div>
        <div class="mt-auto glass px-4 py-1.5 rounded-full text-xs font-bold text-violet-400 border-violet-500/30 uppercase tracking-widest bg-violet-500/10">
          Apple Vision Framework
        </div>
      </div>

      <!-- 3. Pro Metadata Card -->
      <div class="glass p-10 rounded-[3rem] border-white/20 group relative overflow-hidden flex flex-col items-center text-center gap-8 h-full min-h-[400px]">
        <div class="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
        
        <!-- Metadata List -->
        <div class="relative w-full aspect-square glass rounded-2xl bg-black/40 border-blue-500/20 p-6 flex flex-col gap-3">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <FileJson class="w-4 h-4 text-blue-400" />
              <span class="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Metadata Inspector</span>
            </div>
            <div class="w-3 h-3 rounded-full border border-blue-400/50" />
          </div>
          <div v-for="item in metadataSamples" :key="item.label" class="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
            <span class="text-xs text-slate-500 font-medium">{{ item.label }}</span>
            <span class="text-xs text-slate-200 font-mono">{{ item.value }}</span>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-4">Metadata Engine</h3>
          <p class="text-slate-400 font-medium">Deep inspection and editing of EXIF, IPTC, and XMP data with XmpCore.</p>
        </div>
        <div class="mt-auto glass px-4 py-1.5 rounded-full text-xs font-bold text-blue-400 border-blue-500/30 uppercase tracking-widest bg-blue-500/10">
          XMP Indexing Core
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scan {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(300px); opacity: 0; }
}

.animate-scan {
  animation: scan 3s linear infinite;
}
</style>
