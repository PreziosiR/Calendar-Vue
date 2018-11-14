<template>
    <div id="calendar">
        <div id="calendar_header">
            <i @click="previousMonth" class="fas fa-chevron-left"></i>
            <h1>{{ month.format('MMMM') }}</h1>
            <i @click="nextMonth" class="fas fa-chevron-right"></i>
        </div>
        <div class="content"></div>
    </div>
</template>

<script>
import moment from 'moment'

moment.locale('fr')

export default {
    name: "App",
    data: () => {
        return {
            month: moment()
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

