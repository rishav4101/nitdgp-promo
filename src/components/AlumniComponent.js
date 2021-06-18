import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { alumniStyles } from "./Styles";

const AlumniList = [
  {
    id: 0,
    name: "Mr. Subir Kumar Saha",
    dgp_year: "1983, B.E., Mechanical Engg.",
    photo: "assets/images/alumni/Subir_Kumar_Saha.PNG",
    curr_post: "Professor, IIT Delhi & Project Director, IHFC"
  },
  {
    id: 12,
    name: "Prof. Kamanio Chattopadhyay",
    dgp_year: "1971, B.E., Metallurgical Engg.",
    photo: "assets/images/alumni/kamanio_chattopadhyay.jpg",
    curr_post: "Honorary Professor, Department of Materials Engineering, IISc Bangalore"
  },
  {
    id: 13,
    name: "Mr. B. Sumant",
    dgp_year: "1985, B.E., Mechanical Engg.",
    photo: "assets/images/alumni/bsumant.jpg",
    curr_post: "Additional Whole Time Director & President of FMCG Businesses, ITC Ltd."
  },
  {
    id: 1,
    name: "Prof. Bikramjit Basu",
    dgp_year: "1995, B.E., Metullurgical and Materials Engg.",
    photo: "assets/images/alumni/Bikramjit_Basu.PNG",
    curr_post: "Professor, IISc Bangalore"
  },
  {
    id: 2,
    name: "Mr. Jyoti Prasad Bhattacharya",
    dgp_year: "1982, B.E., Electrical Engg.",
    photo: "assets/images/alumni/Jyoti_Prasad_Bhattacharya.PNG",
    curr_post: "Founder & MD, Deem-Roll Tech. Ltd. (Entrepreneur)"
  },
  {
    id: 3,
    name: "Dr. Mou Sen",
    dgp_year: "1996, B.E., Chemical Engg.",
    photo: "assets/images/alumni/Mou_Sen.PNG",
    curr_post: "Joint Director, Directorate of MSME, Govt. of West Bengal",
    bcolor: "pink"
  },
  {
    id: 4,
    name: "Mr. Deepal Kanti Das",
    dgp_year: "2009, B.E., Mechanical Engg.",
    photo: "assets/images/alumni/Deepal_Kanti_Das.PNG",
    curr_post: "Business Operations & Analytics Manager, Dell Technologies, Singapore"
  },
  {
    id: 5,
    name: "Prof. K.K. Sankaran",
    dgp_year: "1970, B.E., Metullurgical and Materials Engg.",
    photo: "assets/images/alumni/KK_Sankaran.PNG",
    curr_post: "Adjunct Professor, University of North Texas, USA"
  },
  {
    id: 6,
    name: "Dr. Poulami Das",
    dgp_year: "2012, B.E., Electronics and Communication Engg.",
    photo: "assets/images/alumni/Poulami_Das.PNG",
    curr_post: "Graduate Teaching Assistant, Georgia Tech., Research Intern, Microsoft, USA"
  },
  {
    id: 7,
    name: "Mr. Rajib Ghosh",
    dgp_year: "1997, B.E., Mechanical Engg.",
    photo: "assets/images/alumni/Rajib_Ghosh.PNG",
    curr_post: "Co-founder and CRO, KornChain Ltd., London, UK"
  },
  {
    id: 8,
    name: "Prof. Samrat Choudhury ",
    dgp_year: "1998, B.E., Metullurgical and Materials Engg.",
    photo: "assets/images/alumni/Samrat_Choudhury.PNG",
    curr_post: "Assistant Professor, University of Idaho, USA"
  },
  {
    id: 9,
    name: "Mr. Subir Chowdhury",
    dgp_year: "1981, B.E., Mechanical Engg.",
    photo: "assets/images/alumni/Subir_Chowdhury.PNG",
    curr_post: "CEO, JCB INDIA LTD."
  },
  {
    id: 10,
    name: "Mr. Subrata Dutta",
    dgp_year: "1991, B.E., Civil Engg.",
    photo: "assets/images/alumni/Subrata_Dutta.PNG",
    curr_post: "Vice President(Marketing), SBU-Head, Everest Industries, New Delhi"
  },
  {
    id: 11,
    name: "Prof. Tarashankar DebRoy",
    dgp_year: "1969, B.E., Metullurgical and Materials Engg.",
    photo: "assets/images/alumni/Tarashankar_Debroy.PNG",
    curr_post: "Professor, Pennstate University, USA"
  },
  {
    id: 14,
    name: "Mr. Anirban Sengupta",
    dgp_year: "1998, B.E., Mechanical Engg.",
    photo: "assets/images/alumni/Anirban_Sengupta.PNG",
    curr_post: "Head-Digital Application Services, Wipro"
  },
  {
    id: 15,
    name: "Mr. Manoj Krishna Majumder",
    dgp_year: "2004, B.E., Mechanical Engg.",
    photo: "assets/images/alumni/Manoj_Krishna_Majumder.PNG",
    curr_post: "Principal Researcher, Product Application Research Group TATA Steel, Jamshedpur"
  },
  {
    id: 16,
    name: "Prof. Mrinal Mandal",
    dgp_year: "1987, B.E., Electronics & Communication Engg.",
    photo: "assets/images/alumni/Mrinal_Mandal.PNG",
    curr_post: "Professor, Dept. of Electrical and Computer Engg., University of Alberta, Canada"
  },
  {
    id: 17,
    name: "Mr. Niraj kumar",
    dgp_year: "1998, B.E., Metullurgical and Materials Engg.",
    photo: "assets/images/alumni/Niraj_Kumar.PNG",
    curr_post: "Delivery Project Executive-IBM, USA"
  },
  {
    id: 18,
    name: "Prof. Parthasarathi mandal",
    dgp_year: "1991, B.E., Civil Engg.",
    photo: "assets/images/alumni/Parthasarathi_mandal.PNG",
    curr_post: "Professor,Dept. of Mechanical,Aerospace and Civil Engg., University of Manchester,UK"
  },
  {
    id: 19,
    name: "Dr. Raghu Thatikonda",
    dgp_year: "1984, B.E., Metullurgical and Materials Engg.",
    photo: "assets/images/alumni/raghu.jpg",
    curr_post: "Scientist & Associate Director, Defense Metullurgical Laboratory, Hyderabad"
  }
]

