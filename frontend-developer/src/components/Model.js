import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CartData } from '../Context';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import StarRating from './StarRating';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  height:400,
  bgcolor: 'rgb(205, 158, 214)',
  // border: '2px solid #000',
  boxShadow: 24,
};

export default function BasicModal() {
    const {filter:{open,openData,byStock},main:{cart,fav},dispatchFilter,dispatchMain} = CartData()
    console.log(openData)
  return (
    <div>
      <Modal
        open={open}
        onClose={()=>dispatchFilter({type:'CLOSE'})}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title">
          <img style={{width:'100%',height:240,borderTopLeftRadius:4,borderTopRightRadius:4}} src={openData.image} alt={openData.title}/>
            <h4 style={{paddingLeft:5}}>{openData.name}</h4>
          </Typography>
          <Typography style={{paddingLeft:5}} id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{display:'flex',width:'60%',justifyContent:'space-between'}}>
            <div>
            <h4>&#8377; {parseInt(openData.price*80)}</h4>
            </div>
            <div>
        {cart.some((p)=>p.id === openData.id)?
        <button className='but' onClick={()=>dispatchMain({type:'REMOVE_FROM_CART',payload:openData,})}>Remove from Cart</button>:
        <button className='but' onClick={()=>dispatchMain({type:'ADD_TO_CART',payload:openData,})} disabled={byStock}>{byStock?'Out of Stock':'Add to Cart'}</button>}
        </div>
            </div>
            <div className='starcss'>
        <StarRating   data={openData.ratings}/>
            </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
            <div>
        <p style={{fontSize:12,marginLeft:13}}>{openData.fastDelivery?'Fast Delivery':'3 Days late'}</p>
            </div>
        <div >
          
        {fav.find((f)=>f.id === openData.id)?
        <button  onClick={()=>dispatchMain({type:'REMOVE_FROM_FAV',payload:openData})}><FavoriteSharpIcon style={{color:'red'}}/></button>:
        <button  onClick={()=>dispatchMain({type:'ADD_TO_FAV',payload:openData})}><FavoriteSharpIcon style={{color:'white'}}/></button>}
        </div>
        </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}