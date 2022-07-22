<template>
  <Layout>
    <template #navbar-after>
      <a class="icon-button" href="https://github.com/lxuan1997/notes" target="_blank" aria-label="View GitHub Repo">
        <!-- <Icon :icon="icons.githubIcon" width="20" /> -->
        <Icon :icon="icons.githubIcon" width="20" />
      </a>
    </template>
  </Layout>
</template>

<script lang="ts">
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { Icon } from '@iconify/vue'
// import githubIcon from '@iconify-icons/fe/github';

export default {
  components: {
    Layout,
    Icon
  },
  data() {
    return {
      icons: {
        githubIcon: 'fe:github'
      }
    }
  }
}
</script>

<style scoped>
.icon-button {
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  color: var(--c-text);
}
</style>