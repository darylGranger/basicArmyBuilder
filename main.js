Vue.config.devtools = true;

Vue.component('army-list', {
    props: {
        army: {
            type: Object,
            required: true
        }
    },
    template: `
        <div>
            <h2>Your Army</h2>
            <h3>Caster</h3>
                <ul>
                    <li>{{ army.caster }}</li>
                </ul>
            <h3>Beasts</h3>
            <ul>
                <li v-for="beast in army.beasts">{{ beast }}</li>
            </ul>
            <h3>Units</h3>
            <ul>
                <li v-for="unit in army.units">{{ unit }}</li>
            </ul>
            <h3>Solo</h3>
            <ul>
                <li>{{ army.solo }}</li>
            </ul>
            
        </div>
    `
})



var app = new Vue ({
    el: "#app",
    data: {
        army: {
        caster: null,
        beasts: [null, null, null],
        units: [null, null, null],
        solo: null,
        },
        casterOptions: ['Calandra', 'Madrak', 'Jarl'],
        beastOptions: ['Mauler', 'Bomber', 'Night Troll'],
        unitOptions: ['Champions', 'Warders', 'Pyg Burrowers'],
        soloOptions: ['Braylen', 'Fell Caller Champion', 'Sleepy-Time Story Troll']
    },
    methods: {
        pickCaster: function(caster) {
            this.army.caster = caster;
        },
        pickBeast: function(beast) {
           this.army.beasts.push(beast);

           if (this.army.beasts.length > 3) {
               this.army.beasts.splice(0, 1);
           }
        },
        pickUnit: function(unit) {
            this.army.units.push(unit);

            if (this.army.units.length > 3) {
                this.army.units.splice(0, 1);
            }
        },
        pickSolo: function(solo) {
            this.army.solo = solo;
        },
        resetArmy: function() {
            this.army.caster = null;
            this.army.beasts = [null,null,null];
            this.army.units = [null,null,null];
            this.army.solo = null;
        }
    }
})


