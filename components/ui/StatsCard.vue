<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Card class="bg-primary/10 border-0 shadow-md">
      <CardContent class="flex flex-col gap-2 items-start">
        <div class="flex items-center gap-2 text-primary">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h5"/></svg>
          <span class="text-sm text-primary font-semibold">Total Users</span>
        </div>
        <div class="text-2xl font-bold">
          <span>{{ animatedUsers }}</span>
        </div>
      </CardContent>
    </Card>
    <Card class="bg-accent/10 border-0 shadow-md">
      <CardContent class="flex flex-col gap-2 items-start">
        <div class="flex items-center gap-2 text-accent">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          <span class="text-sm text-accent font-semibold">Active Users</span>
        </div>
        <div class="text-2xl font-bold">
          <span>{{ animatedActive }}</span>
        </div>
      </CardContent>
    </Card>
    <Card class="bg-secondary/10 border-0 shadow-md">
      <CardContent class="flex flex-col gap-2 items-start">
        <div class="flex items-center gap-2 text-secondary">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/></svg>
          <span class="text-sm text-secondary font-semibold">New Signups</span>
        </div>
        <div class="text-2xl font-bold">
          <span>{{ animatedSignups }}</span>
        </div>
      </CardContent>
    </Card>
    <Card class="bg-destructive/10 border-0 shadow-md">
      <CardContent class="flex flex-col gap-2 items-start">
        <div class="flex items-center gap-2 text-destructive">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>
          <span class="text-sm text-destructive font-semibold">Bounce Rate</span>
        </div>
        <div class="text-2xl font-bold">
          <span>{{ animatedBounce }}%</span>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { ref, onMounted } from 'vue'

const users = 1234
const active = 567
const signups = 89
const bounce = 32

const animatedUsers = ref(0)
const animatedActive = ref(0)
const animatedSignups = ref(0)
const animatedBounce = ref(0)

function animateValue(refValue: { value: number }, target: number, duration = 1000) {
  let start = 0
  const step = Math.ceil(target / (duration / 16))
  const interval = setInterval(() => {
    start += step
    if (start >= target) {
      refValue.value = target
      clearInterval(interval)
    } else {
      refValue.value = start
    }
  }, 16)
}

onMounted(() => {
  animateValue(animatedUsers, users)
  animateValue(animatedActive, active)
  animateValue(animatedSignups, signups)
  animateValue(animatedBounce, bounce)
})
</script> 