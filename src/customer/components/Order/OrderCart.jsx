import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import {useNavigate} from 'react-router-dom'
const OrderCart = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl '>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://media.istockphoto.com/id/1320367916/photo/man-wearing-black-blank-t-shirt-and-a-black-baseball-cap-with-space-for-your-logo-or-design.jpg?s=612x612&w=0&k=20&c=VDC-wDCCWZlkkCdprMJMbQ1MnLxNcLm3UnvtjxYXvHk="
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Two each of gray, white, and black shirts laying flat.</p>
              <p className="opacity-50 text-cs font-semibold">Size: M</p>
              <p className="opacity-50 text-cs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>Rs 1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && 
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 03</span>
              </p>
              <p className='text-xs'>
                Your item has been delivered
              </p>
            </div>
          }
          {false && (
            <p>
              <span>Expected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCart;
