<template>
  <div class="flashlight-container" @mousemove="handleMouseMove">
    <!-- Mask layer that hides everything except the flashlight area -->
    <div class="dark-mask" :style="maskStyle"></div>
    
    <!-- Your actual content (completely visible underneath) -->
    <div class="website-content">
      <header class="header">
        <h1>Secret Website</h1>
        <p>Use your cursor as a flashlight to explore</p>
      </header>
      
      <main class="main-content">
        <section class="section">
          <h2>Hidden Section 1</h2>
          <p>This content is only visible when you shine light on it</p>
        </section>
        
        <section class="section">
          <h2>Hidden Section 2</h2>
          <p>Move your cursor around to discover secrets</p>
        </section>
        
        <section class="section">
          <h2>Hidden Section 3</h2>
          <p>The darkness hides many mysteries</p>
        </section>
      </main>
    </div>
    
    <!-- Optional: Custom cursor -->
    <div class="flashlight-cursor" :style="cursorStyle"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)

const maskStyle = ref({
  '--mouse-x': '0px',
  '--mouse-y': '0px'
})

const cursorStyle = ref({
  left: '0px',
  top: '0px'
})

const handleMouseMove = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
  
  maskStyle.value = {
    '--mouse-x': `${mouseX.value}px`,
    '--mouse-y': `${mouseY.value}px`
  }
  
  cursorStyle.value = {
    left: `${mouseX.value}px`,
    top: `${mouseY.value}px`
  }
}

onMounted(() => {
  document.body.style.cursor = 'none'
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.cursor = ''
  document.body.style.overflow = ''
})
</script>

<style scoped>
.flashlight-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* Dark mask that covers everything except the flashlight area */
.dark-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle 100px at var(--mouse-x) var(--mouse-y),
    transparent 0%,
    rgba(0, 0, 0, 0.95) 40%,
    black 100%
  );
  pointer-events: none;
  z-index: 2;
  transition: background 0.1s ease-out;
}

/* Your actual website content - completely visible but hidden by the mask */
.website-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  color: white;
  z-index: 1;
  padding: 2rem;
  overflow-y: auto;
}

.header {
  text-align: center;
  padding: 4rem 2rem;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
}

.header p {
  font-size: 1.2rem;
  opacity: 0.8;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  margin: 2rem 0;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.section p {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
}

/* Flashlight cursor */
.flashlight-cursor {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 3;
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  transition: all 0.1s ease-out;
}
</style>