import AllComponent from './components/AllComponent.js'; // ChildComponent dosyasını içe aktarın
const app = Vue.createApp({
   template: AllComponent.template,
   components: AllComponent.components,
    data(){
     return {

      };
    },
    methods:{
    },
    computed:{  
    },
    watch:{
    },
})

app.mount('#app')
console.log(AllComponent||'yok',/*components*/)
