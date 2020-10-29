export const USER_SELECTED = 'USER_SELECTED'
export function selectUser(user){
    console.log('----------------')
    console.log('selected : ',user);
    console.log('----------------')

    return {
        type : USER_SELECTED,
        payload : user
    }
}