<template>
  <p>
    <b-container>
      <b-progress
        :max="todolist.length"
        :value="toDoFinish"
        variant="info"
        :showValue="true"
        animated
      />
      <b-input-group class="mt-3 mb-4">
        <b-form-input v-model="addTodoText" />
        <b-input-group-append>
          <b-button variant="info" @click="addToDo">Add</b-button>
        </b-input-group-append>
      </b-input-group>
      <b-row>
        <me-card
          v-for="(item, idex) in todolist"
          :text="item.text"
          :key="idex"
          :finish="item.finish"
          @changeFinish="item.finish = $event"
        />
      </b-row>
    </b-container>
  </p>
</template>

<script>
import meCard from "../components/todo/Card.vue";

export default {
  components: {
    meCard
  },
  data() {
    return {
      todolist: [],
      addTodoText: ""
    };
  },
  computed: {
    toDoFinish() {
      let amount = 0;
      let toDoFinished = this.todolist.filter(x => x.finish == true);
      if (toDoFinished.length > 0) {
        amount = toDoFinished.length;
      }
      return amount;
    }
  },
  methods: {
    addToDo() {
      this.todolist.push({
        text: this.addTodoText,
        finish: false,
        variant: "danger"
      });
      this.addTodoText = "";
    }
  }
};
</script>

<style></style>
