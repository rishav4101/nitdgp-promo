import "./footer.css";
import { Grid } from "@material-ui/core";
import { Facebook, LinkedIn, Mail, YouTube } from "@material-ui/icons";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="centered">
          <Grid container style={{maxWidth:"1400px", margin:"0 auto"}}>
            <Grid container md={1} sm={12} className="offset">
              {" "}
            </Grid>
            <Grid container md={3} sm={12} className="info">
              <div className="left-box" style={{ margin: "40px 0px", width:"100%" }}>
                <h6 style={{ fontWeight: "500", color: "white" }}>
                  National institute of Technogy Durgapur
                </h6>
                <p style={{ color: "#9bb9d7" }}>
                  {" "}
                  Mahatma Gandhi Rd, A-Zone, Durgapur,{" "}
                </p>
                <p style={{ color: "#9bb9d7" }}>
                  {" "}
                  West Bengal 713209 Ph: 0343 275 4680
                </p>
              </div>
            </Grid>
            <Grid container md={4} sm={6} justify="center">
              <div style={{ margin: "40px", textAlign: "center" }}>
                <h6 style={{ fontWeight: "500", color: "white" }}>QuickLink</h6>
                <a href="https://nitdgp.ac.in">
                  <p style={{ color: "#9bb9d7" }}>website</p>
                </a>
              </div>
            </Grid>
            <Grid container md={3} sm={6} className="img-box">
              <div className="right-box" style={{ margin: "40px 0px", width:"100%" }}>
                <a href="https://www.education.gov.in/hi">
                  <img
                    src="./mhd-logo.png"
                    class="img-fluid"
                    alt=""
                    width="220"
                    style={{
                      backgroundColor: "#fff",
                      padding: "2px",
                      borderRadius: "5px",
                    }}
                  ></img>
                </a>
              </div>
            </Grid>
            <Grid container md={1} sm={12} className="offset">
              {" "}
            </Grid>
          </Grid>
          <hr style={{ color: "white" }}></hr>
          <Grid container  style={{maxWidth:"1400px", margin:"0 auto"}}>
            <Grid container md={6} sm={12} justify="center">
              <div className="left-box" style={{ margin: "10px" }}>
                {/* <p style={{ color: "#9bb9d7" }}>Copyright &copy; 2021 All Rights Reserved by NIT Durgapur</p> */}
                <p style={{ color: "#9bb9d7" }}>
                  This site is developed by the students of NIT Durgapur.
                </p>
              </div>
            </Grid>
            <Grid container md={6} sm={12} justify="center" direction="row">
              <div style={{ margin: "10px" }}>
                <Grid item xs={3} justify="center">
                  <a href="mailto:registrar@admin.nitdgp.ac.in">
                    <Mail
                      color="primary"
                      style={{ fontSize: 40, color: "#f5e6ca" }}
                    ></Mail>
                  </a>
                </Grid>
              </div>
              <div style={{ margin: "10px" }}>
                <Grid item xs={3} justify="center">
                  <a href=" https://www.linkedin.com/company/nitdurgapur/">
                    <LinkedIn
                      style={{ fontSize: 40, color: "#f5e6ca" }}
                    ></LinkedIn>
                  </a>
                </Grid>
              </div>
              <div style={{ margin: "10px" }}>
                <Grid itemxs={3} justify="center">
                  <a href="https://www.youtube.com/channel/UC1svhZpnCQ1OoqYiMnhh-3g/featured">
                    <YouTube
                      style={{ fontSize: 40, color: "#f5e6ca" }}
                    ></YouTube>
                  </a>
                </Grid>
              </div>
              <div style={{ margin: "10px" }}>
                <Grid item xs={3} justify="center">
                  <a href=" https://www.facebook.com/watch/nitdgpofficial/">
                    <Facebook
                      style={{ fontSize: 40, color: "#f5e6ca" }}
                    ></Facebook>
                  </a>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
