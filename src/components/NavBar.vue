<template>
    <div id="header">
        <div id="nav_coontainer">
            <nav id="navbar">
                <div id="nav_left">
                    <clickable>
                        <img :src="'https://dgsecmg9973qw.cloudfront.net/junkmycar/Images/JMCLogo.png'">
                    </clickable>
                    <clickable v-on:click='show=!show'>DropDown</clickable>
                    <clickable>About us</clickable>
                    <clickable>&nbsp; FAQ &nbsp;&nbsp; </clickable>
                </div>
                <div id="nav_right">
                    <clickable icon="fa fa-comments fa-lg">Chat</clickable>
                    <clickable icon="fa fa-phone fa-lg">7737158959</clickable>
                </div>
            </nav>
        </div>
        <div id="dropdown_container">
            <transition name="slide-fade">
                <DropDown v-if="show"></DropDown>
            </transition>
        </div>
        <div>
            1<br />2<br />3<br />4<br />1<br />2<br />3<br />4<br />1<br />2<br />3<br />4<br />
        </div>
    </div>


</template>
<script>
    import clickable from './subComponents/clickable.vue'
    import DropDown from '../components/DropDown.vue'
    export default {
        name: 'NavBar',
        components: {
            DropDown,
            clickable,
        },
        data: function () {
            return {
                show: false,
            }
        }
    }
</script>
<style scoped>
    #nav_coontainer {
        z-index: 6666;
        position: sticky;
        width: 100%;
    }
    #dropdown_container {
        position: fixed;
        width: 100%;
        z-index: 666;
    }
    #navbar, #nav_left, #nav_right {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #navbar {
        justify-content: space-between;
        border-width: 0 0 4px 0;
        border-style: solid;
        border-color: #0c68b8;
        background-color: #0c79b8;
    }

    button {
        color: white;
        background-color: #0c79b8;
        padding: 1.85rem 1rem 1.9rem 1rem;
        border: hidden;
        font-size: 1.25rem;
    }

    .slide-fade-enter-active {
        transition: all .8s;
    }

    .slide-fade-leave-active {
        transition: all .8s;
    }

    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(-100% );
    }
</style>