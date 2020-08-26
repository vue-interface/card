<template>
    <card-component body>
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