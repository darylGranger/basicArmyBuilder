Vue.config.devtools = true;

var app = new Vue ({
    el: "#app",
    data: {
        caster: null,
        beasts: [],
        units: [],
        solo: null,
        casterOptions: ['Calandra', 'Madrak', 'Jarl'],
        beastOptions: ['Mauler', 'Bomber', 'Night Troll'],
        unitOptions: ['Champions', 'Warders', 'Pyg Burrowers'],
        soloOptions: ['Braylen', 'Fell Caller Champion', 'Sleepy-Time Story Troll']
    },
    methods: {
        pickCaster: function(caster) {
            this.caster = caster;
        },
        pickBeast: function(beast) {
           this.beasts.push(beast);
           
           if (this.beasts.length > 3) {
               this.beasts.splice(0, 1);
           }
        },
        pickUnit: function(unit) {
            this.units.push(unit);

            if (this.units.length > 3) {
                this.units.splice(0, 1);
            }
        },
        pickSolo: function(solo) {
            this.solo = solo;
        },
        resetArmy: function() {
            this.caster = null;
            this.beasts = [];
            this.units = [];
            this.solo = null;
        }
    }
})

