export const depositeMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'desposit',
            payload:amount
        })
    }
}




export const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}