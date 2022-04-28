<template>
  <users-settings-layout>
    <div>
      <form-row-title
        title="Payroll Basic and Tax Info"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="Employee Tax Number">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Basic Pay">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Bank Account Number">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Bank Account Name">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Bank Name">
          <formulate-input class="max-w-md"/>
        </form-row>
      </form-row-section>
    </div>

    <div>
      <form-row-title
        title="Fixed Allowance Payments"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="Pay item">
          <formulate-input class="max-w-md"/>
        </form-row>

        <form-row title="Pay item payment">
          <formulate-input class="max-w-xs"/>
        </form-row>
      </form-row-section>
    </div>

    <div>
      <form-row-title
        title="Fixed Deductions Payments"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="Deduction item">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Deduction payment">
          <formulate-input class="max-w-xs"/>
        </form-row>
      </form-row-section>
    </div>

    <div>
      <form-row-title
        title="Tax info"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="Tax">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Tax amount">
          <formulate-input class="max-w-xs"/>
        </form-row>
      </form-row-section>
    </div>

    <div>
      <form-row-title
        title="Payment Detail"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="Payment method">
          <formulate-input class="max-w-xs"/>
        </form-row>
      </form-row-section>
    </div>

    <div>
      <form-row-title
        title="Payroll Basic and Tax Info"
        subtitle="This information will be displayed publicly so be careful what you share."/>

      <form-row-section>
        <form-row title="Employee Tax Number">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Basic Pay">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Bank Account Number">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Bank Account Name">
          <formulate-input class="max-w-xs"/>
        </form-row>

        <form-row title="Bank Name">
          <formulate-input class="max-w-xs"/>
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
