<template>
    <div class="contain">
        <div class="container-fluid">
            <div class="col-md-6">
                <div id="carousel">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">

                <div class="item active">
                    <img src="../image/banner1.jpg" style="width:100%">
                    <div class="carousel-caption">
                    <h3>Chania</h3>
                    <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                    </div>
                </div>

                <div class="item">
                    <img src="../image/banner1.jpg" style="width:100%">
                    <div class="carousel-caption">
                    <h3>Chania</h3>
                    <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                    </div>
                </div>
                
                <div class="item">
                    <img src="../image/banner1.jpg" style="width:100%" >
                    <div class="carousel-caption">
                    <h3>Flowers</h3>
                    <p>Beautiful flowers in Kolymbari, Crete.</p>
                    </div>
                </div>

                <div class="item">
                    <img src="../image/banner1.jpg" style="width:100%">
                    <div class="carousel-caption">
                    <h3>Flowers</h3>
                    <p>Beautiful flowers in Kolymbari, Crete.</p>
                    </div>
                </div>
                </div>
            </div>
            
            </div>
            </div>

            <div class="col-md-6">
                    <h2>{{ Name }} &nbsp;<small>{{ Price }} Baht</small></h2>
                    <br/>
                    <h4>รายละเอียด</h4>
                    <p> {{ Descpt }} </p>
                    
                    <div class="col-md-4">
                    <ul>
                        <li>Color</li>
                        <li>Type</li>
                        <li>Code</li>
                        <li>Size</li>
                    </ul>
                    </div>
                    <div class="col-md-8">
                        <ul>
                        <li>{{ Color }}</li>
                        <li>{{ Type }}</li>
                        <li>{{ Code }}</li>
                        <li>
                        <!--
                        <div class=col-md-3>-->
                        <Select class="form-control">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>

                            </Select>
                        <!--
                        </div>-->
                        </li>
                        </ul>
                    </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        data(){
            return{
            Name:'asdasdad',
            Price :'sfsdf',
            Descpt: 'asdlknaskdjbaskjdbg kjasdbfkjasbdfkja jskdbfkajsdbfasfb jsadbfaskjdbf',
            Color: 'color',
            Type: 'Type',
            Code: '001',
            }
        }
    }
</script>

<style>
    
</style>