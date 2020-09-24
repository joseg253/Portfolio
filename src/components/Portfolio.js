import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/html-css-javascript-lg.jpg";
import NavBar from "./Navbar";
import react_pic from "../images/react.png";
import facebook_pic from "../images/facebook.png";
import ecommerce from "../images/ecommerce.png";
import "../Portfolio.css";

const useStyles = makeStyles({
  mainContainer: {
    backgroud: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem",
    margin: "5rem atuo",
    paddingBottom: "10px",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />

      <Grid
        container
        justify="center"
        container
        direction="column"
        className="grid__container"
      >
        {/*Project1 */}
        <Grid item xs={12} sm={8} md={6} className="grid__item">
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterbutton variant="h5">
                  Personal Portfolio Website
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Built my personal website with React, Javascript, HTML, and
                  CSS. Material ui was used for some stlying and React router
                  for handling page changes. Deployed the website with firebase.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  GitHub
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Project2 */}
        <Grid item xs={12} sm={8} md={6} className="grid__item">
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project2"
                height="140"
                image={ecommerce}
              />
              <CardContent>
                <Typography gutterbutton variant="h5">
                  Ecommerce Site
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Built ecommerce website with login page, homepage, checkout,
                  and payment processing. Frontend was built with React, JS,
                  CSS, and HTML. React Context API was uesed to handle data
                  passed around in application. Backend used Stripe to handle
                  payment processing, Express, Firebase's cloud functions, and
                  Firebase to deploy.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/joseg253/Ecommerce"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://e-commerce-56b0d.web.app"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Project3 */}
        <Grid item xs={12} sm={8} md={6} className="grid__item">
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project3"
                height="140"
                image={facebook_pic}
              />
              <CardContent>
                <Typography gutterbutton variant="h5">
                  Facebook Clone
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Facebook clone website. Login in page with Google
                  authentication. Live feed that pushes messages to firebase
                  database and pulls from the databse to post. Built the
                  frontend with React,Javascript,CSS,HTML. Handled data with
                  React Context API. Backend is handled with firebase. Deployed
                  the web application with firebase.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/joseg253/Facebook-clone"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://fb-clone-d3966.web.app/"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
