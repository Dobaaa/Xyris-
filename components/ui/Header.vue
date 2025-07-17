<template>
  <header class="flex items-center justify-between h-16 px-4 border-b bg-background">
    <!-- Hamburger (Mobile) -->
    <button class="md:hidden mr-2" @click="$emit('toggle-sidebar')">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <!-- Logo -->
    <div class="font-bold text-lg tracking-tight">Dashboard</div>
    <div class="flex items-center gap-2">
      <!-- Dark/Light Toggle -->
      <Button variant="ghost" size="icon" @click="toggleTheme">
        <span v-if="isDark">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.24 4.24l-.71-.71M6.34 6.34l-.71-.71"/></svg>
        </span>
        <span v-else>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.293 17.293A8 8 0 016.707 6.707a8.001 8.001 0 1010.586 10.586z"/></svg>
        </span>
      </Button>
      <!-- User Avatar -->
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/40" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <!-- Settings -->
      <Button variant="ghost" size="icon" @click="$emit('open-settings')">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useColorMode } from '@vueuse/core'
import { Button } from './button'
import { Avatar, AvatarImage, AvatarFallback } from './avatar'

const colorMode = useColorMode()
const isDark = ref(colorMode.value === 'dark')

function toggleTheme() {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  isDark.value = colorMode.value === 'dark'
}
</script> 