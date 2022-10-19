export default {
    data() {
        return {
            comment: ''
        }
    },
    methods: {
        submit(event) {
            event.preventDefault();
            this.comment = '';
            console.log("Submitted");
        },
        pageDown(event) {
            event.preventDefault();
            console.log("Page down");
        },
        ctrlClick(event) {
            event.preventDefault();
            console.log("Control click");
        }
    },
    template: `
    <div>
        <label>Leave a comment </label>
        <input v-model="comment" type="text" 
        @keyup.enter="submit($event)" 
        @keyup.down="pageDown($event)"/>

        <input :value="comment" type="text" 
        @keyup.enter="(event) => comment = event.target.value"/>

        <div>****</div>
        <label>Press ctrl + click</label>
        <button @click.ctrl="ctrlClick"> Ctrl + click </button>
    </div>
    `
}