import React from "react";
import { useStyles } from "./Styles";
import Video from "./Video";
import ContentCard from "./ContentCard";

export default function Fests() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", textAlign: "center"  }}>
      <h1 className={classes.SectionHead}>OUR fests</h1>
      <Video source="https://www.youtube.com/embed/pvze9BPX36U"/>
      <br/>
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
      <div className={classes.Line}></div>
      <ContentCard text="NITyamini, previously known as Recstacy, is the annual socio cultural fest, 
      organised by the Students' Gymkhana of NIT Durgapur. Loaded with music, dance and drama, packed 
      with events, exuberance and delight and mystified with ever lasting memories of the 4 day 
      extravaganza, NITyamini is sure to fire up all your neurons. 
Experience the rich culture of our college and witness a rendition that will rejuvenate your mind and soul.
NITyamini seeks to provide an exclusive platform for budding artists from across the country to mesmerize
 with their charm and talent. Street plays, dance and music competitions, guest performances
  from India's best artists and a plethora of special attractions are all lined up to make NITyamini 
  one of the grandest occasions Eastern India has ever witnessed." source="assets/images/fests/nityamini.jpg"/>
        
        <ContentCard text='Aarohan, the Annual Techno-Management fest of NIT Durgapur is the 2nd largest Technical fest in the whole of eastern India. 
        Started in the year 2003, it was organized by a group of young enthusiasts under the club, Centre for Cognitive Activities (CCA), and with the supervision of highly responsible faculties till 2019. 
        Thereafter, a group of five clubs was formed in 2020 to organize the fest and were named collectively as the Team Avishkar and they are namely, Centre for Cognitive Activities, 
        Society of Automotive Engineers NIT Durgapur’s Collegiate Chapter, Recursion, Maths N Tech Club and GNU/Linux Users’ Group (GLUG).
        With more than 40 events being organized every year from different genres along with numerous workshops instill the minds of the youth with knowledge and fun and provide numerous ways to learn new aspects of life.
        The guest lectures held provide an opportunity to the students to gain experience from the well-known personalities and kindling the spirit of motivation in them and thus, 
        Aarohan brings some of the best solutions for mankind to the fore. Many great personalities have graced Aarohan with their enlightening presence.' 
        source="assets/images/fests/aarohan.png"/>
       
        <ContentCard text='VIRASAT is the official cultural extravaganza of SPICMACAY NIT Durgapur Chapter which aims to spread the air of 
grace , mirth and the  indescribable beauty of the great and priceless cultural heritage of our country. 
A stunning fervour of passion and dedication takes over as the most esteemed of artists enliven the atmosphere with their classical genius, workshops, film screening and musical and dance performances,
 Virasat aims at highlighting and promoting the cultural heritage of India, among youth.' source="assets/images/fests/virasat.png"/>

        <ContentCard text='Verve is the annual literary and youth fest of the college conducted by the
         Literary Circle. It is the largest fest of its kind in Eastern India, with thousands of
          participants engaged in various fun activities throughout the three days that it is conducted,
           has Treasure Hunt and Star Talk as its main attraction. Flagship events in the fest, like
            the Treasure Hunt, have become the matter of college folklore.
        Verve has been bringing whoops and cheers to all throughout the years. We hope to make the next
         edition of Verve bigger than ever, drawing in the best talent from all over India.'
         source="assets/images/fests/verve.jpeg"/>

        <ContentCard text='E-Summit is the flagship event of EDC NIT Durgapur and is the second largest of its kind in Eastern India.
         It is a four day spectacle wherein EDC aims to encourage innovation, rouse an interest among students for entrepreneurship 
         and StartUps as well as urge students to stray from social norms and make the most out of their professional careers. 
         E-Summit has featured a gambut of incredibly intriguing and exciting events- RANNIT-E, Pitchfest, Quiz-a-preneur,
          which was a quiz only for school students.  E-Summit continues to grow and expand, to reach out to every person who possesses
           the potential to inspire and create a new future for themselves and those around them.'
            source="assets/images/fests/esummit.png"/> 


       <ContentCard text="QuizInc's flagship festival, Quizzitch Cup which is being held annually for almost over a decade is the largest quizzing
        festival in Eastern India, and a crowning jewel in our repertoire. It is a three-day carnival of knowledge, information and fun which also 
        pays tribute to the spirit of the quizzing culture. Every year, we get a turnout of over a hundred seasoned quizzers for
        our offline events, both from and outside the campus. On the other hand, the participation for our online quizzes runs into thousands." 
        source="assets/images/fests/qc.png"/> 
         
        
    </div>
  );
}
