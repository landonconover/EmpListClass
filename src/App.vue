<template>
  <div id="app">
    <employee-form />
    <employee-table style="width: 50%;"/>
    <employee-table style="width: 50%;"/>
  </div>
</template>

<script>
import EmployeeTable from '@/components/EmployeeTable.vue'
import EmployeeForm from '@/components/EmployeeForm.vue'

export default {
  name: 'App',
  components: {
    EmployeeTable,
    EmployeeForm
  },
  data() {
    return {
      
    }
  },
  methods: {
    addEmployee(employee) {
        const lastId =
    this.employees.length > 0
      ? this.employees[this.employees.length - 1].id
      : 0;
    const id = lastId + 1;
    const newEmployee = { ...employee, id };

      this.employees = [...this.employees, newEmployee]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
