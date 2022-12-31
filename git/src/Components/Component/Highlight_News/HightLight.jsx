import React, { useState, useContext } from "react";
import Slider from "react-slick";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';
import News from "../../context/NewsApi";
import { Link } from "react-router-dom";

function HighLight_News() {
    const data = useContext(News);
    const [highlight, sethighlight] = useState([]);
    React.useEffect(() => {
        sethighlight(data.news)
    }, [data])
    var settings = {
        lazyLoad: true,
        infinite: true,
        speed: 80,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        pauseOnHover: true,
        responsive: [
            {

                breakpoint: 1400,
                settings: {
                    autoplay: true,
                    pauseOnHover: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {

                breakpoint: 1100,
                settings: {
                    autoplay: true,
                    pauseOnHover: true,
                    slidesToShow: 1,
                slidesToScroll: 2,
                    infinite: true,

                }
            },
            {

                breakpoint: 1000,
                settings: {
                    autoplay: true,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="hi">
            <div className="container-fluid hight_container ">
                <div className="row highlight-container">
                    <div className="col-md-12 View_All_link">
                        <span className="hadd">Highlight </span>
                        <span className=" position-absolute end-0">  <Link to="/Cricket-news" className="view_all"> View All  </Link ></span>
                    </div>
                </div>
                <div className="Hight_light_set">
                    <Slider {...settings} className="hight_slick"  >
                        {highlight.map((data, index) => {
                            return (
                                <div className="container-fluid Latest_news_back" key={index}>
                                    <Row >
                                        <Col sm={6} className="image_highlight center" >
                                            <img className="hight_news_image" src={`https://grand11.in/g11/${data.image}`}  alt="G11-Fantasy Cricket Prediction for Today's Match"
                                                onError={event => {
                                                    event.target.src = "image/ind_vs_pak.webp"
                                                    event.onerror = null
                                                }} />
                                        </Col >
                                        <Col sm={6}  >
                                            <div className="  hedding hovereffect "  >   <h3 > <Link to={`/Cricket-News/${data.id}/${data.title.replace(/\s+/g, '-')}`}> {data.title.substr(0,50)} </Link> </h3></div>
                                            <div><span className="content text" value={data} >{parse(data.content.substr(0,500))}</span></div>
                                            <Link to={`/Cricket-News/${data.id}/${data.title.replace(/\s+/g, '-')}`}><div> <button className="btn primary hovereffect text-break fw-lighter " >Read Full News</button></div></Link>
                                        </Col>
                                    </Row>
                                   
                                </div>
                            )
                        })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default HighLight_News;