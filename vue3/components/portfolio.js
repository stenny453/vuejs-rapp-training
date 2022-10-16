export default {
    data() {
        return {
            cms: [
                "wordpress",
                "prestashop",
            ],
            firstname: "Stenny",
            lastname: "Gabriel",
            expert: true
        }
    },
    computed: {
        isExpert() {
            return this.cms.length > 1 ? "Expert" : "Begineer"
        },
        fullname: {
            get() {
                return this.firstname + ' ' + this.lastname
            },

            set(name) {
                [this.firstname, this.lastname] = name.split(' ')
            }
        },
        devClass() {
            return {
                master : this.expert
            }
        }
    },
    template: `<div :class="devClass">{{ fullname = 'Lady Gaga' }} - 
    <span :class="[firstname, lastname]">I am an {{ isExpert }}</span></div>`
}