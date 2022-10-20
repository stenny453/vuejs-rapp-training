<template>
    <div id="contain-image">
        <h3>{{ msg }}</h3>
        <img src="./../assets/images/4542166_W177_perf_OW_28.jpg" alt="var-illustration" class="car">
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: 'CarRotate',
    data() {
        return {
            msg: "Hello training !"
        }
    },
    methods: {
        initGsap() {
            gsap.to(".car", { duration: 3, x: 500 });
        }
    },  
    mounted() {
        this.initGsap();
    }
}
</script>

<style>
    .car {
        max-width: 100%;
        height: 200px;
    }
</style>