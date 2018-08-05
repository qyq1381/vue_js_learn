<template><div>
    <nav id="nav_bar">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <a id="nav-logo" href='#'>
            <img src="https://dgsecmg9973qw.cloudfront.net/junkmycar/Images/JMCLogo.png" alt="page Logo" />
        </a>
        <button v-on:click="ChangeStatus">Dropdown</button>
        <button href='#'>About us</button>
        <button href='#'>FAQ</button>
        <div style="flex:1;">
        </div>
        <a id="" class="nav-icon bg-blue" href="#">
            <span class="fa fa-comments fa-lg" style="vertical-align: -.1rem"></span>
            <span>Chat</span>
        </a>
        <a class="nav-icon bg-blue" href="Tel:1-234-567-8910" rel="nofollow">
            <span class="fa fa-phone fa-lg" style="vertical-align: -.1rem"></span>
            <span>(234)-567-8910</span>
        </a>
        <br />

    </nav>
    <DropDown></DropDown></div>

</template>
<script>

    import DropDown from '../components/DropDown.vue'

    export default {
        name: 'NavBar',
        components: {
            DropDown
        }
    }
</script>
<style scoped>
    #nav_bar {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        white-space: nowrap;
        border-width: 0 0 4px 0;
        border-style: solid;
        border-color: #0c68b8;
        background-color: #0c79b8;
    }

        #nav_bar * {
            font-size: 1.25rem;
        }

    .nav-icon {
        color: white;
        padding: 1.45rem 1rem 1.7rem 1rem;
    }

    a.nav-icon:hover {
        text-decoration: none;
    }


    #nav-logo img {
        vertical-align: middle;
        height: 4rem;
    }

    button {
        color: white;
        background-color: #0c79b8;
        padding: 1.85rem 1rem 1.9rem 1rem;
        border: hidden;
        font-size: 1.25rem;
    }

    #NavComment {
        font-size: 1.33333333em;
        line-height: .75em;
    }
</style>