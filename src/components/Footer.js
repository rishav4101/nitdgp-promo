
import "./footer.css";
import { Grid } from "@material-ui/core";
import { Facebook, LinkedIn, Mail, YouTube } from "@material-ui/icons";
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import MailIcon from '@material-ui/icons/Mail';
// import FacebookIcon from '@material-ui/icons/Facebook';
export default function Footer() {
    return (
        <>
            <div className="footer">
                <Grid container >
                    <Grid container md={6} sm={12} justify="center">
                        <div style={{ margin: "40px", textAlign: "center" }}>
                            <h6 style={{ fontWeight: "500", color: "white" }}>National institute of Technogy Durgapur</h6>
                            <p style={{ color: "#9bb9d7" }}> Mahatma Gandhi Rd, A-Zone, Durgapur, West Bengal 713209 Ph: 0343 275 4680</p>

                        </div>

                    </Grid>
                    <Grid container md={3} sm={6} justify="center">
                        <div style={{ margin: "40px", textAlign: "center" }}>
                            <h6 style={{ fontWeight: "500", color: "white" }}>QuickLink</h6>
                            <a href="https://nitdgp.ac.in"><p style={{ color: "#9bb9d7" }}>website</p></a>
                        </div>
                    </Grid>
                    <Grid container md={3} sm={6} justify="center">
                        <div style={{ margin: "40px", textAlign: "center" }}>
                            <a href="https://www.education.gov.in/hi"><img
                                src="./mhd-logo.png" class="img-fluid" alt=""
                                style={{ backgroundColor: "#fff", padding: "2px", borderRadius: "5px" }}></img></a>
                        </div>
                    </Grid>
                </Grid>
                <hr style={{ color: "white" }}></hr>
                <Grid container >
                    <Grid container md={6} sm={12} justify="center">
                        <div style={{ margin: "10px", textAlign: "center" }}>
                            <p style={{ color: "#9bb9d7" }}>Copyright &copy; 2021 All Rights Reserved by NIT Durgapur</p>
                            <p style={{ color: "#9bb9d7" }}>This site is developed by the students of NIT Durgapur.</p>

                        </div>
                    </Grid>
                    <Grid container md={6} sm={12} justify="center" direction="row">
                        <div style={{ margin: "10px" }}>
                            <Grid item xs={3} justify="center">
                                <a href="mailto:registrar@admin.nitdgp.ac.in"><Mail color="primary" style={{ fontSize: 40 }}></Mail></a>
                            </Grid>
                        </div>
                        <div style={{ margin: "10px" }}>
                            <Grid item xs={3} justify="center">
                                <a href=" https://www.linkedin.com/company/nitdurgapur/"><LinkedIn color="primary" style={{ fontSize: 40 }}></LinkedIn></a>
                            </Grid>
                        </div>
                        <div style={{ margin: "10px" }}>
                            <Grid itemxs={3} justify="center">
                                <a href="https://www.youtube.com/channel/UC1svhZpnCQ1OoqYiMnhh-3g/featured"><YouTube color="primary" style={{ fontSize: 40 }}></YouTube></a>
                            </Grid>
                        </div>
                        <div style={{ margin: "10px" }}>
                            <Grid item xs={3} justify="center">
                                <a href=" https://www.facebook.com/watch/nitdgpofficial/"><Facebook color="primary" style={{ fontSize: 40 }}></Facebook></a>
                            </Grid>
                        </div>

                    </Grid>
                </Grid>
            </div>
        </>
    );
}