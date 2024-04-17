import React from "react";
import { Grid, Typography, Card, Box, Button } from "@material-ui/core/";
import styles from "./Search.module.css";

const PurchaseCard = ({ setSelected, balance }) => {
  return (
    <Grid item xs={12} sm component={Card} className={styles.card}>
      <br />
      <br />
      <Typography
        color="textSecondary"
        align="center"
        className={styles.addMargin}
      >
        Your Cash Balance:
      </Typography>
      <Typography variant="h6" align="center">
        {balance ? "$" + balance.toLocaleString() : "Balance Unavailable"}
      </Typography>
      <br />
      <br />
      <Box display="flex" justifyContent="center">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.submit}
          id = "open-purchase-button"
          onClick={() => setSelected(true)}
        >
          Open Purchase System
        </Button>
      </Box>
    </Grid>
  );
};

export default PurchaseCard;
