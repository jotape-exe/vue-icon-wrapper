<script setup lang="ts">
import VueLogo from "./components/icons/VueLogo.vue";
import AppIcon from "./components/AppIcon.vue";
</script>

<template>
  <header class="header">
    <VueLogo class="logo" />
    <h1 class="title">Icon Wrapper</h1>
  </header>

  <main class="main">
    <section class="icon-section">
      <h3 class="section-title">Lucide Icons</h3>
      <div class="icon-grid">
        <AppIcon class="app-icon" name="apple" size="48" />
        <AppIcon class="app-icon" name="double-check" size="48" />
        <AppIcon class="app-icon" name="like" size="48" />
      </div>
    </section>

    <section class="icon-section">
      <h3 class="section-title">Ph Icons</h3>
      <div class="icon-grid">
        <AppIcon class="app-icon" name="android" size="48" />
        <AppIcon class="app-icon" name="js" size="48" />
        <AppIcon class="app-icon" name="vue" size="48" />
      </div>
    </section>
  </main>

  <article>
    <!--
    Codigo do componente aqui
    -->
  </article>
</template>

<style scoped>

.header {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.logo {
  width: 80px;
  height: auto;
}

.title {
  font-size: 2rem;
  color: var(--color-heading);
  text-align: center;
}

.main {
  margin: 2rem auto;
  max-width: 800px;
  padding: 1rem;
}

.icon-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-heading);
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
  gap: .3rem;
  justify-items: center;
  align-items: center;
}

.app-icon {
  padding: .3rem;
  border-radius: .5rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(104, 104, 104, 0.281);
    cursor: pointer;
  }
}

</style>
