<template>
    <div class="card">
        <template v-if="$slots['img-top']">
            <slot name="img-top" />
        </template>
        <template v-if="$slots.header">
            <div class="card-header">
                <slot name="header" />
            </div>
        </template>
        <slot>
            <template v-if="$slots.body">
                <div class="card-body">
                    <slot name="body" />
                </div>
            </template>
        </slot>
        <template v-if="$slots.footer">
            <div class="card-footer">
                <slot name="footer" />
            </div>
        </template>
        <template v-if="$slots['img-bottom']">
            <slot name="img-bottom" />
        </template>
    </div>
</template>