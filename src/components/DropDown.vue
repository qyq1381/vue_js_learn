<template>
    <div id="Dropmenu">

        <div class="col">
            <div id="col1">
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
            <div id="col2">
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
                </div >
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
                <div id="col4">
                    <ul id="additionNote">
                        <li>
                            Don't see your city? No problem,
                            <a href='/how-it-works '>get your offer</a>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</template>
<script>
    export default {
        name: 'DropDown'
    }
</script>
<style scoped>
    col1, col2, col3{
        float: left;
        width: 33%;
    }

    #additionNote {
        position: absolute;
    }
</style>