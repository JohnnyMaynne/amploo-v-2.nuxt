<template>
  <users-settings-layout>
    <div>
      <form-row-title
        title="Permissions Information"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="Account role">
          <div class="sm:col-span-2">
            <div class="max-w-lg space-y-4">
              <div class="relative flex items-start">
                <div class="flex items-center h-5">
                  <input id="comments" name="comments" type="radio" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded-full">
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class=" text-gray-700">Comments</label>
                  <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
              <div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="candidates" name="candidates" type="radio" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded-full">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class=" text-gray-700">Candidates</label>
                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="offers" name="offers" type="radio" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded-full">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class=" text-gray-700">Offers</label>
                    <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form-row>

        <form-row title="Custom permission">
          <div class="sm:col-span-2">
            <div class="max-w-lg space-y-4">
              <div class="relative flex items-start">
                <div class="flex items-center h-5">
                  <input id="comments" name="comments" type="checkbox" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded">
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class=" text-gray-700">Comments</label>
                  <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
              <div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="candidates" name="candidates" type="checkbox" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class=" text-gray-700">Candidates</label>
                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="offers" name="offers" type="checkbox" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class=" text-gray-700">Offers</label>
                    <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
              <div class="relative flex items-start">
                <div class="flex items-center h-5">
                  <input id="comments" name="comments" type="checkbox" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded">
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class=" text-gray-700">Comments</label>
                  <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
              <div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="candidates" name="candidates" type="checkbox" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class=" text-gray-700">Candidates</label>
                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="offers" name="offers" type="checkbox" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class=" text-gray-700">Offers</label>
                    <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form-row>
      </form-row-section>
    </div>
    <form-row-action/>
  </users-settings-layout>
</template>

<script>
export default {
}
</script>
