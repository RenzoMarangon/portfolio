const types = { 
    showMenu: '[MENU] Show',
    hideMenu: '[MENU] Hide'
}

const navReducer = ( state = {menu:false}, action ) => {
    switch( action.type )
    {
        case types.showMenu:
            return{
                menu:action.payload,
            }
        case types.hideMenu:
            return{
                menu:action.payload,
            }
        default: return state;
    }
}

export default navReducer;