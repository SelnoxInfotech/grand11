import React from 'react'
import { NewsState } from "../../context/NewsApi";
import Banner from '../../Component/Banner/Banner';
import Match from '../../Component/Match-option/Match_option';
import UpdateMatch from '../../Component/New_match/UpdateMatch';
import LatestNews from '../../Component/Latest_news/LatestNews'
import HighLightNews from "../../Component/Highlight_News/HightLight"
import Teams from "../../Component/Team_logo/Teams"
import Footer from '../../Component/Footer/Footer';
import StaticContent from '../../Component/StaticContent/Static_Content';
import Statictodaymatch from '../../Component/StaticContent/Static _todaymatch';
import Staticbenifit from '../../Component/StaticContent/Static_benifit';
import Companyexpridetail from '../../Component/Company/Company_expri_detail';
import Testimonial from "../../Component/StaticContent/Testimonial";
import CostumerRate from "../../Component/StaticContent/CostumerRate";
import Guaranteed from "../../Component/StaticContent/Guaranteed";
import Metatage from '../../../Metacard';
import Breaking from '../../Component/Breaking/BreakingNews';
export default function Home() {

  return (


    
      <div>

      <Metatage title="G11-Fantasy Cricket Prediction for Today's Match" description={"G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction"} imageUrl={"image/G11.png"} imageAlt={"164"}></Metatage>

      <NewsState>
        {/* <Helmet>
          <title>G11-Fantasy Cricket Prediction for Today's Match</title>
          <meta name='description' content="G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction"></meta>
          <meta property="og:image" content="image/G11.png"/> */}

        {/* </Helmet> */}
        
        <Match></Match>
        <Banner></Banner>
        <UpdateMatch></UpdateMatch>
        <StaticContent></StaticContent>
        <Breaking></Breaking>
        <LatestNews></LatestNews>
        <HighLightNews></HighLightNews>
        <Statictodaymatch></Statictodaymatch>
        <Staticbenifit></Staticbenifit>
        <Teams></Teams>
        <Testimonial></Testimonial>
        <CostumerRate></CostumerRate>
        <Guaranteed></Guaranteed>
        <Companyexpridetail></Companyexpridetail>
        <Footer></Footer>
      </NewsState>
      </div>

  )
}
