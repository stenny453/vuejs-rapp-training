export default {
    data(){
        return {
            technos : [
                { name: "ReactJs", experience : "3 ans"},
                { name: "Angular", experience : "4 ans"},
                { name: "Wordpress", experience : "2 ans"},
            ],
            scripts: {
                web: "PHP",
                linux: "shell"
            },
            average: [10, 3, 9, 4, 5, 18]
        }
    },
    computed: {
        eventAverage() {
            return this.average.filter((item) => item % 2 === 0)
        },
    },
    methods: {
        sourceCode(link, event) {
            event.preventDefault()
            alert(link)
        },
        noAction() {
            console.log("No action");
        },
        scrolling() {
            console.log("Scrolling");
        }
    },
    template: 
    `<div @scroll.passive="scrolling">
        <div v-for="(techno, index) of technos">
            {{ index + 1 }} - {{ techno.name }}
        </div>
        <div>** --- **</div>
        <div v-for="({name}, index) in technos">
            {{ index + 1 }} - {{ name }}
        </div>
        <div>** --- **</div>
        <ul>
            <li v-for="(script, key) in scripts">
                {{ key }} => {{ script }}
            </li>
        </ul>
        <div>** --- **</div>
        <div v-for="item in eventAverage">
            {{ item }}
        </div>
        <div>** Event handling --- **</div>
        <button @click="sourceCode('github', $event)">
            Source code
        </button>
        <button @click="(event) => sourceCode('github', event)">
            Source code with arrow function
        </button>
        <button @click.stop="noAction">
            No propagation
        </button>
    </div>`
}