import { useState } from 'react'
import CartContext from './cart-context'



const CartProvider=(props)=>{

    const[items,updateItems]=useState([])
    const addItem=(item)=>{
        let temp=[...items]
        let indxOfItem=temp.findIndex((i)=>i.id===item.id)
        if(indxOfItem===-1)
        {
            
          temp=[...temp,item]
        }else{
            temp[indxOfItem].quantity=Number(temp[indxOfItem].quantity)+1
            
        }
        updateItems([...temp])
     
       

        

    }
    const removeItemFromCartHandler=()=>{

    }

    const cartContext={
        items: items,
        addItem: addItem,
        removeItem: removeItemFromCartHandler,
    }


    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
        
    

}
export default CartProvider