<template>
  <section class="flex flex-col min-h-screen p-4 justify-center h-screen bg-[#FFF1D5]">
    <h2 class="mb-12 text-center text-6xl font-bold text-[#456882] sm:text-6xl font-oleo">Verfügbarkeit</h2>
    
    <!-- Traum-Ferienwohnungen Kalender Widget -->
    <div class="flex justify-center">
        <iframe 
          :width="iframeWidth" 
          :height="iframeHeight" 
          :src="iframeSrc" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0" 
          allowtransparency="true" 
          scrolling="no"
          class=""
          title="Verfügbarkeitskalender"
        />
    </div>
    <div class="flex items-center justify-center p-12">
<Icon icon="material-symbols:subdirectory-arrow-right" class="mr-2 text-gray-600" width="64" />
<a 
:href="`https://www.traum-ferienwohnungen.de/${listingId}/#kalender`"
target="_blank"
rel="noopener noreferrer"
class="inline-block"
>
<img 
src="https://static.traum-ferienwohnungen.de/images/vermieten/tfw-logo.png"
alt="Traum-Ferienwohnungen.de"
width="200"
class="px-4 py-2 mt-1.5 bg-[#dff9ff] border-4 border-[#D2C1B6] rounded"
/>
</a>
</div>
  </section>
</template>

<script>
export default {
  name: 'CalendarWidget',
  data() {
    return {
      listingId: '257216',
      isMobile: false,
      
      // Desktop Konfiguration
      desktop: {
        months: 6,
        columns: 3,
        width: 405,
        height: 386
      },
      
      // Mobile Konfiguration
      mobile: {
        months: 4,
        columns: 2,
        width: 300,
        height: 400
      }
    }
  },
  
  computed: {
    currentConfig() {
      return this.isMobile ? this.mobile : this.desktop;
    },
    
    iframeSrc() {
      const { months, columns } = this.currentConfig;
      return `//www.traum-ferienwohnungen.de/widgets/kalender/${this.listingId}/?months=${months}&columns=${columns}`;
    },
    
    iframeWidth() {
      return this.currentConfig.width;
    },
    
    iframeHeight() {
      return this.currentConfig.height;
    }
  },
  
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  
  methods: {
    checkScreenSize() {
      // Mobile Breakpoint bei 768px (Tailwind md breakpoint)
      this.isMobile = window.innerWidth < 768;
    }
  }
};
</script>

<script setup>
import { Icon } from "@iconify/vue";
</script>