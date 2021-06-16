import { useStyles } from "./Styles";
import React from "react";

export default function Facilities() {
  const classes = useStyles();
  return (
    <div style={{ width: "90%", margin: "0px auto" }}>
      <h1 className={classes.SectionHead}>FACILITIES AND SUPPORT</h1>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>187 ACRE LUSH GREEN CAMPUS</h3>
      <div className={classes.SubSectionText}>
        <div className={classes.SubDiv}>
          <img src="assets/images/facilities/greenCampus.jpeg" alt="."
            style={{width: 300, height: 200, borderRadius: 12, marginLeft: 15 }} />
          <p style={{marginTop: 10}}>The campus of NIT Durgapur is spread
          over a vast area of 187 Acre, comprising of various Academic buildings,
          Labs, Hostels, Faculty Quarters, Playgrounds and Gardens.</p>
        </div>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>GUEST HOUSE</h3>
      <div className={classes.SubSectionText}>
        <div className={classes.SubDiv}>
          <img src="assets/images/facilities/guestHouse.jpeg" alt="."
            style={{width: 300, height: 200, borderRadius: 12, marginLeft: 15}} />
          <p style={{marginTop: 10}}>The Institute Guest House standing beside the Director's Bungalow serves
          to render hospitality to the Official and Non-official guests of the Institute.
          It is a unique double storied building with modern living facilities
          overlooking a beautiful garden and tall sal trees all around.
          The guests of faculty members and students are also accommodated there
          with advanced booking as per availability.</p>
        </div>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>UTKARSH BHAWAN (HEFA)</h3>
      <div className={classes.SubSectionText}>
        <div className={classes.SubDiv}>
          <div style={{textAlign: 'center'}}>
            <img src="assets/images/facilities/lab1.jpeg" alt="."
              style={{width: 300, height: 200, borderRadius: 12, marginLeft: 15}} />
            <img src="assets/images/facilities/lab2.jpeg" alt="."
              style={{width: 300, height: 200, borderRadius: 12, marginLeft: 15, marginTop: 10}} />
          </div>
          <p>G + 10 Storied Central Research & Academic Laboratory Building. <br/>
          <b>Central Research Facility (CRF)</b> <br/>
          <ul style={{listStyle: "square", marginLeft: "30px"}}>
            <li>Physical Characterization Facility</li>
            <li>Chemical Characterization Facility</li>
            <li>Mechanical Characterization Facility</li>
            <li>High Performance Computing and Storage</li>
            <li>Electrical and Electronics Fabrication and Characterization Facility</li>
          </ul>
          <b>Centralized Laboratory Facility (CLF)</b> <br/>
           <ul style={{listStyle: "square", marginLeft: "30px"}}>
            <li>Physics Lab</li>
            <li>Chemistry Lab</li>
            <li>Basic Electrical Engg. Lab</li>
            <li>Basic Analog and Digital Electronics Laboratory</li>
            <li>Computation Lab</li>
            <li>Process Control Lab</li>
            <li>Language Lab</li>
            <li>Tinkering Lab</li>
          </ul></p>
        </div>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>Central Instruments Facilities (CIF)</h3>
      <div className={classes.SubSectionText}>
        <b>1) XRD Equipment:</b> PANalytical XPert Pro Basic X-ray Powder
            Diffraction Package with all accessories and soft wares.
            Offers Defect studies of Metallic Alloys including Rietveld Analsis,
            Phase Analysis, Chemical Analysis for both inorganic and organic specimen,
            Microstructural Parameters. Compatible for samples of solid flat
            specimens, solid powders, liquid specimen, thin films etc.
      <br/><br/>
        <b>2) SEM with EDS Equipment:</b> SEM: S-3000N, HITACHI-JAPAN,
            EDS : THERMO-NORAN-USA, SIX-NSS 200 with PC Monitor, Softwares etc.
            Offers morphological and surface studies of Metallic Alloys,
            semi-conducting, insulating and biological samples. Chemical analysis,
            Phase analysis, X-ray mapping etc. on the EDS.
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>HOSTELS AND RESIDENTIAL QUARTERS</h3>
      <div className={classes.SubSectionText}>
        National Institute of Technology, Durgapur is a residential Institute.
        There are total 13 hostels to accommodate
        the admitted students. All the hostels have been provided with WiFi facility
        to give seamless internet connectivity to the students.
      <br/>
        The most of the teachers and the staff members reside in the residential
        quarters provided by the Institute. A model <b>co-educational higher secondary
        school</b> has been set up for the wards of the employees of the Institute.
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>STUDENT ACTIVITY CENTRE (SAC)</h3>
      <div className={classes.SubSectionText}>
        <div className={classes.SubDiv}>
          <img src="assets/images/infra/img7.jpeg" alt="."
            style={{width: 300, height: 200, borderRadius: 12, marginLeft: 15}} />
          <p style={{marginTop: 10}}>The Student Activity Centre (SAC) is treated as one of the Central
          Facilities of the Institute with a mission to train the students in
          physical activities so as to enable them to face the complex societal
          challenges in sound health and state of mind.<br/>
          Excellent facilities are available for major sports, Yoga, Martial Art, NCC and NSS.
          It also includes well equipped multi gymnasiums for boys and girls with
          separate timings.</p>
        </div>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>PLAYGROUNDS AND COURTS</h3>
      <div className={classes.SubSectionText}>
        <div className={classes.SubDiv}>
          <div style={{textAlign: 'center'}}>
            <img src="assets/images/facilities/ovals.jpeg" alt="."
              style={{width: 300, height: 200, borderRadius: 12, marginLeft: 15}} />
            <img src="assets/images/facilities/lords.jpeg" alt="."
              style={{width: 300, height: 200, borderRadius: 12, marginLeft: 15, marginTop: 10}} />
          </div>
          <p style={{marginTop: 10}}>The institute has two playgrounds, the impressive ‘Lords’ Football stadium and
          the central Sports ground ‘Oval’ where all the major games are organized
          throughout the year including Volleyball courts with flood light facilities,
          concrete cricket practice pitch, concrete Basketball Court with flood light
          facilities, concrete tennis court with flood light facilities, concrete
          badminton courts with flood light facilities, Table Tennis, Chess, Yoga etc.<br/>
          Beside central sports facilities, most of the halls of residence are equipped
          with Volleyball and concrete badminton courts including Table Tennis
          and Carom board facilities.</p>
        </div>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>CANTEENS</h3>
      <div className={classes.SubSectionText}>
        <div className={classes.SubDiv}>
          <img src="assets/images/facilities/nescafe.jpeg" alt="."
            style={{width: 300, height: 200, borderRadius: 12, marginLeft: 15 }} />
          <p style={{marginTop: 10}}>Each hostel has its own canteen. Apart from those the other
          canteens that we have inside campus are : <br/>
          1) Wonder Cafe  <br/>
          2) Nescafe <br/>
          3) Chandu Tea Stall <br/>
          4) Techno <br/></p>
        </div>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>CENTRES</h3>
      <div className={classes.SubSectionText}>
        1) Computer Center <br/>
        2) Centre of Excellence in Advanced Materials <br/>
        3) Centre for Biomedical Engineering & Assistive Technology (BEAT) <br/>
        4) Centre for Research on Environment and Water (CREW) <br/>
        5) Centre for Advanced Research on Energy (CARE) <br/>
        6) Centre of Excellence on IoT and Intelligent Systems (IoTIS)
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>HIGH VOLTAGE LABRATORY</h3>
      <div className={classes.SubSectionText}>
        At present, very few colleges have high voltage and High Power Laboratory
        facilities due to the involvement of huge costs and availability of
        specialised faculty members as well as skilled staffs in this field.
      <br/>
        The High Voltage Laboratory of NIT Durgapur is a graduate research and
        undergraduate teaching laboratory with many infrastructure and
        testing facilities.
      <br/>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>LIBRARY</h3>
      <div className={classes.SubSectionText}>
        <div className={classes.SubDiv}>
          <img src="assets/images/infra/img4.jpg" alt="."
            style={{width: 300, height: 200, borderRadius: 12, marginLeft: 15}} />
          <p style={{marginTop: 10}}>The Library as one of the important central facilities of the Institute
          supports the study, teaching, research and development programmes of the
          Institute. It is housed in a separate building having three floors on a
          plinth area of 1000 Sq. metres. The library has a collection of 1.7 lakh
          volumes of books which includes Text Books, Reference Books and Bound
          volumes of Journals, Standards etc. It has a good
          collection of Electronic resources in its Digital Library. The library
          has introduced Wi-Fi Internet facility inside it to facilitate free-flow
          of information to the users.
          <br/><br/>
          The library is an institutional member of DELNET, American Centre Library,
          Kolkata, NPTEL, and Current Science Association, Bangalore. It is also a
          beneficiary Member of eSodh Sindhu (eSS) initially known as INDEST-AICTE Consortium.
          Library is also a member of National Digital Library of India (NDLI).</p>
        </div>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>MEDICAL UNIT</h3>
      <div className={classes.SubSectionText}>
        <div className={classes.SubDiv}>
          <img src="assets/images/facilities/mu.jpeg" alt="."
            style={{width: 300, height: 200, borderRadius: 12, marginLeft: 15}} />
          <p style={{marginTop: 10}}>The Medical Unit prioritizes intensive care and attentive treatment by
          catering to the needs of its employees and students. It is served by three
          resident doctors, three Contractual doctors and other medical staff.
          Apart from morning and evening OPDs, there is also a provision for round
          the clock medical emergency services. Besides the regular doctors,
          specialist doctors from various domains of expertise visit the medical unit
          on fixed days in a week. It has observatory beds, isolation ward for
          students and dressing room. Moreover, the unit has an outsourced pathological
          blood collection and reporting system from IQ city hospital. In case of
          any serious illness, patients are referred to State Government Hospital,
          The Mission Hospital, IQ City Hospital and some other hospitals in
          Durgapur &  also in Kolkata with which it has tie-ups. The Medical unit
          has a Student’s help desk for insurance for different kinds of treatments.</p>
        </div>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>BANKS</h3>
      <div className={classes.SubSectionText}>
        We have two banks inside the campus itself.<br/>
        1) State Bank of India NIT Durgapur Branch. <br/>
        2) Canara Bank.
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>POST OFFICE</h3>
      <div className={classes.SubSectionText}>
        We also have a post office inside the campus to help official communication.
      <br/>
        <b>Address:</b> A-Zone, Durgapur, West Bengal 713209 Phone: 1800 11 2011
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>OTHER FACILITIES</h3>
      <div className={classes.SubSectionText}>
        1) Campus wide Internet connectivity <br/>
        2) Two GPU Servers <br/>
        3) Three 400 kVA DG Set <br/>
        4) Around 82 Classrooms
      </div>
      <div className={classes.Line}></div>

    </div>
  );
}
