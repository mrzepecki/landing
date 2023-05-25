<template>
      <div class="content">
        <Logo />
        <Heading heading="Dziękujemy za skorzystanie z naszego formularza." />
        <Paragraph text="Zweryfikujemy przesłaną wiadomość i odpowiemy tak szybko jak to możliwe." />
      </div>
</template>

<script>
export default {
  name: 'ThankYouPage',

  head() {
    return {
      title: 'Wiadomość wysłana!',
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0 15px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  *{
      text-align: center;
  }
}
</style>
