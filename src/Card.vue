<template>
    <card-component card>
        <template v-if="$slots['img-top']">
            <card-img-top>
                <slot name="img-top" />
            </card-img-top>
        </template>
        <template v-if="$slots['header']">
            <card-header>
                <slot name="header" />
            </card-header>
        </template>
        <template v-if="$slots.body">
            <card-body>
                <slot name="body" />
            </card-body>
        </template>
        <slot />
        <template v-if="$slots['footer']">
            <card-footer>
                <slot name="footer" />
            </card-footer>
        </template>
        <template v-if="$slots['img-bottom']">
            <card-img-bottom>
                <slot name="img-bottom" />
            </card-img-bottom>
        </template>
    </card-component>
</template>

<script>
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardComponent from './CardComponent';
import CardImgBottom from './CardImgBottom';
import CardImgTop from './CardImgTop';

export default {
    name: 'Card',
    components: {
        CardBody,
        CardFooter,
        CardHeader,
        CardImgBottom,
        CardImgTop,
        CardComponent
    }
};
</script>