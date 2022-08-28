import { computed, watch } from 'vue'
import { useQuasar } from 'quasar'
const DARK_MODE_KEY = 'DARK_MODE_KEY'

export const useDarkLightMode = () => {
  const $q = useQuasar()

  $q.dark.set(
    $q.localStorage.getItem<boolean>(DARK_MODE_KEY) ??
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const isDark = computed(() => $q.dark.isActive)
  const isLight = computed(() => !$q.dark.isActive)
  const toggle = () => {
    $q.dark.set(!$q.dark.isActive)
  }

  watch(
    () => $q.dark.isActive,
    mode => {
      $q.localStorage.set(DARK_MODE_KEY, mode)
    }
  )

  const mode = computed(() => (isDark.value ? 'dark' : 'light'))
  return { toggle, isDark, isLight, mode }
}
