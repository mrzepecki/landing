<template>
  <div class="projects-slider__grid">
    <div class="projects-slider__outer-col-1">
      <div class="projects-slider__wrapper projects-slider__wrapper--down">
        <ProjectsSliderItem v-for="(image, index) in projects" :key=index :imgSource=image />
      </div>
    </div>
    <div class="projects-slider__outer-col-2">
      <div  class="projects-slider__wrapper projects-slider__wrapper--up">
        <ProjectsSliderItem v-for="(image, index) in projects" :key=index :imgSource=image />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtProjectsSlider',
  props: {
    projects: Array
  }
}
</script>

<style lang="scss">
.projects-slider{
  &__grid{
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
    box-sizing: border-box;
    padding: 120px 0 60px 0;
    width: 100vw;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      height: 100vh;
      grid-gap: 50px;
      padding: 0 50px;
      position: sticky;
      top: 0;
      width: 100%;
    }
  }
  &__outer{
    &-col-1{

    }
    &-col-2{
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }
  &__wrapper{
    transform: translate3d(0, 0, 0);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    grid-gap:  50px;

    @media (min-width: 768px) {
      display: block;
    }

    &--down{
      transform: translate3d(-60%, 0, 0);
      animation: moveDown 160s linear infinite;

      @media (min-width: 768px) {
        transform: translate3d(0, -60%, 0);
      }
    }
    &--up{
      animation: moveUp 100s linear infinite;
    }
  }
}

@keyframes moveDown{
  100% {
      transform: translateY(0);
  }
}

@keyframes moveUp{
  100% {
    transform: translateY(-66.6666%);
  }
}
</style>
