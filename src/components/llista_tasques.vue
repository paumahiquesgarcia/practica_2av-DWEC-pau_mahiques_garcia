<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Asignatura</th>
          <th>Fecha limite</th>
          <th>Entregada?</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tasca in tasques" :key="tasca.asignatura">
          <td>{{ tasca.asignatura }}</td>
          <td>{{ tasca.deadline }}</td>
          <td>{{ tasca.entregada ? "Sí" : "No" }}</td>
          <td>
            <button
              class="btn btn-info me-2"
              @click="visualitzaTasca(tasca.id)"
            >
              Visualitza
            </button>
            <button class="btn btn-warning me-2" @click="editaTasca(tasca.id)">
              Edita
            </button>
            <button class="btn btn-danger" @click="deleteTasca(tasca.id)">
              🗑️ Borrar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <tasca
      v-if="mostrarTasca"
      :tasca-id="tascaSeleccionada.id"
      @cerrar-tarea="
        mostrarTasca = false;
        tascaSeleccionada = null;
      "
    />
  </div>
</template>
  
<script>
import Tasca from "./tasca.vue";

export default {
  name: "tasques-array",
  components: {
    Tasca,
  },

  data() {
    return {
      msg: "Llista de tasques",
      tasques: Array,
      mostrarTasca: false,
      tascaSeleccionada: null,
    };
  },
  methods: {
    async getReceptes() {
      try {
        const response = await fetch("http://localhost:3000/tasques");
        this.tasques = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTasca(identificador) {
      try {
        await fetch(`http://localhost:3000/tasques/${identificador}`, {
          method: "DELETE",
        });
        await this.getReceptes();
      } catch (error) {
        console.error(error);
      }
    },
    visualitzaTasca(id) {
      const tascaSeleccionada = this.tasques.find((tasca) => tasca.id === id);
      if (tascaSeleccionada) {
        this.mostrarTasca = true;
        this.tascaSeleccionada = tascaSeleccionada;
      }
    },
    editaTasca(identificador) {
      this.$router.push({ name: "EditaTasca", params: { id: identificador } });
    },
  },
  mounted() {
    this.getReceptes();
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.container {
  margin: 20px auto; 
  display: table; 
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>

  