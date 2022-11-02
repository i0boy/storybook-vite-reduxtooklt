<template>
  <div :class="classes">
    <label
      :for="'checked' + task.id"
      :aria-label="'archiveTask-' + task.id"
      class="checkbox"
    >
      <input
        type="checkbox"
        :checked="isChecked"
        disabled
        :name="'checked' + task.id"
        :id="'archiveTask-' + task.id"
      />
      <span class="checkbox-custom" @click="archiveTask" />
    </label>
    <label :for="'title-' + task.id" :aria-label="task.title" class="title">
      <input
        type="text"
        readonly
        :value="task.title"
        :id="'title-' + task.id"
        name="title"
        placeholder="Input title"
      />
    </label>
    <button
      v-if="!isChecked"
      class="pin-button"
      @click="pinTask"
      :id="'pinTask-' + task.id"
      :aria-label="'pinTask-' + task.id"
    >
      <span class="icon-star" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { defineProps } from "vue";
import { TaskItem } from "./types";

const { task } = defineProps({
  task: {
    type: Object,
    required: true,
    validator: (value: TaskItem) => TaskItem.safeParse(value).success,
  },
});
const classes = computed(() => ({
  "list-item TASK_INBOX": task.state === "TASK_INBOX",
  "list-item TASK_PINNED": task.state === "TASK_PINNED",
  "list-item TASK_ARCHIVED": task.state === "TASK_ARCHIVED",
}));
const isChecked = computed(() => task.state === "TASK_ARCHIVED");
const emit = defineEmits(["archive-task", "pin-task"]);
const archiveTask = () => {
  emit("archive-task", task.id);
};
/**
 * Event handler for pinning tasks
 */
const pinTask = () => {
  emit("pin-task", task.id);
};
</script>
