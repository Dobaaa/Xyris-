<template>
  <Dialog :open="open" @update:open="val => emit('update:open', val)">
    <DialogContent title="Settings">
      <form @submit.prevent="save">
        <div class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">Username</label>
            <input v-model="form.username" class="input" type="text" required />
          </div>
          <div>
            <label class="block mb-1 font-medium">Email</label>
            <input v-model="form.email" class="input" type="email" required />
          </div>
          <div class="flex items-center gap-2">
            <input v-model="form.notifications" type="checkbox" id="notif" />
            <label for="notif">Enable Notifications</label>
          </div>
        </div>
        <div class="flex justify-end gap-2 mt-6">
          <Button type="button" variant="outline" @click="close">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from './button'

const props = defineProps({ open: Boolean })
const emit = defineEmits(['update:open'])

const form = ref({ username: 'John Doe', email: 'john@example.com', notifications: true })

function close() {
  emit('update:open', false)
}
function save() {
  // هنا يمكن إضافة منطق الحفظ
  close()
}

watch(() => props.open, (val) => {
  if (val) {
    // يمكن تحميل بيانات المستخدم هنا
  }
})
</script>

<style scoped>
.input {
  @apply w-full px-3 py-2 border rounded-md bg-background;
}
</style> 