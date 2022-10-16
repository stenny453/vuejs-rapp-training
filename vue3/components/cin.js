export default {
    data() {
        return {
            name: "Gabriel",
            job: "Fullstack"
        }
    },
    methods: {
        callMe() {
            alert("This is me")
        }
    },
    mounted() {
        this.callMe()
    },
    template: `<div>CIN : {{ name }} - {{ job }} </div>`
}