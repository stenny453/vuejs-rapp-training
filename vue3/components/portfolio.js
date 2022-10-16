export default {
    data() {
        return {
            cms: [
                "wordpress",
                "prestashop",
            ],
            firstname: "Stenny",
            lastname: "Gabriel"    
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
        }
    },
    template: `<div>{{ fullname = 'Lady Gaga' }} - I am an {{ isExpert }}</div>`
}