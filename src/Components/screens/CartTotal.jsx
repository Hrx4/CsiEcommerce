import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ItemListState } from '../ItemListProvider';

const CartTotal = () => {
    const {cartList , setCartList} = ItemListState();

   
      const deleteItem = ( des) =>{
        const newItem= cartList.filter(check=>
            check.des!==des
        )
        setCartList(newItem);
        console.log('====================================');
        console.log(`deleted ${des}`);
        console.log('====================================');
      }
      const quanIncrease = (des) =>{
        const updatedItem = cartList.map((item)=>{
            if(item.des===des){
                return {...item,count:item.count+1}
            }
            else return item
        
        })
        setCartList(updatedItem);
        console.log('====================================');
        console.log(`deleted ${des}`);
        console.log('====================================');
      }
      const quanDecrease = (des) =>{
        const updatedItem = cartList.map((item)=>{
            if(item.des===des && item.count>=2){
                return {...item,count:item.count-1}
            }
            else return item
        
        })
        setCartList(updatedItem);
        console.log('====================================');
        console.log(`deleted ${des}`);
        console.log('====================================');
      }


    //   const [cartList, setCartList] = useState(itemsList)

    //   useEffect(() => {
    //     localStorage.setItem('items',JSON.stringify(cartList))
        // localStorage.setItem('items',[JSON.stringify({"item1":"mobile1"}) ])
    // }, [cartList])

var total=0;
   cartList.map((item)=>{
    total+=(item.price * item.count)
}) ;

  return (
<>
    <div style={{height:"90vh" , width:"100%" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <div style={{width:"30%" , height:"90%" }}>
        <div style={{width:"100%", height:"80%"  , overflow:"scroll" , marginTop:50}}>
            <div style={{width:"100%" , height:"auto"}}>
                                { (cartList) ?
                                    cartList.map((item,i)=>(
                                        <div key={i}  style={{color:"black" , padding:30 , display:"flex" , flexDirection:"column" , justifyContent:"space-between", height:500 }} className='card__item' >
                                        <img className='tsw__img' style={{height:"80%" , width:"100%" , objectFit:"cover"}} src={item.img} alt="" />
                                        <div>
                                            
                                            <div style={{fontSize:14 , fontWeight:"bold"}}>
                                            {item.des}
                                            </div>
                                            <div style={{display:"flex" , alignItems:"center"}}>
                                                
                                                <div style={{textDecoration:"none" , color:"#E57C41"}}>
                                                ₹{item.price}
                                                </div>
                                            </div>
                                            <div style={{display:"flex"}}>
                                            <button onClick={()=> deleteItem(item.des)} className='add__cart' style={{ marginRight:10,padding:10 ,fontWeight:"bold" , border:"none" , borderRadius:"2px"}}>
                                                    Delete Item
                                            </button>
                                            <div style={{display:"flex"}}>
                                                <button onClick={()=>quanIncrease(item.des)} style={{paddingLeft:5 , paddingRight:5}} className='quan__btn'>
                                                <AddIcon/>
                                                </button>
                                                <div style={{border:"1px solid orange" , paddingLeft:10 , paddingRight:10 , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                                                    {item.count}
                                                </div>
                                                <button onClick={()=>quanDecrease(item.des)} style={{paddingLeft:5 , paddingRight:5}} className='quan__btn'>
                                                <RemoveIcon/>
                                                </button>
                                                
                                            </div>
                                            </div>
                                            
                                        </div>
                                        </div>
                                    )) :
                                    <div style={{height:"100" , width:"100%" , backgroundColor:"red"}}>List is Empty</div>
                                }
                                
            </div>
        </div>
        <div style={{width:"100%", height:"20%", backgroundColor:"#E57C41" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
            <div style={{fontSize:14 , fontWeight:"bold"}}>
                Total Price :-
            </div>
            <div style={{fontSize:14 , fontWeight:"bold"}}>
            ₹{total}
            </div>

        </div>
        </div>
    </div>
</>
  )
}

export default CartTotal