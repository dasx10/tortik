<template>
  <main>
    <h1>Торты</h1>
    <article>
      <h2>Наша продукция</h2>
      <section>
        <div class="card" v-for="i in 10" :key="i">
          <div class="card__content">
            <h3>Название</h3>
            <img src="/Cake.svg" alt="" srcset="">
          </div>
        </div>
      </section>
    </article>
  </main>
</template>