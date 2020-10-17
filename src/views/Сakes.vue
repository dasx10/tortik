<template>
  <main>
    <h1>Торты</h1>
    <article>
      <h2>Наша продукция</h2>
      <section>
        <div class="card" v-for="(cace,i) in caces" :key="i" >
          <div class="card__content">
            <h3>{{cace}}</h3>
            <img :src="`img/card ${i+1}.png`" alt="" srcset=""/>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>
<script>
export default {
  data:()=>({
    caces: [
      "1",
      "2",
      "33",
      "44",
      "55",
      "66",
    ]
  })
}
</script>