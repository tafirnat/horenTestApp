//Burada tanimlanan ögeleri globale tasinarak tüm componetler arasinda kullanilabilir olmakta.

const globalItems={
    globalTest:5,
    globalStyles:{
        color:"red",
        fontSize:"24px"
    }
}
Object.keys(globalItems).forEach(key=>{window[key]=globalItems[key]})

