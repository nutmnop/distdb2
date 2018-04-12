<template>
    <div id="navbar">
        <nav class="navbar navbarcus">
            <div class="container-fluid">
                <div class="navbar header" v-bind:style="{ paddingTop: 13 +'px'}">
                    <a style="color:white">เข้าสู่ระบบ <span class="glyphicon glyphicon-user"></span></a>
                    <a style="padding-left:15px;color:white">สมัครสมาชิก <span class="glyphicon glyphicon-lock"></span></a>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'navbar'
    }
</script>
<style>
    .navbarcus{
        background-color: rgb(129, 98, 99);
        height: 25px;
    }
    .acus{
        padding-top:10px,
        
    }
</style>
