<template>
  <div id="app">
    <b-nav pills class="nav text-center" id="nav">
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/one">Project One</b-nav-item>
      <b-nav-item to="todo">Project Todo</b-nav-item>
      <b-nav-item-dropdown
        id="nav7_ddown"
        text="Exercicios"
        extra-toggle-classes="nav-link-custom"
        right
      >
        <b-dropdown-item to="/e-one">One</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
