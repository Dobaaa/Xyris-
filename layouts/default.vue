<template>
  <div class="min-h-screen flex bg-background text-foreground">
    <!-- Sidebar -->
    <Sidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" @open-settings="openSettings = true" />
      <!-- Main Content -->
      <main class="flex-1 p-4 md:p-8 bg-background">
        <slot />
      </main>
    </div>
    <!-- Settings Modal -->
    <SettingsModal v-model:open="openSettings" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '~/components/ui/Header.vue'
import Sidebar from '~/components/ui/Sidebar.vue'
import SettingsModal from '~/components/ui/SettingsModal.vue'

const sidebarOpen = ref(false)
const openSettings = ref(false)
</script> 