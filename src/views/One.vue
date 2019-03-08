<template>
  <section>
    <b-container>
      <b-row class="shadow-lg p-3 mb-5 bg-white rounded">
        <b-col md="6">
          <p>Player</p>
          <b-progress
            :max="max"
            :value="lifePlayer"
            :variant="colorBarPlayer"
            show-progress
            animated
          ></b-progress>
        </b-col>
        <b-col md="6">
          <p>Monstro</p>
          <b-progress
            :max="max"
            :value="lifeMonster"
            :variant="colorBarMonster"
            show-progress
            animated
          ></b-progress>
        </b-col>
      </b-row>
      <b-row class="shadow-lg p-3 mb-5 bg-white rounded">
        <b-col md="12">
          <b-button-group>
            <b-button variant="danger" @click="attack">Ataque</b-button>
            <b-button variant="warning" @click="specialAttack"
              >Ataque Especial</b-button
            >
            <b-button variant="success" @click="cure">Curar</b-button>
            <b-button @click="reload">Desistir</b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <b-row class="shadow-lg p-3 mb-5 bg-white rounded">
        <b-col md="12">
          <b-alert
            v-for="(log, idx) in logs"
            :key="idx"
            :variant="log.variant"
            show
            >{{ log.msg }}</b-alert
          >
        </b-col>
      </b-row>
      <b-modal v-model="modalShow">O jogador {{ msgResultado }} !</b-modal>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      max: 100,
      lifePlayer: 100,
      lifeMonster: 100,
      colorBarPlayer: "success",
      colorBarMonster: "success",
      msgResultado: "",
      modalShow: false,
      logs: []
    };
  },
  watch: {
    lifePlayer(newLife, oldLife) {
      this.colorBarPlayer = this.setColorBar(newLife);
      if (newLife > 100) {
        this.lifePlayer = 100;
      } else if (newLife < 0) {
        this.lifePlayer = 0;
      }
      if (newLife < oldLife) {
        let value = oldLife - newLife;
        let msg = "O jogador tomou " + value + " de dano !";
        this.addLog("danger", msg);
      } else if (newLife > oldLife) {
        let value = newLife - oldLife;
        let msg = "O jogador curou " + value + " de vida !";
        this.addLog("success", msg);
      }
      if (this.lifeMonster == 0) {
        this.msgResultado = "ganho";
        this.modalShow = true;
      } else if (this.lifePlayer == 0) {
        this.msgResultado = "perdeu";
        this.modalShow = true;
      }
    },
    lifeMonster(newLife, oldLife) {
      this.colorBarMonster = this.setColorBar(newLife);
      if (newLife < 0) {
        this.lifeMonster = 0;
      }
      if (newLife < oldLife) {
        let value = oldLife - newLife;
        let msg = "O monstro tomou " + value + " de dano !";
        this.addLog("danger", msg);
      }
    }
  },
  methods: {
    addLog(variant, msg) {
      this.logs.push({ variant: variant, msg: msg });
    },

    setColorBar(life) {
      let color = "success";
      if (life < 35) {
        color = "danger";
      }
      return color;
    },

    attack() {
      let dmgMonster = Math.floor(Math.random() * 10);
      let dmgPlayer = Math.floor(Math.random() * 10);

      this.lifeMonster -= dmgMonster;
      this.lifePlayer -= dmgPlayer;
    },

    specialAttack() {
      let dmgMonster = Math.floor(Math.random() * 20);
      let dmgPlayer = Math.floor(Math.random() * 5);

      this.lifeMonster -= dmgMonster;
      this.lifePlayer -= dmgPlayer;
    },

    cure() {
      let curePlayer = Math.floor(Math.random() * 15);

      this.lifePlayer += curePlayer;
    },

    reload() {
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  }
};
</script>

<style></style>
