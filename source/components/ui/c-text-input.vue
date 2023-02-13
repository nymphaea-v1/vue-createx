<template>
  <label
    class="text-input"
    :class="[`text-input_${size}`, success ? 'success' : '', error ? 'error' : '']"
  >
    <p
      v-if="label !== ''"
      class="text-input__label"
    >{{ label }}</p>
    <div class="text-input__input-wrapper">
      <input
        v-bind="$attrs"
        type="text"
        class="text-input__input"
        :value="value"
        :placeholder="placeholder"
        @input="emitUpdate"
      >
      <c-icon
        v-if="statusIconName !== null"
        :name="statusIconName"
        class="text-input__icon"
      />
    </div>
    <p class="text-input__status-message">{{ statusMessage }}</p>
  </label>
</template>

<script setup lang="ts">
import CIcon from '~components/ui/c-icon.vue'

import { computed } from 'vue'

interface Props {
  value: string
  size?: 'small' | 'regular' | 'large'
  success?: boolean
  error?: boolean
  iconName?: string
  label?: string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'regular',
  iconName: '',
  label: '',
  placeholder: ''
})

const statusIconName = computed(() => {
  return props.iconName !== '' ? props.iconName : props.success ? 'mark' : props.error ? 'danger' : null
})

const statusMessage = computed(() => {
  return props.success ? 'Looks good!' : props.error ? 'Please provide a valid input.' : null
})

const emits = defineEmits<{ (e: 'update:value', value: string): void }>()

const emitUpdate = ({ currentTarget }: Event) => {
  emits('update:value', (currentTarget as HTMLInputElement).value)
}
</script>

<style scoped lang="scss">
.text-input {
  display: block;

  font-size: var(--text-input-font-size);

  &__label {
    margin-bottom: var(--text-input-label-margin);
  }

  &__input-wrapper {
    position: relative;
  }

  &__input {
    @extend %input-reset;

    width: 100%;
    height: var(--text-input-height);
    padding-right: calc(2 * var(--text-input-padding) + var(--text-input-font-size));
    padding-left: var(--text-input-padding);
    border: 1px solid $gray400;
    border-radius: 4px;

    color: $gray800;

    &:focus {
      border-color: rgba($primary, 0.4);

      box-shadow:
        0 80px 80px -20px rgba($primary, 0.08),
        0 30px 24px -10px rgba($primary, 0.05),
        0 12px 10px -6px rgba($primary, 0.04),
        0 4px 4px -4px rgba($primary, 0.03);
    }

    &::placeholder {
      color: $gray600;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;

    height: calc(var(--text-input-font-size) + 2px);
    padding-right: var(--text-input-padding);

    transform: translate(-100%, -50%);
  }

  &__status-message {
    font-size: calc(var(--text-input-font-size) - 2px);
  }
}

/* text input size: large, regular, small */

.text-input_large {
  --text-input-height: 52px;
  --text-input-padding: 15px;
  --text-input-font-size: 16px;
  --text-input-label-margin: 10px;
}

.text-input_regular {
  --text-input-height: 44px;
  --text-input-padding: 15px;
  --text-input-font-size: 14px;
  --text-input-label-margin: 9px;
}

.text-input_small {
  --text-input-height: 36px;
  --text-input-padding: 12px;
  --text-input-font-size: 12px;
  --text-input-label-margin: 8px;
}

/* text input status: success, error */

.error {
  & .text-input__input {
    border-color: $red;
  }

  & .text-input__status-message,
  & .text-input__icon {
    color: $red;
  }
}

.success {
  & .text-input__input {
    border-color: $green;
  }

  & .text-input__status-message,
  & .text-input__icon {
    color: $green;
  }
}
</style>
