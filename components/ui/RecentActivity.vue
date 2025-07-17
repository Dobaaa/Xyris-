<template>
  <Card>
    <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
    </CardHeader>
    <CardContent>
      <ul class="divide-y divide-muted">
        <li v-for="item in activities" :key="item.id" class="py-3 flex justify-between items-center">
          <span>{{ item.text }}</span>
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
  { id: 1, text: 'User John signed up', time: '2 min ago' },
  { id: 2, text: 'Order #1234 placed', time: '10 min ago' },
  { id: 3, text: 'User Jane updated profile', time: '30 min ago' },
  { id: 4, text: 'Payment received', time: '1 hr ago' },
  { id: 5, text: 'User Mike logged in', time: '2 hr ago' },
])
</script> 