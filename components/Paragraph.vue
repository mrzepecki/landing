<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: 'NuxtParagraph',
  props: {
    text: String,
    margin: Number
  }
}
</script>

<style global lang="scss">
  p {
    font-size: 16px;
    line-height: 1.2;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 31px;
    }
  }
</style>
