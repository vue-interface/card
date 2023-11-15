<script setup lang="ts">
withDefaults(defineProps<{
    size?: 'sm' | 'md' | 'lg'
}>(), {
    size: 'md'
});
</script>

<template>
    <div
        class="flex flex-col shadow-sm"
        :class="{
            'rounded': size === 'sm' || size === 'md',
            'rounded-lg': size === 'lg'
        }">
        <div
            v-if="$slots.header"
            class="[&:has(>img)]:overflow-hidden"
            :class="{
                'rounded-t': size === 'sm' || size === 'md',
                'rounded-t-lg': size === 'lg',
            }">
            <slot name="header" />
        </div>
        <slot name="body">
            <div
                class="flex-1 border border-stone-200"
                :class="{
                    'p-3': size === 'sm',
                    'p-4': size === 'md',
                    'p-6': size === 'lg',
                    'rounded-t': !$slots.header && (size === 'sm' || size === 'md'),
                    'rounded-t-lg': !$slots.header && size === 'lg',
                    'rounded-b': !$slots.footer && (size === 'sm' || size === 'md'),
                    'rounded-b-lg': !$slots.footer && size === 'lg',
                }">
                <slot />
            </div>
        </slot>
        <div
            v-if="$slots.footer"
            class="flex items-center justify-end gap-4 border border-t-0 border-stone-200 px-6 py-4 text-sm"
            :class="{
                'rounded-b': size === 'sm' || size === 'md',
                'rounded-b-lg': size === 'lg',
            }">
            <slot name="footer" />
        </div>
    </div>
</template>