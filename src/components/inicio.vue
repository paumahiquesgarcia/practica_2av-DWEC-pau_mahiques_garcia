<!-- App.vue -->
<template>
    <div>
      <h1>Practica 2ºav DWEC - Pau Mahiques Garcia</h1>
    </div>
  
    <router-view />
  </template>
  
  <script>
  export default {
    name: "HomeTasques",
  };
  </script>
  
  <style scoped>
  h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 300px;
  }
</style>
  