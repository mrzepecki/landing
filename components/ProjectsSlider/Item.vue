<template>
  <div class="item">
    <img :src=imgSource :alt=imgSource />
  </div>
</template>

<script>
export default {
  name: 'NuxtProjectsItem',
  props: {
    imgSource: String
  }
}
</script>

<style lang="scss">
.item{
  width: 100%;
  aspect-ratio: 1/1;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(50px);
  border-radius: 12px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  img{
    max-height: 240px;
    max-width: 240px;
    object-fit: contain;
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
      width: 180px;
      height: 180px;
    }
  }
}
</style>
