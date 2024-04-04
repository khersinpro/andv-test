<script setup lang="ts">
import EvaluationItem from './EvaluationItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import NumOneIcon from './icons/IconOne.vue'
import NumTwoIcon from './icons/IconTwo.vue'
import axios from 'axios'
import { ref } from 'vue'
const userName = ref('')
const userEmail = ref('')
const userPicture = ref('')
let activeColor = ref('green')

function getUser() {
  axios.get('https://randomuser.me/api/')
  .then(function (response) {
    const { email, picture: { thumbnail }, name } = response.data.results[0];

      userName.value    = `${name.title} ${name.first} ${name.last}`;
      userEmail.value   = email;
      userPicture.value = thumbnail;
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

    <!-- Dynamic HTML with only html tags -->
    <br>
    <span>
      <svg width="40px" height="15px">
        <text x="0" y="15">
          <animate attributeName="fill" values="blue;white;red" dur="3s" repeatCount="indefinite"/>
          HTML
        </text>
      </svg>
    </span>
    <br>

    <!-- Dynamic CSS -->
    <span class="floating-text">CSS</span> 
    <br>

    <!-- Dynamic Vuejs -->
    <span v-reverse>VueJS</span>
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
    <!-- User card -->
    <div v-if="userName" class="user-card">
      <img v-if="userPicture" :src="userPicture" alt="User thumbnail" class="user-thumbnail">
      <div class="user-info">
        <h2 :style="{color: activeColor}">{{ userName }}</h2>
        <p v-if="userEmail">Email: {{ userEmail }}</p>
      </div>
    </div>
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

/* Start of exercise */
/* Floating text animation */
@keyframes floating {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(8px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}
.floating-text {
  display: inline-block;
  animation: floating 2s linear infinite; 
}

/* User card */
.user-card {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}
.user-thumbnail {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.user-info h2 {
  margin: 0;
  font-size: 1.2em;
}
.user-info p {
  margin: 0;
  color: #666;
}
</style>