<template>
    <card-component header>
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