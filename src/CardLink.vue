<template>
    <card-component :attrs="$attrs" :tag="$attrs.to ? 'router-link' : 'a'" link>
        <slot />
    </card-component>
</template>

<script>
import CardComponent from './CardComponent';

export default {
    components: {
        CardComponent
    }
};
</script>