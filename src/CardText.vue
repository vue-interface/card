<template>
    <card-component tag="p" text>
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