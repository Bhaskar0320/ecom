import React from "react";
// import {Link} from 'react-router-dom'
import { Grid, Typography, Link } from "@mui/material";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcoloer: "black", color: "white", py: 3 }}
      >
        {/**Company grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Jobs
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Press
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>

        {/**Solution Grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Marketing
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Analytics
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Commerce
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Insights
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Support
            </Button>
          </div>
        </Grid>

        {/**Documentation */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Guide
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              API Status
            </Button>
          </div>
        </Grid>

        {/**Legal */}
        {/* <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Claim
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Privacy
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Terms
            </Button>
          </div>
        </Grid> */}

<Grid container spacing={2}> {/* Grid container */}
  <Grid item xs={12} sm={6} md={3}> {/* Grid item */}
    <Typography className="pb-5" variant="h6">
      Legal
    </Typography>
    <div>
      {" "}
      <Button className="pb-5" variant="h6">
        Claim
      </Button>
    </div>
    <div>
      {" "}
      <Button className="pb-5" variant="h6">
        Privacy
      </Button>
    </div>
    <div>
      {" "}
      <Button className="pb-5" variant="h6">
        Terms
      </Button>
    </div>
  </Grid>
  {/* Add more Grid items here */}
</Grid>

        <Grid className="pt-20" itme xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{' '}
            from{' '}
            <Link href='https://www.flaticon.com/' color='inherit' underline='always'>
            www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
