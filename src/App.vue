<script>
import { RouterView } from 'vue-router'
import Top from './components/top.vue'
import Foot from './components/footer.vue'
export default {
  components: {
    RouterView,
    Top,
    Foot
  },
  data() {
    return {
      toast: {
        msg: '',
        type: '',
        timer: null
      }
    }
  },
  methods: {
    _installWallet() {
      window.open(
        'https://chromewebstore.google.com/detail/bittap/kbnhooopfndecmegdekkoiijflnmllff'
      )
    },
    _tips(msg, type = 'info', delay = 2000) {
      console.log('root._tips', { msg, type, delay })
      if (this.toast.timer) {
        clearTimeout(this.toast.timer)
      }
      this.toast.msg = msg
      this.toast.type = type
      this.toast.timer = setTimeout(() => {
        this.toast.timer = null
        this.toast.msg = ''
        this.toast.type = 'info'
      }, delay)
    }
  }
}
</script>

<template>
  <header>
    <Top :home="true"></Top>
  </header>
  <RouterView />
  <Foot :home="true"></Foot>
  <div
    role="alert"
    :class="[
      'alert',
      'alert-' + toast.type,
      toast.msg && toast.msg.length > 0 ? 'alert-show' : 'alert-hide'
    ]"
  >
    <svg
      v-if="toast.type === 'warning'"
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <svg
      v-if="toast.type === '' || toast.type === 'info'"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="stroke-white shrink-0 w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <svg
      v-if="toast.type === 'success'"
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <svg
      v-if="toast.type === 'error'"
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>{{ toast.msg }}</span>
  </div>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
}
.alert {
  transition: all 0.3s;
  position: fixed;
  left: 46vw;
  max-width: 80vw;
  width: 200px;
  transition: all 0.3s;
  @apply text-white fill-white border-0;
  background: linear-gradient(135deg, #0579ff 0%, #7f02ff 100%);
  &-show {
    height: auto;
    transition: all 0.3s;
    top: 20px;
  }
  &-hide {
    top: -150px;
    height: 0px;
    width: 0vw;
    transition: all 0.3s;
  }
}
@media (max-width: 1024px) {
  .alert {
    left: 5vw;
    max-width: 90vw;
    width: 90vw;
    transition: all 0.3s;
  }
}
</style>
