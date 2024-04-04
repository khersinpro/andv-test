<script setup lang="ts">
import EvaluationItem from './EvaluationItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import NumOneIcon from './icons/IconOne.vue'
import NumTwoIcon from './icons/IconTwo.vue'
import axios from 'axios'
import { ref } from 'vue'
const userName = ref('')
let activeColor = ref('green')

function getUser() {
  axios.get('https://randomuser.me/api/')
  .then(function (response) {
    const name = response.data.results[1].name;
    userName.value = name.title + ' ' + 
                     name.first + ' ' + 
                     name.last;
  })
  .catch(function (error) {
    activeColor = ref('red')
    userName.value = error
  })
}

const ageOfRegistered = '';

/**
 * Javascript exercise 
 */

/**
 * Creates a typewriter effect on the given DOM element with the given text.
 * 
 * @param domElement - The DOM element to create the typewriter effect on.
 * @param text - The text to type on the DOM element. Default is 'default'.
 * @param delay - The delay in milliseconds between each character when typing and deleting. Default is 200.
 * @param deleteDelay - The delay in milliseconds before starting to delete after the text is fully typed. Default is 2000.
 */
 function typeWriterEffect(domElement: HTMLElement | null, text: string = 'default', delay: number = 200, deleteDelay: number = 2000) {
  if (!domElement || domElement instanceof HTMLElement === false) {
    return;
  }

  let index = 0;
  let isDeleting = false;

  setInterval(() => {
    if (!isDeleting && index < text.length) {
      domElement.textContent += text.charAt(index);
      index++;
    } else if (index > 0 && domElement.textContent) {
      isDeleting = true;
      domElement.textContent = domElement.textContent.slice(0, index - 1);
      index--;
    } else {
      isDeleting = false;
    }
  }, delay);

  setTimeout(() => {
    isDeleting = true;
  }, deleteDelay);
}

// Start the typewriter effect on the animated JavaScript span when the document is fully loaded with only javascript.
document.addEventListener('DOMContentLoaded', () => {
  const animatedJavascriptSpan = document.getElementById('animated-javascript');
  typeWriterEffect(animatedJavascriptSpan, 'Javascript');
})
</script>

<template>
  <EvaluationItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Présentation</template>

    Vous trouverez ci-dessous une liste de tâches de difficultés croissantes, afin d'évaluer votre maitrise de : 
    <!-- Dynamic javascript -->
    <br>
    <span id="animated-javascript"></span> 

    <!-- Dynamic HTML -->
    <br>
    <span>HTML</span> 
    <br>

    <!-- Dynamic CSS -->
    <span>CSS</span> 
    <br>

    <!-- Dynamic Vuejs -->
    <span>VueJS</span>
    <br/>    
    <br/>    

  </EvaluationItem>

  <EvaluationItem>
    <template #icon >
      <NumOneIcon class="icon"/>
    </template>
    <template #heading>Chargement dynamique</template>

    Votre première mission sera de modifier dynamiquement les 4 mots soulignés de la présentation ci-dessus, en utilisant le langage ou la technologie dont elle porte le nom.<br/>
    <i>Exemple: Le mot 'CSS' devra avoir un attribut, comme sa couleur, modifié en CSS. 'VueJS' sera chargé depuis une variable reactive. Etc.</i><br/>
    <b>Faites preuve d'imagination et montrez que vous maitrisez chaque sujet.</b>

  </EvaluationItem>

  <EvaluationItem>
    <template #icon>
      <NumTwoIcon class="icon"/>
    </template>
    <template #heading>Débogage Javascript</template>
    Ici, il y a un bogue qui empêche d'afficher le nom d'une personne. Vous devez comprendre le résultat de la requête et corriger ce bogue. <br/>
    En bonus, vous devrez afficher l'email et l'image au format vignette de la personne.<br/>
    <button variant="primary" v-on:click="getUser">Obtenir un nom</button>
    <br/>
    <p :style="{color: activeColor}"> {{ userName }} </p>
  </EvaluationItem>

  <EvaluationItem>
    <template #icon>
      <NumTwoIcon class="icon"/>
    </template>
    <template #heading>Actualiser le résultat</template>
    D'abord, le numéro de cette étape devrait être un 3, donc à vous de corriger ça !<br/>
    Ensuite, vous devrez créer une propriété Computed, qui calcule et actualise l'age qu'avait la personne ci-dessus, lors de son inscription.<br/>
    <div v-if="ageOfRegistered != ''" class="age">
      Son age à l'inscription était {{ ageOfRegistered }} ans.
    </div>
    <br/>
  </EvaluationItem>

</template>

<style scoped>
.icon{
  width: 24px;
  height: 24px;
}
.age{
  color: blue;
}
</style>