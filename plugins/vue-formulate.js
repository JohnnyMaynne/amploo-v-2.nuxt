import Vue from "vue"
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate, {
  useInputDecorators: false,
  classes: {
    label: (context, classes) => {
      switch (context.type) {
        case 'radio':
          return ['block text-sm font-medium text-gray-700']
        case 'checkbox':
          return ['block text-sm font-medium text-gray-700']
        default:
          return ['block text-sm font-medium text-gray-700 mb-1']
      }
    },
    input: (context, classes) => {
      if(context.type === 'checkbox') return ['focus:ring-primary-500 text-primary-600 border-gray-300 rounded mr-2']

      if(context.type === 'radio') return ['focus:ring-primary-500 text-primary-600 border-gray-300 rounded-full mr-2']

      if(context.hasErrors) {
        return ['block w-full border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md']
      } else {
        return ['focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded border-gray-300']
      }
    },
    outer: (context, classes) => {
      return ['relative']
    },
    help: (context, classes) => {
      return ['mt-1 text-xs text-gray-500']
    },
    error: (context, classes) => {
      return ['mt-0.5 text-xs text-red-500 font-medium']
    },
    wrapper : (context, classes) => {
      switch (context.type) {
        case 'radio':
          return ['flex items-center mb-2']
        case 'checkbox':
          return ['flex items-center mb-2']
      }
    },
  },
})
