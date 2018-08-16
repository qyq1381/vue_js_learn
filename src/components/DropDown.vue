<template>
    <div id="dropdown">
        <div id="list_top">
            <div>
                <ul>
                    <li>
                        a title
                    </li>
                    <li>
                        <a href="#">a city</a>
                    </li>
                    <li>
                        <a href="#">a city</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        a title
                    </li>
                    <li>
                        <a href="#">a city</a>
                    </li>
                    <li>
                        <a href="#">a city</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        a title
                    </li>
                    <li>
                        <a href="#">a city</a>
                    </li>
                    <li>
                        <a href="#">a city</a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="list_bottom">
            <p>
                Don't see your city? No problem,
                <a href='/how-it-works '>get your offer</a>

            </p>
        </div>
    </div>
</template>
<script>
    import clickable from './subComponents/clickable.vue'
    export default {
        name: 'DropDown',
        component: {
            clickable,
        }

    }
</script>
<style scoped>
    #dropdown, #list_top,#list_bottom {
        display: flex;
        background-color:lightgray;
        font-size:1.5rem;
        
    }

    #dropdown {
        flex-direction: column;
    }

        #dropdown * {
            flex-grow: 1;
        }

    #list_top {
        flex-direction: row;
        justify-content: center;
    }
    ul {
        list-style-type:none;
    }
</style>