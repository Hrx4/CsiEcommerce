import React, { useEffect, useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ItemListState } from './ItemListProvider';
import axios from 'axios';

const TopSellingWeek = () => {


    const {cartList , setCartList} = ItemListState();
    const [cartData, setCartData] = useState([]);
const api = 'https://api.pujakaitem.com/api/products';
    const fetchUserData = async(url)=> {
        const res = await axios.get(url);
        setCartData(res.data);
        console.log(res.data);
      }
    const addToCart = (des , img , price, key) => {
        console.log('====================================');
        console.log(cartList);
        console.log('====================================');
        var func =false
        func=  cartList.find((obj) => {
        if(obj.des===des)
            return true
        })
        if(func){
            toast("Product Already Added to Cart :)");
        }
        else{
            toast("Product Added to Cart :)");
        console.log('====================================');
        console.log(des , img , price);
        console.log('====================================');
        setCartList(
           [ ...cartList , {des:des , img:img , price:price, id:key, count:1}]
        )
       
        }
         
    }

useEffect(() => {
    fetchUserData(api);
}, [])


  return (
    <>
        <div style={{height:"90vh" , width:"100%" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
            <div className='tsw__list' style={{width:"95%"  , border:"1px solid grey", margin:"auto" , display:"flex" , overflow:"scroll" , position:"relative"}}>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
             />

            { 
                cartData.map((item,i)=>(
                    <>
                        <div key={i} style={{width:500 , display:"flex"}}>
                            <div  style={{color:"black", width:300 , padding:30 , display:"flex" , flexDirection:"column" , justifyContent:"space-between" }} className='card__item' >
                                    <img className='tsw__img' style={{height:"70%" , width:"100%" , objectFit:"cover"}} src={item.image} alt="" />
                                    <div>
                                        
                                        <div style={{fontSize:14 , fontWeight:"bold"}}>
                                            {item.name}
                                        </div>
                                        <div style={{display:"flex" , alignItems:"center"}}>
                                            <div style={{textDecoration:"none" , color:"#E57C41"}}>
                                            ₹{item.price}
                                            </div>
                                        </div>
                                      
                                        <button onClick={()=>addToCart(item.name , item.image , item.price , item.id) } className='card__btn' style={{ cursor:"pointer",height:50 , width:"100%", border:"none", borderRadius:5 , backgroundColor:"orange", justifyContent:"center" , alignItems:"center"}} >
                                        <ShoppingCartCheckoutIcon fontSize='' />
                                            Add To Cart
                                        </button>
                                    </div>
                            </div>
                        </div>
                        
                    </>
                    )
                )
                
            }

            </div>



            </div>
    </>
  )
}

export default TopSellingWeek;