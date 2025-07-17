<template>
  <aside :class="['fixed md:static z-30 top-0 left-0 h-full w-64 bg-background border-r transition-transform duration-200', { '-translate-x-full': !isOpen, 'translate-x-0': isOpen, 'md:translate-x-0': true }]">
    <div class="h-16 flex items-center px-4 border-b font-bold text-lg">Menu</div>
    <nav class="flex flex-col gap-2 p-4">
      <NuxtLink to="/" class="sidebar-link" active-class="bg-muted">Dashboard</NuxtLink>
      <NuxtLink to="/reports" class="sidebar-link" active-class="bg-muted">Reports</NuxtLink>
      <NuxtLink to="/settings" class="sidebar-link" active-class="bg-muted">Settings</NuxtLink>
    </nav>
    <!-- Overlay for mobile -->
    <div v-if="isOpen" class="fixed inset-0 bg-black/30 md:hidden z-20" @click="$emit('close')"></div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({ isOpen: { type: Boolean, default: false } })
</script>

<style scoped>
.sidebar-link {
  @apply px-3 py-2 rounded-md hover:bg-muted transition-colors font-medium;
}
</style> 