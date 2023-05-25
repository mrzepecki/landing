<template>
  <div class="grid">
    <div class="grid__left-content">
      <Logo />
      <ProjectsSlider :projects=projects />
    </div>
    <div class="grid__right-content">
      <Heading heading="Chcesz zwiększyć zasięg swojego biznesu i zyskać nowych klientów?" />
      <Paragraph text="Wypełnij poniższy formularz! Zaprojektujemy dla Ciebie unikalną stronę, którą będziesz mógł samodzielnie zarządzać." />
      <About />
      <Form></Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Tworzymy strony, które przyiągają klientów – SEMANTIG',
    }
  },
  data() {
    return {
      // TODO: Przyszłościowo podpiąć API i z niego dane
      // TODO: Dodać dane w taki sposób dla headingu i paragrafu
      projects: [
        '/images/semantig_estrodieta_desktop.png',
        '/images/semantig_bukowa-ostoja_tablet.png',
        '/images/semantig_bukowa-ostoja_mobile.png',
        '/images/semantig_estrodieta_desktop.png',
        '/images/semantig_bukowa-ostoja_tablet.png',
        '/images/semantig_bukowa-ostoja_mobile.png',
        '/images/semantig_estrodieta_desktop.png',
        '/images/semantig_bukowa-ostoja_tablet.png',
        '/images/semantig_bukowa-ostoja_mobile.png'
      ]
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  position: relative;
  box-sizing: border-box;


  @media (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  &__left-content {
    background: linear-gradient(171.24deg, #E1EED4 3.13%, #C6F1E6 28.73%, #C5CDE8 55.38%, #C8ADE9 78.89%, #FBF3BB 103.45%);
    position: relative;
    box-sizing: border-box;


    @media (min-width: 768px) {
      position: sticky;
      top: 0;
      left: 0;
    }

  }

  &__right-content {
    position: relative;
    padding: 100px 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    box-sizing: border-box;

    @media(max-width: 1799px) {
      padding: 100px 8vw;
    }

    @media(max-width: 1399px) {
      padding: 100px 6vw;
    }

    @media(max-width: 767px) {
      padding: 30px;
    }
  }
}
</style>
