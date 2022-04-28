<template>
  <users-settings-layout>
    <div>
      <form-row-title
        title="Basic Information"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="Photo">
          <upload-avatar/>
        </form-row>

        <form-row title="Name">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Email">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Birth Date">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Gender">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Nationality">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Marital status">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Hobbies">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="SSN">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="NIN">
          <formulate-input class="max-w-xs"/>
        </form-row>



      </form-row-section>


    </div>

    <div>
      <form-row-title
        title="Address Information"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="Street">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="City">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="State">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Post Code">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Country">
          <formulate-input class="max-w-md"/>
        </form-row>

      </form-row-section>


    </div>

    <div>
      <form-row-title
        title="Contact Information"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="Work phone">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Mobile phone">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Home phone">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Work email">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Home email">
          <formulate-input class="max-w-md"/>
        </form-row>
      </form-row-section>


    </div>

    <div>
      <form-row-title
        title="Social Information"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="LinkedIn">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Twitter">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Facebook">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Pinterest">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Instagram">
          <formulate-input class="max-w-md"/>
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
