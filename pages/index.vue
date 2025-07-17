<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
    <!-- Stats Cards -->
    <StatsCard class="lg:col-span-2" />
    <!-- Chart Placeholder -->
    <div class="bg-muted rounded-lg h-48 flex items-center justify-center text-muted-foreground">
      Chart Placeholder
    </div>
  </div>
  <!-- Recent Activity -->
  <div class="mt-8">
    <RecentActivity />
  </div>
</template>

<script setup lang="ts">
import StatsCard from '~/components/ui/StatsCard.vue'
import RecentActivity from '~/components/ui/RecentActivity.vue'
</script> 