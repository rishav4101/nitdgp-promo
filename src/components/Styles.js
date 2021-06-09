import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  TabsHead: {
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "10px 0px",
    borderBottom: "0px solid #343f56",
    position: "sticky",
    top: "0",
    backgroundColor: "#fff7ef",
  },
  TabsBtn1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 30px",
    margin: "5px 10px",
    fontSize: 17,
    textTransform: "uppercase",
    color: "#343f56",
    backgroundColor: "#fff7ef",
    border: "none",
    borderRadius: "7px",
    boxShadow: "0px 2px 10px #d2939c",
    [theme.breakpoints.down("md")]: {
      padding: "5px 25px",
      margin: "5px",
      fontSize: 15,
    },
  },
  TabsBtn2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 30px",
    margin: "5px 10px",
    fontSize: 17,
    textTransform: "uppercase",
    color: "#f5e6ca",
    backgroundColor: "#343f56",
    border: "none",
    borderRadius: "7px",
    boxShadow: "0px 2px 10px #d2939c",
    [theme.breakpoints.down("md")]: {
      padding: "5px 25px",
      margin: "5px",
      fontSize: 15,
    },
  },
  SectionHead: {
    color: "#343f56",
    textTransform: "uppercase",
    margin: "20px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
  },
  SectionText: {
    textAlign: "center",
    width: "min(90%, 800px)",
    margin: "10px auto",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },

  //Navbar
  NavRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0px",
    borderBottom: "0px solid #343f56",
    width: "90%",
    margin: "0px auto",
  },
  NavLogo: {
    height: 60,
    width: "auto",
    [theme.breakpoints.down("md")]: {
      height: 40,
    },
  },
  NavText: {
    color: "#343f56",
    textTransform: "uppercase",
    margin: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
  },
}));

export const alumniStyles = makeStyles((theme) => ({
  CardBody: {
    [theme.breakpoints.up("md")]: {
      height: "400px",
      "&:hover": {
        "& $CardOverlay": {
          transform: "translateY(-200px)",
        },
      },
    },
  },
  CardImg: {
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "440px",
    },
    [theme.breakpoints.up("md")]: {
      height: "390px",
    },
  },
  CardImgText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      display: "block",
      bottom: 0,
      left: 0,
      right: 0,
      height: "40px",
      textAlign: "center",
      backgroundColor: "#ffffff",
    },
  },
  CardOverlay: {
    borderTop: "10px solid #f6404e",
    [theme.breakpoints.up("md")]: {
      height: "200px",
      backgroundColor: "#ffffff",
      textAlign: "center",
      transform: "translateY(0)",
      transition: "transform 0.25s linear",
    },
  },
  SectionHead: {
    color: "#343f56",
    textTransform: "uppercase",
    margin: "20px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
  },
  SectionText: {
    textAlign: "center",
    width: "min(90%, 800px)",
    margin: "10px auto",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
}));
