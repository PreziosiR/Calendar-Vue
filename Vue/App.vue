<template>
    <div id="calendar">
        <div id="calendar_header">
            <i @click="previousMonth" class="fas fa-chevron-left"></i>
            <h1>{{ firstLetterUpperCase(month.format('MMMM')) }} {{ month.format('Y') }}</h1>
            <i @click="nextMonth" class="fas fa-chevron-right"></i>
        </div>
        <div class="weekdays">
           <div v-for="day in days" @click="functionShowModal">
               {{ day }}
           </div>
        </div>
        <div class="content">
            <div v-for="blank in numberOfBlank" class="blank">
                <p></p>
            </div>
            <div v-for="day in daysInMonth" class="days">
                <p>{{ day }}</p>    
            </div>
            <modal v-if="showModal" @close="showModal = false">
            <!--
            you can use custom content here to overwrite
            default content
            -->
            <h3 slot="header">custom header</h3>
            </modal>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import modal from './modal.vue'
moment.locale('fr')


export default {
    name: "App",

    components: {
        modal
    },

    data: () => {
        return {
            month: moment(),
            days: [
                "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"
            ],
            //renvoie le nombre de jour du mois courant
            daysInMonth: moment().daysInMonth(),
            //calcul le nombre d'espace vide à ajouté en fonction du premier jour du mois
            numberOfBlank: moment().startOf('month').day() - 1,
            showModal: false
        }
    },
    methods: {
        previousMonth() {
            this.month = moment(this.month).subtract(1, "months")
            this.daysInMonth = moment(this.month).daysInMonth()
            this.numberOfBlank = moment(this.month).startOf('month').day() - 1
        },

        nextMonth() {
            this.month = moment(this.month).add(1, "months")
            this.daysInMonth = moment(this.month).daysInMonth()
            this.numberOfBlank = moment(this.month).startOf('month').day() - 1
        },

        firstLetterUpperCase(str) {
            return str[0].toUpperCase() + str.substring(1)
        },

        functionShowModal() {
            console.log('test')
            this.showModal = true;
        }
    }
}
</script>

