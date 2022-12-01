import { Grid } from "@mui/material";
import React from "react";
import "./Footer.css";
import Forms from "./Forms";

function Footer() {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      className="Footer"
      gap={2}
    >
      <a id="FooterPage"></a>
      <Grid item xs={11} lg={5} xl={5}>
        <h2 className="footer-h2">
          Website for Bachelor thesis Tietoevry Create
        </h2>
        <p className="footer-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </Grid>
      <Grid item xs={12} md={10} lg={6} xl={3}>
        <Forms />
      </Grid>
    </Grid>
  );
}
export default Footer;
