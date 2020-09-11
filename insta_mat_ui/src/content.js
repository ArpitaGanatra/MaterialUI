import React from "react";
import InstaCard from "./InstaCard";
import { Grid } from "@material-ui/core";
import instaCardList from "./constants";

const Content = () => {
  const getInstaCard = InstaCardObj => {
    return (
      <Grid item xs={12} sm={4}>
        <InstaCard {...InstaCardObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {instaCardList.map(InstaCardObj => getInstaCard(InstaCardObj))}
    </Grid>
  );
};

export default Content;