const Alumni = () => {
  const classes =  alumniStyles();

  return(
    <Container>
      <h1 className={classes.SectionHead}>
        Meet Our Alumni
      </h1>
      <div
        className={classes.SectionText}
      >
        The institute stays in constant touch with its alumni strengthening the alumni-student interaction.
        The institute has numerous alumni not only in India but in many foreign countries who have went on to become
        the masters of their fields and have acquired top positions. We have the Centre for Alumni Affairs & International Relations (CAAIR)
         that acts as a platform to unite all the alumni across the world to connect with their alma mater.<br /><br />
      <b>Visit <a href="https://alumnitdgp.in">CAAIR</a> to know more.</b>
      </div>
      <div className={classes.Line}></div>
      <Grid container spacing={3}>
        {AlumniList.map((alumni) => {
          return (
            <Grid item key={alumni.id} xs={6} sm={4} md={3} lg={3}>
              <Card className={classes.CardBody}>
                  <CardMedia
                    className={classes.CardImg}
                    image={alumni.photo}
                    title={alumni.name}>
                    <div className={classes.CardImgText}>
                      <Typography variant="body2" component="p">
                        {alumni.name}
                      </Typography>
                    </div>
                  </CardMedia>
                  <CardContent className={classes.CardOverlay} style={{borderTop: "8px solid #ed0747"}}>
                    <Typography variant="body2" component="p">
                      {alumni.name}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" style={{lineHeight:1}} component="p">
                      <small>({alumni.dgp_year})</small>
                    </Typography>
                    <Typography variant="body3" style={{color: "#343f56", lineHeight:1, marginTop: "10px", fontSize: 14}} component="p">
                      {alumni.curr_post}
                    </Typography>
                  </CardContent>
              </Card>
            </Grid>
          );
        })
        }
      </Grid>
    </Container>
  );
};

export default Alumni;
