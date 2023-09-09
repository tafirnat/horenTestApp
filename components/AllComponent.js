// 💡 import edilirken "KomponentAdi" biciminde import edilmeli
import HeaderComponent from './HeadComponent.js'
import ChildComponent from './ChildComponent.js'
// import DarkComponent from './DarkMode.js'

const AllComponent = {
    /* ana component: tüm childcomponentler burada render edilir
    💡child-componentler `ComponentAdi` seklinde import edilmeli  `component-adi`seklinde alttaki templatte bildirilmeli*/
    template: `<div>
                    <h1>App Component</h1>
                    <p>Bu bir üst bileşendir.</p>
                    <header-component></header-component>
                    <child-component></child-component>
                    <dark-component></dark-component>
                </div>`,
    /*💡child componentler => tüm alt componentler components:{} nesnesi altinda bulunur.
        her child component mutlaka camelCase ad ile kendi templati bulunmali
        childComponent:{template: ` ... `}
    */
    components:{
        ChildComponent,
        HeaderComponent,
        // DarkComponent,
    }
        
}
export  default  AllComponent;
