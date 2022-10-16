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
            }
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
    </div>`
}