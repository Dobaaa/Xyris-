<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
    <!-- Stats Cards -->
    <StatsCard class="lg:col-span-2 animate-fade-in" />
    <!-- Chart -->
    <div class="bg-white dark:bg-dark rounded-2xl shadow-lg h-64 flex flex-col items-center justify-center p-4 lg:col-span-1 animate-fade-in">
      <div class="w-full h-40 flex items-center justify-center">
        <!-- رسم بياني استاتيكي SVG -->
        <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <polyline points="0,70 40,40 80,50 120,20 160,30 200,10" fill="none" stroke="#3b82f6" stroke-width="4" />
          <circle cx="40" cy="40" r="4" fill="#10b981" />
          <circle cx="120" cy="20" r="4" fill="#6366f1" />
          <circle cx="200" cy="10" r="4" fill="#ef4444" />
        </svg>
      </div>
      <div class="flex justify-between w-full mt-2 text-xs text-muted-foreground">
        <span>يناير</span><span>فبراير</span><span>مارس</span><span>أبريل</span><span>مايو</span>
      </div>
    </div>
  </div>
  <!-- Quick Actions -->
  <div class="flex flex-wrap gap-4 mt-6 animate-fade-in">
    <button class="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition">إضافة مستخدم</button>
    <button class="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold shadow hover:bg-secondary/90 transition">تصدير بيانات</button>
    <button class="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 transition">تقرير جديد</button>
  </div>
  <!-- Recent Activity -->
  <div class="mt-8 animate-fade-in">
    <RecentActivity />
  </div>
</template>

<script setup lang="ts">
import StatsCard from '~/components/ui/StatsCard.vue'
import RecentActivity from '~/components/ui/RecentActivity.vue'
</script> 

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
}
.animate-fade-in {
  animation: fade-in 0.7s cubic-bezier(.4,0,.2,1);
}
</style> 