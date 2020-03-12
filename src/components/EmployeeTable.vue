<template>
<div id="employee-table">
	<table>
	<thead>
		<tr>
			<th>Employee name</th>
			<th>Employee email</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="employee in employees" :key="employee.id">
			<td>{{employee.name}}</td>
			<td>{{employee.email}}</td>
			<td @click="removeEmployee(employee.name)">Remove</td>
		</tr>
	</tbody>
	</table>
</div>
</template>

<script>
export default {
    name: 'employee-table',
    computed: {
		employees(){
			return this.$store.state.employees
		}
	},
	methods: {
		removeEmployee(employeeName){
			this.$store.dispatch('removeEmployee', employeeName)
		}
	}
}
</script>

<style scoped>

</style>