<script lang="ts" setup>
import {useMagicKeys} from "@vueuse/core";
import {ref, watch} from "vue";

interface Props {
  links: { url: string; title: string }[];
}

const props = defineProps<Props>();

const open = ref(false)

const {Meta_J, Ctrl_J} = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'j' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})

watch([Meta_J, Ctrl_J], (v) => {
  if (v[0] || v[1])
    handleOpenChange()
})

function handleOpenChange() {
  open.value = !open.value
}

const handlePrint = () => {
  open.value = false
  window.print()
}
</script>

<template>
  <div>
    <p class="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
      Press
      <kbd
          class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span class="text-xs">⌘ J</span>
      </kbd> or
      <kbd
          class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span class="text-xs">CTRL J</span>
      </kbd>
      to open the command menu
    </p>
    <CommandDialog v-model:open="open">
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem @click="handlePrint">
            <span>Print</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Links">
          <CommandItem v-for="(link, i) in props.links" :key="i" :value="link.url">
            <a :href="link.url" target="_blank"><span>{{ link.title }}</span></a>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator/>
      </CommandList>
    </CommandDialog>
  </div>
</template>

<style scoped>

</style>