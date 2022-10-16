export default {
    data() {
        return {
            fb : "https://facebook.com"
        }
    },
    template: `<div :class="$attrs.class" :style="{ display: ['-webkit-box', '-ms-flexbox','flex'] }">Link {{ fb }}</div>`
}