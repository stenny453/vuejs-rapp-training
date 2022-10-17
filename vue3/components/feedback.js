export default {
    data() {
        return {
            feedback: ''
        }
    },
    watch: {
        feedback(newFeedback, oldFeedback) {
            console.log("Updated feedback from ", oldFeedback, " => ", newFeedback);
        }
    },
    template: `<div>
        <label>What is your feeback : (tape END) </label>
        <input type="text" v-model="feedback"/>
    </div>`
}