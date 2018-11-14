<template>
    <div id="calendar">
        <div id="calendar_header">
            <i @click="previousMonth" class="fas fa-chevron-left"></i>
            <h1>{{ month.format('MMMM') }}</h1>
            <i @click="nextMonth" class="fas fa-chevron-right"></i>
        </div>
        <div class="weekdays">
           <div v-for="day in days">
               {{ day }}
           </div>
        </div>
        <div class="content">
            <div class="days blank">
        
            </div>
            <div class="days blank">
                
            </div>
            <div class="days">
                <p>3</p>
            </div>
            <div class="days">
                3
            </div>
            <div class="days">
                3
            </div>
            <div class="days">
                3
            </div>
            <div class="days">
                3
            </div>
            <div class="days">
                3
            </div>
            <div class="days">
                3
            </div>
            <div class="days">
                3
            </div>
            
        </div>
    </div>
</template>

<script>
import moment from 'moment'

moment.locale('fr')

export default {
    name: "App",
    data: () => {
        return {
            month: moment(),
            days: [
                "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"
            ]
        }
    },
    methods: {
        previousMonth() {
            this.month = moment(this.month).subtract(1, "months")

        },

        nextMonth() {
            this.month = moment(this.month).add(1, "months")
        }
    }
}
</script>

