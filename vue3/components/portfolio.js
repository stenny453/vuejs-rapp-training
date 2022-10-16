export default {
    data() {
        return {
            cms: [
                "wordpress",
                "prestashop",
            ]
        }
    },
    computed: {
        isExpert() {
            return this.cms.length > 1 ? "Expert" : "Begineer"
        }
    },
    template: `<div>I am an {{ isExpert }}</div>`
}