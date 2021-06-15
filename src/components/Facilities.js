import { useStyles } from "./Styles";
import React from "react";

export default function Facilities() {
  const classes = useStyles();
  return (
    <div style={{ width: "90%", margin: "0px auto", textAlign: "center" }}>
      <h1 className={classes.SectionHead}>THE FACILITIES</h1>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>BANKS</h3>
      <div className={classes.SubSectionText}>
        We have two banks inside the campus itself.<br/>
        1) State Bank of India NIT Durgapur Branch. <br/>
        2) Canara Bank.
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>Central Instruments Facilities</h3>
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
        There are seven hostels for boys and two hostels for girls to accommodate
        the admitted students. All the hostels have been provided with WiFi facility
        to provide seamless internet connectivity to the students.
      <br/>
        The most of the teachers and the staff members reside in the residential
        quarters provided by the Institute.
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>CANTEENS</h3>
      <div className={classes.SubSectionText}>
        Each hostel has its own canteen. Apart from those the other
        canteens that we have inside campus are : <br/>
        1) Wonder Cafe  <br/>
        2) Nescafe <br/>
        3) Chandu Tea Stall <br/>
        4) Techno <br/>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>CENTERS</h3>
      <div className={classes.SubSectionText}>
        1) Computer Center. <br/>
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>GUEST HOUSE</h3>
      <div className={classes.SubSectionText}>
        The Institute Guest House standing beside the Director's Bungalow serves
        to render hospitality to the Official and Non-official guests of the Institute.
        It is a unique double storied building with modern living facilities
        overlooking a beautiful garden and tall sal trees all around.
        The guests of faculty members and students are also accommodated there
        with advanced booking as per availability.
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
        The Library as one of the important central facilities of the Institute
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
        Library is also a member of National Digital Library of India (NDLI).
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>MEDICAL UNIT</h3>
      <div className={classes.SubSectionText}>
        The Medical Unit prioritizes intensive care and attentive treatment by
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
        has a Student’s help desk for insurance for different kinds of treatments.
      </div>
      <div className={classes.Line}></div>

      <h3 className={classes.SubSectionHead}>POST OFFICE</h3>
      <div className={classes.SubSectionText}>
        We also have a post office inside the campus to help official communication.
      <br/>
        <b>Address:</b> A-Zone, Durgapur, West Bengal 713209 Phone: 1800 11 2011
      </div>
      <div className={classes.Line}></div>

      <h1 className={classes.SubSectionHead}>POST OFFICE</h1>
      <div className={classes.SubSectionText}>
        Address: A-Zone, Durgapur, West Bengal 713209 Phone: 1800 11 2011 <br />
      </div>
      <div className={classes.Line}></div>
    </div>
  );
}
