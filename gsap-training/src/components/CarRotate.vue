<template>
    <div id="contain-image">
        <div>
            <h3>{{ msg }}</h3>
            <img src="./../assets/images/4542166_W177_perf_OW_28.jpg" alt="var-illustration" class="car">
        </div>
        <div class="car-list">
            <img src="./../assets/images/4542166_W177_perf_OW_28.jpg" alt="var-illustration" class="sw">
            <img src="./../assets/images/4542166_W177_perf_OW_28.jpg" alt="var-illustration" class="sw">
            <img src="./../assets/images/4542166_W177_perf_OW_28.jpg" alt="var-illustration" class="sw">
        </div>

        <div class="car-list">
            <img src="./../assets/images/4542166_W177_perf_OW_28.jpg" alt="var-illustration" class="sg">
            <img src="./../assets/images/4542166_W177_perf_OW_28.jpg" alt="var-illustration" class="sg">
            <img src="./../assets/images/4542166_W177_perf_OW_28.jpg" alt="var-illustration" class="sg">
        </div>
        <br>
        <div style="height: 100vh;background-color: green;"></div>
        <div style="text-align: left;">
            <img src="./../assets/images/4542166_W177_perf_OW_28.jpg" alt="var-illustration" class="fr">
        </div>
        <div style="height: 100vh;background-color: cyan;"></div>
        <br>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: 'CarRotate',
    data() {
        return {
            msg: "Hello training !"
        }
    },
    methods: {
        initGsap() {
            // gsap.to(".car", 
            // { 
            //     duration: 3, x: 500, backgroundColor: "#117f", 
            //     border: "4px solid black", borderRadius: "5px",
            //     ease: "elastic" 
            // });
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline();

            gsap.set(".car", { transformOrigin: "50% 50%" });

            gsap.to(".car", 
            { 
                duration: 3,
                rotate: 360,
                onUpdate() {
                    console.log("Updated");
                },
                onStart() {
                    console.log("Started");
                },
                onComplete() {
                    console.log("Completed");
                }
            });

            tl.to(".sw", 
            { 
                duration: 2, opacity: 0, scale: 0.3, 
                ease: "back", stagger: 1 
            })

            tl.from(".sg", 
            { 
                duration: 2, opacity: 0, 
                stagger: 1, x: "random(-100, 100)",
                // delay: 2
            })

            gsap.to(".fr", {
                scrollTrigger: {
                    trigger: ".fr",
                    // toggleActions: "restart pause reverse none",
                    scrub: true,
                    // pin: true,
                    // pinSpacing: false,
                    start: "top center",
                    end: "+=500px"
                    // scrub: 2, // scrub for 2 seconds
                    // markers: true
                },
                duration: 1,
                opacity: 1,
                scale: 1.3,
                // ease: "elastic",
                x: 800
                // rotate: 360
            })
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

    .car-list img {
        height: 100px;
    }

    .fr {
        /* max-width: 100%; */
        width: 400px;
    }
</style>