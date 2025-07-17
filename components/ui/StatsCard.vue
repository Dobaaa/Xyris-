<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Card>
      <CardContent>
        <div class="text-sm text-muted-foreground">Total Users</div>
        <div class="text-2xl font-bold">1,234</div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <div class="text-sm text-muted-foreground">Active Users</div>
        <div class="text-2xl font-bold">567</div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <div class="text-sm text-muted-foreground">New Signups</div>
        <div class="text-2xl font-bold">89</div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <div class="text-sm text-muted-foreground">Bounce Rate</div>
        <div class="text-2xl font-bold">32%</div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
</script> 