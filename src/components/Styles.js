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
    fontWeight: 600,
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
    fontWeight: 600,
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
    fontWeight: 600,
    fontSize: 40,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
  },
  SectionText: {
    textAlign: "center",
    width: "min(90%, 900px)",
    margin: "10px auto",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
  SubDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row-reverse"
    },
  },

  //SubSection
  SubSectionHead: {
    color: "#343f56",
    width: "min(90%, 800px)",
    textTransform: "uppercase",
    margin: "10px  auto",
    fontWeight: 600,
    fontSize: 25,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  SubSectionText: {
    textAlign: "justify",
    width: "min(90%, 800px)",
    margin: "10px auto",
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
  },

  //Navbar
  NavRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "0px solid #343f56",
    width: "100%",
    margin: "0px auto",
    marginBottom:"30px",
    padding:"10px 20px",
    backgroundColor:"#202838"
  },
  NavLogo: {
    height: 50,
    width: "auto",
    [theme.breakpoints.down("md")]: {
      height: 30,
    },
  },
  NavText: {
    color: "#fff7ef",
    textTransform: "uppercase",
    margin: 0,
    fontWeight: 800,
    fontSize: 30,
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
    },
  },

  //Video
  VideoComp: {
    width: "min(93%, 800px)",
    height: "min(56vw, 410px)",
    margin: "0px auto",
    border: "2px solid #343f56",
    borderRadius: 10,
    boxShadow: "0px 2px 10px #d2939c",
  },

  //Line
  Line: {
    width: "min(900px, 90%)",
    height: "2px",
    backgroundColor: "#343f56",
    margin: "40px auto",
  },

  //ContentCard
  ContentCardWrap: {
    textDecoration:"none",
    width: "min(95%, 1000px)",
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #343f56",
    borderRadius: 15,
    boxShadow: "0px 2px 10px #d2939c",
    [theme.breakpoints.down("xs")]: {
      flexWrap:"wrap",
      width: "90%"
    },
    '&:nth-child(odd)':{
      flexDirection:"row-reverse"
    },
    color:"#343f56"
  },
  ContentCardImg: {
    height: 130,
    width:130,
    margin: "20px 40px",
    objectFit:"contain",
    borderRadius:20
  },
  ContentCardText: {
    textDecoration:"none",
    width: "100%",
    textAlign: "left",
    padding: "20px",
    color: "#343f56",
  },

  //TeamCard
  TeamCardWrap:{
    width:250,
    textAlign:"center",
    margin:10,
    border: "2px solid #343f56",
    borderRadius: 15,
    boxShadow: "0px 2px 10px #d2939c",
  },
  TeamImg:{
    width:200,
    height:200,
    borderRadius:"50%",
    margin:"10px",
    objectFit: "cover"
  },
  TeamTitle:{
    fontSize:20,
    fontWeight: 600,
    margin:10,
    color:"#343f56"
  }
}));

export const alumniStyles = makeStyles((theme) => ({

  CardBody: {
    borderRadius:15,
    width: "80%",
    boxShadow: "0px 2px 10px #d2939c !important",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: "258px",
      "&:hover": {
        "& $CardOverlay": {
          transform: "translateY(-170px)",
        },
      },
    },
  },
  CardImg: {
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      aspectRatio: 1/1,
    },
    [theme.breakpoints.up("md")]: {
      height: "250px",
      aspectRatio: 1/1,
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
      textAlign: "center",
      backgroundColor: "#ffffff",
    },
  },
  CardOverlay: {
    [theme.breakpoints.up("md")]: {
      height: "170px",
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
    fontWeight: 600,
    fontSize: 40,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
  },
  SectionText: {
    textAlign: "center",
    width: "min(90%, 900px)",
    margin: "10px auto",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },

  //Line
  Line: {
    width: "min(900px, 80%)",
    height: "2px",
    backgroundColor: "#343f56",
    margin: "40px auto",
  },
}));
