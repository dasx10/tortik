<template>
  <main>
    <h1>Начинки</h1>
    <article>
      <h2>Что мы предлогаем</h2>
      <section>
        <div class="card" v-for="i in 10" :key="i">
          <div class="card__content-rotate">
            <div class="card__front">
              <h3>Название</h3>
              <img src="/Cherry.svg" alt="" srcset="">
            </div>
            <div class="card__back">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores fugiat quia enim nulla labore magni in velit cupiditate quae ipsum eius consectetur ab, repudiandae ipsa delectus maxime ea et.
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>