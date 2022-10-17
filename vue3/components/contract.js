export default {
    data() {
        return {
            contracts: [],
            toggle: '',
            age: 0
        }
    },
    template: 
    `<div>
        <div>Contract</div>
        <div> {{contracts}} </div>
        <div>

            <input type="checkbox" value="CDD" v-model="contracts" true-value="CDD-ok" false-value="CDD-ko"/>
            <label>CDD</label>
            <input type="checkbox" value="CDI" v-model="contracts"/>
            <label>CDI</label>
        </div>

        <input
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no" />
        <span> {{toggle}} </span>

        <div>
            Age : <input v-model.number="age" />
        </div>
    </div>`
}