<template>
  <section>
    <b-container>
      <b-button-group>
        <b-button variant="danger" @click="component = 'Vermelho'"
          >Carregar Componente Vermelho</b-button
        >
        <b-button variant="success" @click="component = 'Verde'"
          >Carregar Componente Verde</b-button
        >
        <b-button variant="info" @click="component = 'Azul'"
          >Carregar Componente Azul</b-button
        >
      </b-button-group>
      <div class="mt-3">
        <component :is="component">
          <p>
            Conteúdo do Componente
            <strong>{{ component }}</strong>
          </p>
        </component>
      </div>
    </b-container>
  </section>
</template>

<script>
import Vermelho from "@/components/two/Vermelho.vue";
import Verde from "@/components/two/Verde.vue";
import Azul from "@/components/two/Azul.vue";
export default {
  data() {
    return {
      component: "Verde"
    };
  },
  components: {
    Vermelho,
    Verde,
    Azul
  }
};
</script>

<style></style>
