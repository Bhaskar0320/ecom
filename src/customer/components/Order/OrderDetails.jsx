import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Grid, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div className="font-semibold text-xl py-7"> 
        <AddressCard />
      </div>

      <div classname="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className='space-y-5'>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItem: "center", justiContent: "space-between" }}
          >
            {" "}
            <Grid item xs={6}>
              <div className="flex item-center soace-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://media.istockphoto.com/id/1320367916/photo/man-wearing-black-blank-t-shirt-and-a-black-baseball-cap-with-space-for-your-logo-or-design.jpg?s=612x612&w=0&k=20&c=VDC-wDCCWZlkkCdprMJMbQ1MnLxNcLm3UnvtjxYXvHk="
                  alt=""
                />
              </div>
              <div className="space-y-2 ml-5">
                <p className="font-semibold">
                  Two each of gray, white, and black shirts laying flat.
                </p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color: Black</span>
                  <span>Size: M</span>
                </p>
                <p>Seller: Linaria</p>
                <p>Rs 1099</p>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
