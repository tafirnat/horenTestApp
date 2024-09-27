const ButtonComponent={
    temp:function(costumAttr){
        let {name,bgColor,hoverBg,text,font,py,px,rounded} = {...costumAttr}
        console.log(name,bgColor)
        return `
    <button class="
        ${bgColor || 'bg-blue-500'} 
        hover:${hoverBg||'bg-blue-700'} 
        ${text||'text-white'} 
        ${font||'font-bold'} 
        ${py||'py-2'} 
        ${px||'px-4'}
        ${rounded || 'rounded-md'}">
            ${name || 'Button'}
    </button>
        `
    },
}

// childComponent:{template: ` ... `}

export default ButtonComponent;