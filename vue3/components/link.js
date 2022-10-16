export default {
    data() {
        return {
            fb : "https://facebook.com"
        }
    },
    template: `<div :class="$attrs.class">Link {{ fb }}</div>`
}