export default {
    data() {
        return {
            name: "Gabriel",
            job: "Fullstack",
            active: true,
            error: true,
            awarded: {
                first: true,
                'not-only': false
            },
            experience: 6
        }
    },
    methods: {
        callMe() {
            console.log("This is me")
        }
    },
    mounted() {
        this.callMe()
    },
    template: `
    <div>
        <div :class="awarded">Awarded</div>
        <div :class="{ active: active, 'text-error' : error }">
            CIN : {{ name }} - {{ job }} 
        </div>
        <div v-if="experience > 5">Senior</div>
        <div v-else-if="experience > 3">Confirmé</div>
        <div v-else-if="experience > 1">Junior</div>
        <div v-else>Beginner</div>
        <div v-show="experience > 5">Good !</div>
    </div>`
}