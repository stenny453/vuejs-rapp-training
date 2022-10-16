export default {
    data() {
        return {
            name: "Gabriel",
            job: "Fullstack"
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
    template: `<div>CIN : {{ name }} - {{ job }} </div>`
}