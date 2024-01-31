<script lang="ts" setup>
import {useResumeData} from "~/composables/useResumeData";
import XLogo from "~/components/icons/XLogo.vue";

const resumeData = useResumeData()
useSeoMeta({
  title: resumeData.name,
  description: resumeData.about,
  ogImage() {
    return resumeData.avatarUrl
  },
})
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <main class="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
    <section class="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">{{ resumeData.name }}</h1>
          <p class="max-w-md text-pretty font-mono text-sm text-muted-foreground">
            {{ resumeData.about }}
          </p>
          <p class="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            <a :href="resumeData.locationLink"
               class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
               target="_blank"
            >
              <Icon name="lucide:globe"/>
              {{ resumeData.location }}
            </a>
          </p>
          <div class="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            <Button :as-child="true" aria-label="email button" class="size-8" size="icon" variant="outline">
              <a :href="`mailto:${resumeData.contact.email}`">
                <Icon name="lucide:mail"/>
              </a>
            </Button>
            <Button v-if="resumeData.contact.tel" :as-child="true" aria-label="phone button" class="size-8" size="icon"
                    variant="outline">
              <a :href="`tel:${resumeData.contact.tel}`">
                <Icon name="lucide:phone"/>
              </a>
            </Button>
            <Button v-for="social in resumeData.contact.social" :key="social.name" :as-child="true"
                    aria-label="social button" class="size-8"
                    size="icon" variant="outline">
              <a :href="social.url">
                <component :is="social.icon === 'XLogo' ? XLogo : `Icon`" :name="social.icon"/>
              </a>
            </Button>
          </div>
          <div class="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
            <div class="flex gap-x-1">
              <Icon name="lucide:mail"/>
              <a :href="`mailto:${resumeData.contact.email}`">
                <span class="underline">{{ resumeData.contact.email }}</span>
              </a>
            </div>
            <div v-if="resumeData.contact.tel" class="flex gap-x-1">
              <a :href="`tel:${resumeData.contact.tel}`">
                <span class="underline">{{ resumeData.contact.tel }}</span>
              </a>
            </div>
          </div>
        </div>
        <Avatar class="size-28" shape="square">
          <NuxtImg v-if="resumeData.avatarUrl" :src="resumeData.avatarUrl" alt="profile picture" aria-label="profile picture"
                   height="120" width="120"/>
          <AvatarFallback v-else>{{ resumeData.initials }}</AvatarFallback>
        </Avatar>
      </div>
      <section>
        <h2 class="text-xl font-bold">About</h2>
        <p class="text-pretty font-mono text-sm text-muted-foreground">
          {{ resumeData.summary }}
        </p>
      </section>
      <section class="">
        <h2 class="text-xl font-bold mx">Work Experience</h2>
        <Card v-for="work in resumeData.work" :key="work.company" class="mb-5">
          <CardHeader>
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a :href="work.link" class="hover:underline">
                  {{ work.company }}
                </a>

                <span class="inline-flex gap-x-1">
                  <Badge
                      v-for="badge in work.badges"
                      :key="badge"
                      class="align-middle text-xs"
                      variant="secondary">
                    {{ badge }}
                  </Badge>
                </span>
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {{ work.start }} - {{ work.end }}
              </div>
            </div>
            <h4 class="font-mono text-sm leading-none">
              {{ work.title }}
            </h4>
          </CardHeader>
          <CardContent class="mt-2 text-xs">
            {{ work.description }}
          </CardContent>
        </Card>
      </section>
      <section>
        <h2 class="text-xl font-bold">Education</h2>
        <Card v-for="education in resumeData.education" :key="education.school" class="mb-5">
          <CardHeader>
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="font-semibold leading-none">{{ education.school }}</h3>
              <div class="text-sm tabular-nums text-gray-500">{{ education.start }} - {{ education.end }}</div>
            </div>
          </CardHeader>
          <CardContent class="mt-2">{{ education.degree }}</CardContent>
        </Card>
      </section>
      <section>
        <h2 class="text-xl font-bold">Skills</h2>
        <div class="flex flex-wrap gap-1">
          <Badge v-for="skill in resumeData.skills" :key="skill">{{ skill }}</Badge>
        </div>
      </section>
      <!--      <section>
              <h2 class="text-xl font-bold">Projects</h2>
              <div class="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard v-for="project in resumeData.projects"
                             :key="project.title"
                             :description="project.description"
                             :link="project.link ? project.link.href : undefined"
                             :tags="project.techStack"
                             :title="project.title"/>
              </div>
            </section>-->
    </section>
    <!--    <CommandMenu
            :links="[
            {
              url: resumeData.personalWebsiteUrl,
              title: 'Personal Website'
            },
            ...resumeData.contact.social.map(social => ({
              url: social.url,
              title: social.name
            }))
        ]"/>-->
  </main>
</template>
