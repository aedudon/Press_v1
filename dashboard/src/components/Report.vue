<template>
	<div>
		<div class="flex flex-row justify-between pb-3">
			<h1 class="text-2xl font-bold">{{ title }}</h1>
			<!-- generic report filters -->
			<div class="flex gap-2 px-2">
				<div v-for="filter in filters" :key="filter.name">
					<p class="text-sm text-gray-600">{{ filter.label }}</p>
					<FormControl
						:type="filter.type"
						:options="filter.options"
						v-model="filter.value"
					/>
				</div>
				<slot name="actions"> </slot>
			</div>
		</div>
		<div class="divide-y">
			<div class="flex items-center gap-2 py-2 text-base text-gray-600">
				<!-- generic report columns -->
				<div v-for="column in columns" :key="column.name" :class="column.class">
					{{ column.label }}
				</div>
			</div>
			<div
				class="flex items-center gap-2 py-2 text-base"
				v-for="(row, i) in data"
				:key="i"
			>
				<!-- loop through data -->
				<div v-for="column in row" :key="column.name" :class="column['class']">
					{{ column['value'] }}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Report',
	props: {
		filters: {
			type: Array,
			default: () => []
		},
		columns: {
			type: Array,
			required: true
		},
		data: {
			type: Array,
			default: () => []
		},
		title: {
			type: String,
			required: true
		}
	}
};
</script>
