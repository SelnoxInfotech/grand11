import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CiCalendarDate } from 'react-icons/ci';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Helmet from "react-helmet"
export default function BreakingNewsList() {
    const imagePerRow = 5
    const [next, setNext] = useState(imagePerRow);
    const [match_new, set_matche_new] = useState([]);
    const settings = {
        arrow: true,
        dots: false,
        // infinite: true,
        // slidesToShow: 4,
        slidesToScroll: 1,
        // vertical: true,
        verticalSwiping: true,

    };




    const [breakingnews, setbreakingnews] = useState([])
    useEffect(() => {
        axios("https://www.g11fantasy.com/NewsSection/Get-News/", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                setbreakingnews(response.data.reverse())

            }
        })
    }, [])

    window.scrollTo(0, 0);


    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };
    useEffect(() => {
        set_matche_new(breakingnews)
    }, [breakingnews])
    return (
        <div className='container-fluid'>
            <Helmet>
                <title>Breaking News |  G11 Fantasy Cricket Prediction |  </title>
                <meta name='description' content="Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."></meta>
            </Helmet>
            <div className='row'>
                <div className='col-12  breaking_news_hed '>
                    <h2> Cricket Breaking News ON TRENDING TOPICS</h2>
                </div>
                <Slider {...settings} className="st"  >
                    <div style={{ display: "flex" }} className="slider_breaking" >

                        {
                            match_new?.slice(0, next)?.map((breakingnews, index) => {
                                return (
                                    <Link to={`/Cricket-BreakingNews/${breakingnews.id}/${breakingnews.Title.replace(/\s+/g, '-')}`} key={index} >
                                        <div className='col-12 breakingcard' >
                                            <div className='col card1'>

                                                <img src={`https://www.g11fantasy.com${breakingnews.Image} `} alt={breakingnews.Alt_Text} className="card_image_breaking" />

                                            </div>
                                            <div className='col-sm-10'>

                                                <p className='card_title'>
                                                    {breakingnews.Title}
                                                </p>
                                                <p className='card_time_breaking'>
                                                    <span className="ClenderIcon"> <CiCalendarDate></CiCalendarDate></span>
                                                    <span>  {breakingnews.updated.slice(0, 10)}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                )
                            })

                        }
                        <div className='row'>
                            <div className='col-12 center '>
                                {next < match_new?.length && (
                                    <button className="btn readleft" onClick={handleMoreImage}
                                    >
                                        Load more
                                    </button>
                                )}
                                {next < match_new?.length && (
                                    <button className={next <= 5 ? 'hidden' : "btn readleft"} onClick={handlelessImage}
                                    >
                                        Read Less
                                    </button>
                                )}
                            </div>

                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
