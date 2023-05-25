<template>
  <h1 class="heading">{{ heading }}</h1>
</template>

<script>
export default {
  name: 'NuxtHeading',
  props: {
    heading: String
  }

}
</script>

<style lang="scss">
.heading{
  font-size: 28px;
  line-height: 1.2;
  background: linear-gradient(272.97deg, #B88CEE 1.2%, #E48062 93.72%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 46px;
  }
}
</style>
