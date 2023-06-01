{/*ล่าสุด*/}
import React ,{useEffect,useState} from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from 'react-router-dom';

function contract() {
  const [email, setEmail] = useState('');
  
  useEffect (()=>{
    const token = localStorage.getItem('token')
    fetch('http://localhost:3333/authen', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      }
    })
    .then(response => response.json())
    .then(data => {
    if (data.status === 'ok'){
      setEmail(data.decoded.email); // อัพเดตค่า email ดึงจาก decoded
      //alert('authen sccess')
    }else {
      alert('authen failed')
      localStorage.removeItem('token');
      window.location ='/login'
    }

    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, [])


  const handlelogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    window.location = '/login'
  }

  return (
    <>
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <aside className="left-sidebar">
    <div className="tab-bar clip-contents">
      <div className="group-375">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gtrhq4i3wi-241%3A388?alt=media&token=ff9f9def-5841-4f2d-9761-074c7412a0b0"
          alt="Not Found"
          className="logo"
        />
        <br/>
        <div className="line-1" />
        <div className="search-2">
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gtrhq4i3wi-241%3A437?alt=media&token=516ef865-9034-4705-a4c1-f8e43b20a550"
            alt="Not Found"
            className="search"
  />*/}
          <input className="search" type="search" placeholder="Search" aria-label="Search"></input>
        </div>
        <br/>
        <div className="top">
          <div type="button" className="agreement">
            <div className="frame-31">
              <img src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gtrhq4i3wi-241%3A392?alt=media&token=7d8a8614-4d15-407d-b66a-b521baadc403"
                alt="Not Found"
                className="file-text"
              />
              <p  className="menu_button"><Link  to="/Dashboard">Dashboard</Link></p>
            </div>
          </div>
        <div type="button" className="agreement">  
            <div className="frame-31">
              <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gtrhq4i3wi-241%3A399?alt=media&token=5cfd8263-ecf6-4e40-b217-8c1b5393f6d4"
                  alt="Not Found"
                  className="file-text"
              />
              <p className="menu_button"><Link  to="/Templates">Templates</Link></p>
            </div>
          </div>
          <div type="button" className="agreement_Document">
            <div className="frame-31">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gtrhq4i3wi-241%3A405?alt=media&token=c4d8219b-19c2-4427-820e-87597bf5797a"
                alt="Not Found"
                className="file-text"
              />
              <p className="menu_button">Document</p>
            </div>
          </div>
          <div type="button" className="agreement">
            <div className="frame-31">
              <img
               src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gtrhq4i3wi-241%3A414?alt=media&token=171849da-c5ec-4405-bcfc-eee68a680904"
               alt="Not Found"
               className="file-text"
              />
              <p className="menu_button"><Link  to="/Team">Team</Link></p>
            </div>
          </div>
         
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="line-2" />
        <div className="bottom">
          <div type="button"  className="settings-3">
            <div className="settings-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gtrhq4i3wi-241%3A423?alt=media&token=796fade6-142a-4ae2-b979-2267ae85706a"
                alt="Not Found"
                className="settings"
              />
              <p className="settings-1">Settings</p>
            </div>
          </div>
          <div type="button" onClick={handlelogout} className="log-out-2">
            <div className="frame-33">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gtrhq4i3wi-241%3A429?alt=media&token=03d2a064-d59e-4e4a-9e65-24ad1ccdf638"
                alt="Not Found"
                className="log-out"
              />
              <p className="log-out-1">Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </aside>
  
   
   <div className="profile">
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="#" >
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
            
          </ul>
          <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
            
              <li className="nav-item dropdown">
                <div className="nav-link nav-icon-hover" href="#" id="drop2" data-bs-toggle="dropdown"
                  aria-expanded="false">
                 
                 <div className="profile-1">
      <div className="bell-1">
       
        <div className="nav-item">
              <a className="nav-link nav-icon-hover" href="#">
                <i className="ti ti-bell-ringing"></i>
                <div className="notification bg-primary rounded-circle"></div>
              </a>
            </div>
      </div>
      <div className="profile">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/zeqox72z0pb-70%3A2241?alt=media&token=c289f432-80f1-4099-99e5-aca57745d683"
          alt="Not Found"
          className="ellipse-1"
        />
        <p className="anna-_hr"> {email}</p>
      </div>
    </div>
                </div>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div className="message-body">
                    <a href="#" className="d-flex align-items-center gap-2 dropdown-item">
                      <i className="ti ti-user fs-6"></i>
                      <p className="mb-0 fs-3">Me</p>
                    </a>
                    
                    <a onClick={handlelogout} className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      </div>
      

      <div className="body-wrapper">
      <div className="container-fluid">
<div className="container">
  <h2>Contract</h2>
  <ul className="nav nav-tabs">
    <li className="active"><a className="home" data-toggle="tab" href="#home">__All__</a></li>
    <li><a className="menu1" data-toggle="tab" href="#menu1">Create</a></li>
    <li><a className="menu2" data-toggle="tab" href="#menu2">_Draft_</a></li>
    <li><a className="menu3"data-toggle="tab" href="#menu3"> Signed </a></li>
    <li><a className="menu4" data-toggle="tab" href="#menu4">Request</a></li>
    <li><a className="menu5" data-toggle="tab" href="#menu5">Dismiss</a></li>
  </ul>

  <div className="tab-content">
    <div id="home" className="tab-pane fade in active">
      <h3></h3>
      <section className="contact-section bg-white">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                  
                <div className="frame-30 clip-contents">
                <a href="#menu1"><div className="ellipse-4" />
                <p type="button"  className="employee-contract" data-toggle="modal" data-target="#myModal">Employee <br/>Contract<br/></p>
                  <p className="_-32-documents">32 Documents</p>
                  </a>
                </div>
                <div className="modal fade" id="myModal" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">warn!</h4>
                      </div>
                      <div className="modal-body">
                        <p>คุณต้องการดูเอกสารทั้งหมดใช่ไหม</p>
                      </div>
                      <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      <button > <Link to="../create">view</Link></button>
                      </div>
                    </div>
                  </div>
                </div>

                    <div className="frame-30 clip-contents">
                    <a href="#menu1"><div className="ellipse-4" />
                          <p className="employee-contract">NDA</p>
                      <p className="_-32-documents">1 Template</p>
                      </a>
                  </div>
                    <div className="frame-30 clip-contents">
                    <a href="#menu1"><div className="ellipse-4" />
                          <p className="employee-contract">Data</p>
                      <p className="_-32-documents">19 Documents</p>
                      </a>
                    </div>
                   
                </div>
            </div>
        </section>
      <p> </p>
    </div>


     <div id="menu1" className="tab-pane fade in fade">
      <h3></h3>
      <section className="contact-section bg-white">
            <div className="container px-4 px-lg-5">
              
                <div className="row gx-4 gx-lg-5">
                <div className="frame-30 clip-contents">
                <Link to="../create"><a href="#menu1_edit"><div className="ellipse-4" />
                <p type="button"  className="employee-contract" data-toggle="modal" data-target="#myModal2">Employee <br/>Contract<br/></p>
                  <p className="_-32-documents">2 Template</p>
                  </a></Link>
                </div>
                
             
 {/* หน้าเเก้ไขของcreate
                <section>
                 <div id="menu1_edit" class="tab-pane fade in fade">
                          <h3></h3>
                          <section class="contact-section bg-white">
                                <div class="container px-4 px-lg-5">
                                    <div class="row gx-4 gx-lg-5">
                                    <div className="frame-30 clip-contents">
                                    <a href="#menu1"><div className="ellipse-4" />
                                          <p className="employee-contract">Employee <br/>Contract</p>
                                      </a>
                                    </div>
                                        <div className="frame-30 clip-contents">
                                        <a href="#menu1"><div className="ellipse-4" />
                                              <p className="employee-contract">NDA</p>
                                          </a>
                                      </div>
                                    </div>
                                </div>
                            </section>
                          <p> </p>
                        </div>
                       
                </section>
หน้าเเก้ไขของcreate*/}
                   
                    <div className="frame-30 clip-contents">
                    <Link to="./create"><a href="#menu1_edit"><div className="ellipse-4" />
                <p type="button"  className="employee-contract" data-toggle="modal" data-target="#myModal2">Data <br/><br/></p>
                  <p className="_-32-documents">19 Template</p>
                  </a></Link>
                    </div>
                   
                </div>
            </div>
        </section>
      <p> </p>
    </div>

    <div id="menu2" className="tab-pane fade">
    <h3></h3>
    <section className="contact-section bg-white">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                <div className="frame-30 clip-contents">
                      <div className="ellipse-4" />
                      <p className="employee-contract">Employee <br/>Contract</p>
                  <p className="_-32-documents">3 Template</p>
                </div>
                </div>
            </div>
        </section>
    </div>
    <div id="menu3" className="tab-pane fade">
    <h3></h3>
    <section className="contact-section bg-white">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                <div className="frame-30 clip-contents">
                      <div className="ellipse-4" />
                      <p className="employee-contract">Employee <br/>Contract</p>
                  <p className="_-32-documents">4 Documents</p>
                </div>
                </div>
            </div>
        </section>
    </div>
    <div id="menu4" className="tab-pane fade">
    <h3></h3>
    <section className="contact-section bg-white">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                <div className="frame-30 clip-contents">
                      <div className="ellipse-4" />
                      <p className="employee-contract">Employee <br/>Contract</p>
                  <p className="_-32-documents">5 Documents</p>
                </div>
                </div>
            </div>
        </section>
    </div>
    <div id="menu5" className="tab-pane fade">
    <h3></h3>
    <section className="contact-section bg-white">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                <div className="frame-30 clip-contents">
                      <div className="ellipse-4" />
                      <p className="employee-contract">Employee <br/>Contract</p>
                  <p className="_-32-documents">6 Documents</p>
                </div>
                    <div className="frame-30 clip-contents">
                          <div className="ellipse-4" />
                          <p className="employee-contract">NDA</p>
                      <p className="_-32-documents">1 Template</p>
                  </div>
                    <div className="frame-30 clip-contents">
                          <div className="ellipse-4" />
                          <p className="employee-contract">Data</p>
                      
                      <p className="_-32-documents">19 Documents</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
</div>
{/*<div className="frame-34" id="menu">
      <p className="all">All</p>
      <p className="create">Create</p>
      <p className="draft">Draft</p>
      <p className="signed">Signed</p>
      <p className="request-changes">Request Changes</p>
      <p className="dismissed">Dismissed</p>
     
    </div>*/}
      
    <hr className="hr-menu"/>
       {/**/}
     
         {/**/}
         <br/>
         <p className="Contract-name">tracking Update</p>
       

       
         
       
      </div>
    </div>
  </div>
    </>
  )
}

export default contract
