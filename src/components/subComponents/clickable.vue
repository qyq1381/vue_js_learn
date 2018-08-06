<template>


    <button v-on:click="onClick">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <span :class="icon"></span><slot>{{onClick}}</slot>
    </button>
</template>
<script>
    export default {
        name: 'clickable',
        props: {
            icon: String,
        },
        methods: {
            onClick: function () {
                this.$emit('click')
            }
        }
    }
</script>