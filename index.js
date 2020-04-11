import Vue from 'vue';
import Spotlight from 'vue-spotlight';
new Vue({
    el : '#app', 
    data() {
        return {
            open : false,
            action : (elem) => {
                this.closeWidget();
                alert(elem.symbol);
            },
            renderer : (item, fieldName) => 
            `<img class="hit-result-image" src="https://picsum.photos/22"/><span>${item.symbol} - ${item.price}</span></li>`,
            dataProvider: (term) => fetch(
                    "/real-time-price.json"
                ).then(
                    r => r.json()
                )
        }
    },
    methods : {
        openWidget() {
            this.open = true
        },
        closeWidget() {
            this.open = false
        }
    },
    components: {
        Spotlight
    }
})
