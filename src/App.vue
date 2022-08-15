<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          NHS Jobs
        </q-toolbar-title>
        <q-btn round size="sm" :color="isDark ? 'amber' : 'blue-grey'" :icon="`${mode}_mode`" @click="toggle" />
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above :width="200" :breakpoint="500" bordered>
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item v-if="menuItem.label" clickable :active="menuItem.label === 'Outbox'" v-ripple :to="menuItem.to">
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDarkLightMode } from './composables/dark-light-mode'
type MenuItem = { label?: string, separator?: boolean, icon?: string, iconColor?: string, to?: string }

const menuList: MenuItem[] = [
  {
    icon: 'home',
    label: 'Home',
    to: '/',
    separator: true
  },
  { separator: true }

]
const { toggle, mode, isDark } = useDarkLightMode()
const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>