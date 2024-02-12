<!-- App.vue -->
<template>
  <div id="app" class="menu">
    <h1>Menu</h1>
    <nav>
      <ul>
        <li><router-link class="link" to="/">Inici</router-link></li>
        <li>
          <router-link class="link" to="/tasques"
            >Llista de Tasques</router-link
          >
        </li>
        <li>
          <router-link class="link" to="/novatasca">Nova Tasca</router-link>
        </li>
      </ul>
    </nav>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Arial", sans-serif;
  text-align: center;
  
}

.menu {
  background-color: #333;
  color: white;
}
nav {
  padding: 10px;
}

#app ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  margin: 0 15px;
}

.link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.link:hover {
  color: #61dafb;
}
</style>
