import type { Directive } from "vue";

const reverse: Directive = {
    beforeMount(el) {
        el.innerText = el.innerText.split('').reverse().join('');
    }
}

export default reverse;