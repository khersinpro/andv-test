<template>
    <button @click="handleClick" class="message" id="vue" >Clique ici</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
        let vueword = document.getElementById('vue')
        vueword.textContent='VueJs'
        vueword.style.color = 'black'
        vueword.style.backgroundColor = 'aqua';
    },
  },
};
</script>

<style>
.message{
    color: yellow;
    background-color: coral;
    font-weight: bold;
}
</style>