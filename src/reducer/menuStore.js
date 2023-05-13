import menu from '../menuList.js';

export const menuReduer = (state = menu, action) => {
    console.log('action.type', action);
    switch (action.type) {
        case 'EDIT': 
            return [ ...action.payload]
        default: 
            return [ ...state]
    }
}