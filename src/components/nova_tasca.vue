<template>
    <div class="container">
      <h1>Nova tasca</h1>
      <form @submit.prevent="afegirTasca">
        <div class="mb-3">
          <label for="asignatura" class="form-label">Asignatura:</label>
          <input v-model="novaTasca.asignatura" type="text" class="form-control" id="asignatura" required>
        </div>
        <div class="mb-3">
          <label for="deadline" class="form-label">Fecha límite:</label>
          <input v-model="novaTasca.deadline" type="date" class="form-control" id="deadline" required>
        </div>
        <div class="mb-3">
          <label for="entregada" class="form-label">¿Entregada?</label>
          <select v-model="novaTasca.entregada" class="form-control" id="entregada" required>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="descripcio" class="form-label">Descripción:</label>
          <textarea v-model="novaTasca.descripcio" class="form-control" id="descripcio" rows="4"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Afegir Tasca</button>
      </form>
    </div>
  </template>

<script>
export default {
    name: 'NovaTasca',
    data() {
        return {
            novaTasca: {
                id: 99999,
                asignatura: "",
                deadline: "",
                entregada: false,
                descripcio: "",
            },
            tascaCreadaCorrecte : false,

        };
    },
    methods: {
        afegirTasca() {
            this.novaTasca.id = Math.floor(Math.random() * 1000000);
            this.novaTasca.id = String(this.novaTasca.id)
            console.log("Element afegit:", this.novaTasca);
            this.postTasca(this.novaTasca);
            this.tascaCreadaCorrecte = true;
            // També pots reiniciar les dades del formulari si és necessari
            this.novaTasca = {
                id: 999999,
                asignatura: "",
                deadline: "",
                entregada: "",
                descripcio: "",
            };
        },
        
        async postTasca(tasca) {
            try {
                const response = await fetch('http://localhost:3000/tasques', {
                    method: 'POST',
                    body: JSON.stringify(tasca),
                    headers: { 'Content-type': 'application/json; charset=UTF-8' },
                });

                const tascaCreada = await response.json();
                console.log(tascaCreada);
            } catch (error) {
                console.error(error);
            }
        },
    },

    mounted() {

    }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container {
    margin: 20px auto;
    max-width: 600px;
  }
  
  .form-control {
    width: 100%;
    margin-bottom: 10px;
  }
  </style>