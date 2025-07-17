<template>
  <div class="p-4 md:p-8 max-w-3xl mx-auto space-y-10">
    <h1 class="text-3xl md:text-4xl font-extrabold mb-2 flex items-center gap-2">
      <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
      Settings
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Profile Card -->
      <div class="bg-background rounded-xl shadow-lg p-6 flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <img src="https://i.pravatar.cc/60" class="w-14 h-14 rounded-full border" alt="User" />
          <div>
            <div class="font-bold text-lg">John Doe</div>
            <div class="text-muted-foreground text-sm">john@example.com</div>
          </div>
        </div>
        <button class="mt-2 px-4 py-2 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">Edit Profile</button>
      </div>
      <!-- Preferences Card -->
      <div class="bg-background rounded-xl shadow-lg p-6 flex flex-col gap-4">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /></svg>
          <div class="font-semibold text-lg">Preferences</div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-muted-foreground">Enable Notifications</span>
          <input type="checkbox" checked class="accent-primary w-5 h-5 rounded" disabled />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-muted-foreground">Dark Mode</span>
          <input type="checkbox" checked class="accent-primary w-5 h-5 rounded" disabled />
        </div>
      </div>
    </div>
    <!-- Security Card -->
    <div class="bg-background rounded-xl shadow-lg p-6 flex flex-col gap-4">
      <div class="flex items-center gap-2 mb-2">
        <svg class="w-6 h-6 text-destructive" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
        <div class="font-semibold text-lg">Security</div>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-muted-foreground">Two-Factor Authentication</span>
        <button class="px-3 py-1 rounded bg-muted text-foreground font-medium hover:bg-muted/70 transition" disabled>Enabled</button>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-muted-foreground">Change Password</span>
        <button class="px-3 py-1 rounded bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition" disabled>Change</button>
      </div>
    </div>
  </div>
</template> 