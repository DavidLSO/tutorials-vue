<template>
  <div>
    <b-card
      :bg-variant="variant"
      text-variant="white"
      class="mb-2 mr-2"
      @click="changeToDoState()"
      style="min-width: 150px;"
    >
      <b-card-text>{{ text }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
const danger = "danger";
const success = "success";

export default {
  props: {
    finish: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    drawerFinish: {
      get() {
        return this.finish;
      },
      set(val) {
        this.$emit("changeFinish", val);
      }
    },
    variant() {
      let result = danger;
      if (this.finish) {
        result = success;
      }
      return result;
    }
  },
  methods: {
    changeToDoState() {
      this.drawerFinish = !this.finish;
    }
  }
};
</script>

<style></style>
