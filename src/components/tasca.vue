<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Asignatura</th>
          <th>Fecha limite</th>
          <th>Entregada</th>
          <th>Descripcio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ tasca.id }}</td>
          <td>{{ tasca.asignatura }}</td>
          <td>{{ tasca.deadline }}</td>
          <td>{{ tasca.entregada ? "Sí" : "No" }}</td>
          <td>{{ tasca.descripcio }}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-secondary" @click="cerrarTarea">Cerrar Tarea</button>
  </div>
</template>
  
<script>
export default {
  name: "Tasca-only",
  props: {
    tascaId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      msg: "Tasca",
      id: 1,
      tasca: {
        id: 1,
        asignatura: "",
        deadline: "",
        entregada: false,
        descripcio: "",
      },
    };
  },
  methods: {
    async getTasca() {
      try {
        const response = await fetch(
          `http://localhost:3000/tasques/${this.tascaId}`
        );
        this.tasca = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    cerrarTarea() {
      // Limpiar la tarea actual y cerrarla
      this.tasca = {};
      // Emitir un evento para indicar que se cerró la tarea
      this.$emit('cerrar-tarea');
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getTasca();
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.container {
  margin: 20px;
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