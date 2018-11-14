<template>
    <div id="calendar">
        <div id="calendar_header">
            <i class="fas fa-chevron-left"></i>
            <h1>{{ month }}</h1>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="content"></div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: "App",
    data: () => {
        return {
            month: moment().format('MMMM')
        }
    }
}
</script>

