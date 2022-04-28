<template>
  <div class="relative">
    <div v-on:mouseover="hover($event)" v-on:mouseout="hoverOut">
      <slot/>
    </div>

    <div v-if="showPopup" v-on:mouseover="hoverInfo" v-on:mouseout="hoverOutInfo">
      <div class="bg-white origin-top-left absolute left-0 top-0 z-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="flex-1 flex flex-col p-4 text-center">
          <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
          <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ user.first_name }} {{ user.last_name }}</h3>
          <dl class="mt-1 space-y-1 flex-grow flex flex-col justify-between">
            <dd class="text-gray-500 text-xs">{{ user.position }}</dd>
            <dd class="text-gray-500 text-xs">{{ user.email }}</dd>
            <dd class="text-gray-500 text-xs">{{ user.phone }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },

  data() {
    return {
      showPopup: false,
      timer: '',
      isInInfo: false,
      position: {
        x: 0,
        y: 0
      }
    }
  },

  methods: {
    hover(event) {
      let vm = this;
      vm.atPos(event)
      this.timer = setTimeout(function () {
        vm.showPopover();
      }, 600);
    },

    hoverOut() {
      let vm = this;
      clearTimeout(vm.timer);
      this.timer = setTimeout(function () {
        if (!vm.isInInfo) {
          vm.closePopover();
        }
      }, 0);
    },

    hoverInfo() {
      this.isInInfo = true;
    },

    hoverOutInfo() {
      this.isInInfo = false;
      this.hoverOut();
    },

    showPopover() {
      this.showPopup = true;
    },

    closePopover() {
      this.showPopup = false;
    },

    atPos(event) {
      this.position.x = event.clientX - 10 + 'px'
      this.position.y = event.clientY - 20 + 'px'
    }
  }
}
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease,transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
