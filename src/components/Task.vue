<template>
  <div class="list-item">
    <label for="title" :aria-label="props.task.title">
      <input
        type="text"
        readonly
        :value="props.task.title"
        id="title"
        name="title"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { TaskItem } from "./types";

const props = defineProps({
  task: {
    type: Object,
    required: true,
    validator: (value: TaskItem) => TaskItem.safeParse(value).success,
  },
});
</script>
