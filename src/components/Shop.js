import React from 'react'
import { useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../state/index'
export default function Shop() {
  const dispatch = useDispatch();
  const action = bindActionCreators(ActionCreators,dispatch)

  return (
      <div>
        <h2>Buy Now </h2>
        <button className="btn btn-danger"onClick={()=>{action.withdrawMoney(100)}}>-</button>

        {/* <button className="btn btn-danger"onClick={()=>{dispatch(ActionCreators.withdrawMoney(100))}}>-</button> */}
        <span className='mx-3'>Add to cart</span>
      {/* <button className="btn btn-primary"onClick={()=>{dispatch(ActionCreators.depositeMoney(100))}}>+</button> */}

      <button className="btn btn-primary"onClick={()=>{action.depositeMoney(100)}}>+</button>
    </div>
  )
}
