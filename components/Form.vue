<template>
  <div>
    <div id="hubspotForm" v-once></div>
  </div>
</template>

<script>
export default {
  name: 'NuxtForm',
  mounted() {
    const script = document.createElement("script");
    script.src="//js-eu1.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "27224182",
          region: "eu1",
          formId: "f81c17c8-2002-42bb-a7af-99cd6484cb69",
          target: "#hubspotForm"
        })
      }
    })
  }
}
</script>

<style>

</style>
