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
    dgp_year: "1983, B.E., Mechanical Engg",
    photo: "assets/images/alumni/Subir_Kumar_Saha.PNG",
    curr_post: "Professor, IIT Delhi & Project Director, IHFC"
  },
  {
    id: 1,
    name: "Prof. Bikramjit Basu",
    dgp_year: "1995, B.E., Metullurgical and Materials Engg",
    photo: "assets/images/alumni/Bikramjit_Basu.PNG",
    curr_post: "Professor, IISc Bangalore"
  },
  {
    id: 2,
    name: "Mr. Jyoti Prasad Bhattacharya",
    dgp_year: "1982, B.E., Electrical Engg",
    photo: "assets/images/alumni/Jyoti_Prasad_Bhattacharya.PNG",
    curr_post: "Founder & MD, Deem-Roll Tech. Ltd. (Entrepreneur)"
  },
  {
    id: 3,
    name: "Dr. Mou Sen",
    dgp_year: "1996, B.E., Chemical Engg",
    photo: "assets/images/alumni/Mou_Sen.PNG",
    curr_post: "Joint Director, Directorate of MSME, Govt. of West Bengal"
  },
  {
    id: 4,
    name: "Mr. Deepal Kanti Das",
    dgp_year: "2009, B.E., Mechanical Engg",
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
    dgp_year: "2012, B.E., Electronics and Communication Engg",
    photo: "assets/images/alumni/Poulami_Das.PNG",
    curr_post: "Graduate Teching Assistant, Georgia Tech., Research Intern, Microsoft, USA"
  },
  {
    id: 7,
    name: "Mr. Rajib Ghosh",
    dgp_year: "1997, B.E., Mechanical Engg",
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
    dgp_year: "1969, B.E., Metullurgical and Materials Engg",
    photo: "assets/images/alumni/Tarashankar_Debroy.PNG",
    curr_post: "Professor, Pennstate University, USA"
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
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </div>
      <Grid container spacing={3}>
        {AlumniList.map((alumni) => {
          return (
            <Grid item key={alumni.id} xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.CardBody}>
                  <CardMedia
                    className={classes.CardImg}
                    image={alumni.photo}
                    title={alumni.name}>
                    <div className={classes.CardImgText}>
                      <Typography variant="h6" component="h6">
                        {alumni.name}
                      </Typography>
                    </div>
                  </CardMedia>
                  <CardContent className={classes.CardOverlay}>
                    <Typography variant="h6" component="h6">
                      {alumni.name}
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p">
                      ({alumni.dgp_year})
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
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
