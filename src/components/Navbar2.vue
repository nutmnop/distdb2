<template>
    <div v-bind:style="{ marginTop: -21 +'px'}">
    <nav class="navbar navbarcus2">
        <router-link to="/">
        <a class="navbar-brand">
            LOGO GOES HERE
        </a>
        </router-link>
        <ul class="nav navbar-nav navbar-right" style="padding-right:20px;font-color:black">
            <li><a>Home</a></li>
            <li class="dropdown">
                <a class="dropdown-toggle" id="id1" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Product <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu" aria-labelledby="id1">
                    <li><router-link to="/Top"><a style="color:black">Top</a></router-link></li>
                    <li><a>Bottom</a></li>
                    <li><a>Dress</a></li>
                </ul>
            </li>
            <li><a>Contact Us</a></li>
            
        </ul>
    </nav>
    </div>
</template>
<script>
    export default {
        name: 'navbar2'
    }
</script>

<style>
    .navbarcus2{
        background-color: white;
        height: 30px
    }
</style>