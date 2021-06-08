import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  NavRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0px",
    borderBottom: "0px solid #343f56",
  },
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
    backgroundColor: "#f5e6ca",
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
    backgroundColor: "#f5e6ca",
    border: "none",
    borderRadius: "7px",
    boxShadow: "0px 2px 10px #d2939c",
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
  },
  SectionHead: {
    color: "#343f56",
    textTransform: "uppercase",
    margin: "20px",
    textAlign: "center",
  },
});

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
  },
}));
