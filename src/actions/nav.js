const types = { 
    showMenu: '[MENU] Show',
    hideMenu: '[MENU] Hide'
}

export const showMenu = () => ({
    type:types.showMenu,
    payload:true
    
})

export const hideMenu = () => ({
    type:types.hideMenu,
    payload:false
})