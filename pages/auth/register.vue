<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <formulate-form @submit="handler" class="space-y-6">
          <formulate-input v-model="form.name" validation="required" label="Name" type="text" placeholder="Enter your name"/>
          <formulate-input v-model="form.email" validation="required" label="Email" type="email" placeholder="Enter your email"/>
          <formulate-input v-model="form.password" validation="required" label="Password" type="password" placeholder="Enter your password"/>
          <app-button type="submit" class="w-full justify-center">Sing up</app-button>
        </formulate-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout:  'empty',

  auth: 'guest',


  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
      }
    }
  },

  methods: {
    async handler() {
      try {
        await this.$axios.get('/sanctum/csrf-cookie')
        await this.$axios.$post('/auth/register',this.form)
        await this.$auth.loginWith('laravelSanctum', {
          data: this.form
        })
      } catch (e) {}
    }
  }
}
</script>
