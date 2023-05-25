<template>
  <div class="about">
    <p class="about__paragraph">
      Oferujemy kompleksową obsługę, niemniej jednak każdy członek zespołu ma jasno określone zadania i cele, w obrębie których nieustannie się kształci. Dzięki temu jesteśmy w stanie sprostać wielu wyzwaniom i oczekiwaniom naszych klientów.
    </p>
    <div class="about__person">
      <img src="/images/semantig_ceo.jpg" alt="" class="about__person-image"/>
      <div class="about__person-title">
        Michał Rzepecki <span>CEO & CTO</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtAbout',
}
</script>

<style lang="scss">
.about{
  &__paragraph{
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 10px;
  }
  &__person{
    display: flex;
    justify-content: end;
    align-items: center;
    grid-gap: 10px;

    &-image{
      width: 30px;
      height: 30px;
    }

    &-title{
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      background: linear-gradient(272.97deg, #B88CEE 1.2%, #E48062 93.72%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      span{
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        display: block;
      }
    }
  }
}
</style>
