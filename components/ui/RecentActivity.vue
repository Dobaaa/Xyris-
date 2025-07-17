<template>
  <Card>
    <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
    </CardHeader>
    <CardContent>
      <ul class="divide-y divide-muted">
        <li v-for="item in activities" :key="item.id" class="py-3 flex justify-between items-center group hover:bg-muted/50 rounded transition">
          <div class="flex items-center gap-2">
            <span v-if="item.type === 'signup'" class="text-primary"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/></svg></span>
            <span v-else-if="item.type === 'order'" class="text-accent"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4"/></svg></span>
            <span v-else-if="item.type === 'profile'" class="text-secondary"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a10 10 0 0113 0"/></svg></span>
            <span v-else-if="item.type === 'payment'" class="text-green-600 dark:text-green-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg></span>
            <span v-else-if="item.type === 'login'" class="text-destructive"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><path d="M10 17l5-5-5-5"/></svg></span>
            <span v-else class="text-muted-foreground"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></span>
            <span>{{ item.text }}</span>
          </div>
          <span class="text-xs text-muted-foreground">{{ item.time }}</span>
        </li>
      </ul>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ref } from 'vue'

const activities = ref([
  { id: 1, text: 'User John signed up', time: '2 min ago', type: 'signup' },
  { id: 2, text: 'Order #1234 placed', time: '10 min ago', type: 'order' },
  { id: 3, text: 'User Jane updated profile', time: '30 min ago', type: 'profile' },
  { id: 4, text: 'Payment received', time: '1 hr ago', type: 'payment' },
  { id: 5, text: 'User Mike logged in', time: '2 hr ago', type: 'login' },
])
</script> 