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

        <div>****</div>
        <input type="text" :value="comment" @input="(event) => comment = event.target.value"/>
        <div>****</div>
        <div>
            <textarea v-model="comment"></textarea>

            <p>With lazy v-model</p>
            <textarea v-model.lazy="comment"></textarea>
        </div>
        <div>
            <p>v-model trim</p>
            <input v-model.trim="comment" />
        </div>
    </div>
    `
}