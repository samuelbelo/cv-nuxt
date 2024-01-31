<script lang="ts" setup>
interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <Card class="flex flex-col overflow-hidden border border-muted p-3">
    <CardHeader class="">
      <div class="space-y-1">
        <CardTitle class="text-base">
          <a v-if="props.link"
             :href="props.link"
             class="inline-flex items-center gap-1 hover:underline"
             target="_blank">
            <span class="size-1 rounded-full bg-green-500">{{ props.title }}</span>
          </a>
          <span v-else>{{ props.title }}</span>
        </CardTitle>
        <div class="hidden font-mono text-xs underline print:visible">
          {{ props.link?.replace("https://", "").replace("www.", "").replace("/", "") }}
        </div>
        <CardDescription class="font-mono text-xs">
          {{ props.description }}
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent class="mt-auto flex">
      <div class="mt-2 flex flex-wrap gap-1">
        <Badge
            v-for="tag in props.tags"
            :key="tag"
            class="px-1 py-0 text-[10px]"
            variant="secondary">
          {{ tag }}
        </Badge>
      </div>
    </CardContent>
  </Card>
</template>