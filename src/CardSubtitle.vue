<template>
    <card-component tag="h4" :match="/^h./" subtitle>
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