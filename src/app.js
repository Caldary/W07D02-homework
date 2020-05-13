import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            currency: [],
            euro: ""
        },
        mounted(){
            this.getCurrency()
        },
        methods: {
            getCurrency: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(data => this.currency = data)
            }
        }
    });
    
});