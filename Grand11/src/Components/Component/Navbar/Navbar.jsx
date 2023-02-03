import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { React ,useState,useEffect} from 'react';
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

function OffcanvasExample() {

    const [show, setShow] = useState(false);
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })
      const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
          winHeight: window.innerHeight,
        })
      }
      useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
          window.removeEventListener('resize', detectSize)
        }
      }, [windowDimenion])
    const toggleOffCanvas = () => {
        if(windowDimenion.winWidth<=991)
      setShow((show) => !show);
    };
    function hrefFunction(){
        window.location.href = "https://t.me/+TyYoHMGT3r1jMjM1";
    }
    function href(){
        window.location.href = "/";
    }
    return (
 
      <div className='sticky-top'  >
            {['lg'].map((expand) => ( 
                <Navbar key={expand} expand={expand}  className="Nav " 
                
                >
                <Container fluid  >
                        <Nav onClick={href} className='brand non' ><img src="/image/G11.png" className=" logo_img" alt="Grand11.logo" /></Nav>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}` }     onClick={toggleOffCanvas} />
                        <Navbar.Offcanvas
                  
                            id={`offcanvasNavbar-expand-${expand}`}
                        
                            aria-labelledby="offcanvasNavbarLabel"
                            placement='end'
                            show={show}
                            onHide={toggleOffCanvas}
                            
                        >
                            <Offcanvas.Header closeButton   >
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                              <div className='row'>
                                <div className='col-12 lrftjoin' >
                                <button onClick={hrefFunction} type="button" className=" btn btn_tele"> Join Telegram </button>
                                </div>
                              </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="Homelink  offcanvas--menu">
                                    <Link 
                                  onClick={toggleOffCanvas}
                                     className="NavLink"  to="/">Home</Link>
                                      <NavLink 
                                   onClick={toggleOffCanvas}
                                        to="/Latest-match">Match</NavLink>
                                            <NavLink 
                                   onClick={toggleOffCanvas}
                                        to="/BreakingNews">Breaking News</NavLink>
                                    <NavLink 
                                 onClick={toggleOffCanvas}
                                        to="/players">Players</NavLink >
                                    <NavLink
                                     onClick={toggleOffCanvas}
                                        to="/Cricket-news">News</NavLink >
                                    <NavLink 
                                 onClick={toggleOffCanvas}
                                        to="/About-us">About</NavLink >
                                   
                                    <NavLink 
                                onClick={toggleOffCanvas}
                                        to="/Privacy-policy">Privacy Policy</NavLink>
                                    <NavLink 
                                   onClick={toggleOffCanvas}
                                        to="/contact-us">Contact us</NavLink >
                                </Nav>
                                 <button onClick={hrefFunction} type="button" className=" btn btn_tele visibal "> Join Telegram </button>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas> 

                    </Container>
                </Navbar>
            ))}
        </div>

    );
}

export default OffcanvasExample;