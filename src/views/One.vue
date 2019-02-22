<template>
  <section>
    <b-container>
      <b-row class="shadow-lg p-3 mb-5 bg-white rounded">
        <b-col md="6">
          <p>Player</p>
          <b-progress
            :max="max"
            :value="valuePlayer"
            :variant="colorBarPlayer"
            show-progress
            animated
          ></b-progress>
        </b-col>
        <b-col md="6">
          <p>Monstro</p>
          <b-progress
            :max="max"
            :value="valueMonster"
            :variant="colorBarMonster"
            show-progress
            animated
          ></b-progress>
        </b-col>
      </b-row>
      <b-row class="shadow-lg p-3 mb-5 bg-white rounded">
        <b-col md="12">
          <b-button-group>
            <b-button variant="danger" >Ataque</b-button>
            <b-button variant="warning" >Ataque Especial</b-button>
            <b-button variant="success" >Curar</b-button>
            <b-button>Desistir</b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <b-row class="shadow-lg p-3 mb-5 bg-white rounded">
        <b-col md="12">
          <b-alert variant="success" show>Success Alert</b-alert>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      max: 100,
      valuePlayer: 100,
      valueMonster: 100,
      colorBarPlayer: "success",
      colorBarMonster: "success"
    };
  }
};
</script>

<style></style>
