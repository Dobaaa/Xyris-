<template>
  <div class="p-4 md:p-8 space-y-10 max-w-5xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-extrabold mb-2 flex items-center gap-2">
      <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2a4 4 0 014-4h4m0 0V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h2"/></svg>
      Reports Overview
    </h1>
    <!-- Summary Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
        <div class="text-4xl font-bold mb-1 text-primary">$12,340</div>
        <div class="text-muted-foreground mb-2">Total Sales</div>
        <span class="inline-block px-2 py-1 text-xs rounded bg-primary/10 text-primary">+8% this month</span>
      </div>
      <div class="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
        <div class="text-4xl font-bold mb-1 text-secondary">1,234</div>
        <div class="text-muted-foreground mb-2">Orders</div>
        <span class="inline-block px-2 py-1 text-xs rounded bg-secondary/10 text-secondary">+3% this month</span>
      </div>
      <div class="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
        <div class="text-4xl font-bold mb-1 text-accent">320</div>
        <div class="text-muted-foreground mb-2">New Users</div>
        <span class="inline-block px-2 py-1 text-xs rounded bg-accent/10 text-accent">+12% this month</span>
      </div>
    </div>
    <!-- Table -->
    <div class="bg-background rounded-xl shadow-lg p-6 overflow-x-auto">
      <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18"/></svg>
        Recent Orders
      </h2>
      <table class="min-w-full text-sm">
        <thead>
          <tr class="border-b bg-muted/30">
            <th class="px-4 py-2 text-left font-semibold">Order ID</th>
            <th class="px-4 py-2 text-left font-semibold">Customer</th>
            <th class="px-4 py-2 text-left font-semibold">Amount</th>
            <th class="px-4 py-2 text-left font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="border-b hover:bg-accent/10 transition">
            <td class="px-4 py-2 font-mono">#{{ order.id }}</td>
            <td class="px-4 py-2">{{ order.customer }}</td>
            <td class="px-4 py-2">${{ order.amount }}</td>
            <td class="px-4 py-2">
              <span :class="order.status === 'Paid' ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-yellow-600 dark:text-yellow-400 font-semibold'">
                {{ order.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const orders = [
  { id: 1234, customer: 'John Doe', amount: 120.5, status: 'Paid' },
  { id: 1235, customer: 'Jane Smith', amount: 89.99, status: 'Pending' },
  { id: 1236, customer: 'Mike Brown', amount: 45.0, status: 'Paid' },
  { id: 1237, customer: 'Emily White', amount: 230.0, status: 'Paid' },
  { id: 1238, customer: 'Chris Green', amount: 67.5, status: 'Pending' },
]
</script> 