import React from "react";
import { Rating, Avatar, Box, Grid } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="text-left">
              <p className="font-semibold text-lg text-left">Raam</p>
              <p className="opacity-70 ">April 5, 2024</p>
            </div>
          </div>
          <div className="text-left">
            <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          </div>

          <p className="text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
