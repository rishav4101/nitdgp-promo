import React from 'react';
import { Grid, Container } from '@material-ui/core';

const AlumniList = [
  {
    id: 0,
    distinguished: true,
    name: "Mr. Subir Kumar Saha",
    dgp_year: "1983, B.E., Mechanical Engg",
    photo: "assets/images/alumni/Subir_Kumar_Saha.png",
    curr_post: "Professor, IIT Delhi & Project Director, IHFC"
  },
  {
    id: 1,
    distinguished: true,
    name: "Prof. Bikramjit Basu",
    dgp_year: "1995, B.E., Metullurgical and Materials Engg",
    photo: "assets/images/alumni/Bikramjit_Basu.png",
    curr_post: "Professor, IISc Bangalore"
  },
  {
    id: 2,
    distinguished: true,
    name: "Mr. Jyoti Prasad Bhattacharya",
    dgp_year: "1982, B.E., Electrical Engg",
    photo: "assets/images/alumni/Jyoti_Prasad_Bhattacharya.png",
    curr_post: "Founder & MD, Deem-Roll Tech. Ltd. (Entrepreneur)"
  },
  {
    id: 3,
    distinguished: false,
    name: "Dr. Mou Sen",
    dgp_year: "1996, B.E., Chemical Engg",
    photo: "assets/images/alumni/Mou_Sen.png",
    curr_post: "Joint Director, Directorate of MSME, Govt. of West Bengal"
  },
  {
    id: 4,
    distinguished: false,
    name: "Mr. Deepal Kanti Das",
    dgp_year: "2009, B.E., Mechanical Engg",
    photo: "assets/images/alumni/Deepal_Kanti_Das.png",
    curr_post: "Business Operations & Analytics Manager, Dell Technologies, Singapore"
  },
  {
    id: 5,
    distinguished: false,
    name: "Prof. K.K. Sankaran",
    dgp_year: "1970, B.E., Metullurgical and Materials Engg.",
    photo: "assets/images/alumni/KK_Sankaran.png",
    curr_post: "Adjunct Professor, University of North Texas, USA"
  },
  {
    id: 6,
    distinguished: false,
    name: "Dr. Poulami Das",
    dgp_year: "2012, B.E., Electronics and Communication Engg",
    photo: "assets/images/alumni/Poulami_Das.png",
    curr_post: "Graduate Teching Assistant, Georgia Tech., Research Intern, Microsoft, USA"
  },
  {
    id: 7,
    distinguished: false,
    name: "Mr. Rajib Ghosh",
    dgp_year: "1997, B.E., Mechanical Engg",
    photo: "assets/images/alumni/Rajib_Ghosh.png",
    curr_post: "Co-founder and CRO, KornChain Ltd., London, UK"
  },
  {
    id: 8,
    distinguished: false,
    name: "Prof. Samrat Choudhury ",
    dgp_year: "1998, B.E., Metullurgical and Materials Engg.",
    photo: "assets/images/alumni/Samrat_Choudhury.png",
    curr_post: "Assistant Professor, University of Idaho, USA"
  },
  {
    id: 9,
    distinguished: false,
    name: "Mr. Subir Chowdhury",
    dgp_year: "1981, B.E., Mechanical Engg.",
    photo: "assets/images/alumni/Subir_Chowdhury.png",
    curr_post: "CEO, JCB INDIA LTD."
  },
  {
    id: 10,
    distinguished: false,
    name: "Mr. Subrata Dutta",
    dgp_year: "1991, B.E., Civil Engg.",
    photo: "assets/images/alumni/Subrata_Dutta.png",
    curr_post: "Vice President(Marketing), SBU-Head, Everest Industries, New Delhi"
  },
  {
    id: 11,
    distinguished: false,
    name: "Prof. Tarashankar DebRoy",
    dgp_year: "1969, B.E., Metullurgical and Materials Engg",
    photo: "assets/images/alumni/Tarashankar_Debroy.png",
    curr_post: "Professor, Pennstate University, USA"
  }
]

const Alumni = () => {

  const alumni = AlumniList.map((alumni) => {
    return (
      <Grid key={alumni.id} item>
        <img src={alumni.photo} />
      </Grid>
    );
  });

  return(
    <Container>
      <Grid container spacing={3}>
        {alumni}
      </Grid>
    </Container>
  );
};

export default Alumni;
