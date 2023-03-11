import React, {  useEffect, useState } from 'react';
import './Menu.css';
import {Container, Image,Row,Col, Card, Button, Modal, Form, Nav} from 'react-bootstrap';
import {BoxSeamFill, Link45deg,Quote,GeoAltFill,TelephoneFill,ArrowLeftShort,PlusCircle, Boxes} from 'react-bootstrap-icons';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import LOGO from '../assets/LOGO.jpg';





function MenuHome() {
 

  const [modalshow,setModalshow]=useState(false);
  const handleClose = () => {
    setModalshow(false);
  };


  const[edit,setEdit]=useState(false);
 const EditClose = (e) => {
     e.preventDefault();
    setEdit(false);
    
  };
  const showEdit=(e)=>{
    e.preventDefault();
    setEdit(!edit);
    console.log(edit);
   };




  const [showModal,setShowModal]=useState(false);
   const showAddress=()=>{
    setShowModal(!showModal);
  
   };
   const addressClose = () => {
    setShowModal(false);
  };

   const [showLinks,setShowLinks]=useState(false);
   const linksClose = () => {
    setShowLinks(false);
  };
   const [showStatement,setShowStatement]=useState(false);
   const statementClose = () => {
    setShowStatement(false);
  };

  const [val,setVal]=useState([]);
 const handleAdd=()=>{
  const abc=[...val,[]]
  setVal(abc)
 };
 const handleChange=(onchangeValue,i)=>{
   const inputdata=[...val]
   inputdata[i]=onchangeValue.target.value;
   setVal(inputdata)
 };
const handleRemove=(i)=>{
 const inputData=[...val];
 inputData.splice(i,1);
 setVal(inputData);
}




 return (
    <>
    {/* Menu bar */}
    <Container fluid>
        <Row>
          <Col sm={2}>
    <div className='menu'>
        <Container>
          <Row className='p-3'>
            <Col className='logoborder'>
                <div className='circle'>
                <Image className='logo' src={LOGO}/>
                </div>
                </Col>
            <Col> <h6 className='logotext' >A.T.Inks</h6></Col>
         </Row>
        <Row className='icon' >
        
        <Stack href='#dashboard' className='iconmenu' direction="row" alignItems="center" gap={2}>
           <span className="material-icons" >dashboard</span>
          <Typography style={{fontSize:'15px'}} variant="body1">Dashboard</Typography>
        </Stack>
        <Stack href='#orders' className='iconmenu' direction="row" alignItems="center" gap={2}>
            <span><BoxSeamFill/></span>
          <Typography style={{paddingLeft:'4px',fontSize:'15px'}} variant="body1">Orders</Typography>
        </Stack>
        <Stack href='#gruop' className='iconmenu' direction="row" alignItems="center" gap={2}>
        <span className="material-icons" >group</span>
          <Typography style={{fontSize:'15px'}} variant="body1">Team Members</Typography>
        </Stack>
        <Stack href='partners' className='iconmenu' direction="row" alignItems="center" gap={2}>
        <span className="material-icons" >handshake</span>
          <Typography style={{fontSize:'15px'}} variant="body1">Partners</Typography>
        </Stack>
        <Stack href='#productlisting' className='iconmenu' direction="row" alignItems="center" gap={2}>
        <Boxes/>
          <Typography style={{paddingLeft:'4px',fontSize:'15px'}} variant="body1">Product Listing</Typography>
        </Stack>
        <Stack href='#awards' className='iconmenu' direction="row" alignItems="center" gap={2}>
        <span className="material-icons" >emoji_events</span>
          <Typography style={{fontSize:'15px'}} variant="body1">Awards&Honours</Typography>
        </Stack>
        <Stack href='#aboutus' className='iconmenu' direction="row" alignItems="center" gap={2}>
        <span className="material-icons" >feedback</span>
          <Typography style={{fontSize:'15px'}} variant="body1">About Us</Typography>
        </Stack>
        <Stack href='#paymentinfo' className='iconmenu' direction="row" alignItems="center" gap={2} >
        <span className="material-icons" >payments</span>
          <Typography style={{fontSize:'15px'}} variant="body1">Payment info</Typography>
        </Stack>
     </Row>
    <Card className='helpcard'>
      <span style={{color:'rgb(184, 183, 183)'}} className='material-icons' >help</span>
       <h6>Need Help?</h6>
       <p>Our support team is at your disposal</p>
       <Button style={{fontSize:'12px',padding:'7px',width:'100px'}} className='btn-dark'>Get Help</Button>
      </Card>
   </Container>
 </div>
</Col>

 {/* AboutUs */}

    <Col sm={10}>
    <div className='about'>
  
     <h3>About Us</h3>
     <div>
     <div className='circle'>
        <Image className='logo' src={LOGO}/>
        <span style={{color:'black'}}> <h5> A.T.Inks </h5>  <h6 style={{color:'rgb(184, 183, 183)'}} >DigitalInks</h6> </span>
       
        <span className="material-icons " style={{marginBottom:'49px',marginTop:'11px'}} >verified</span>
        <span  style={{marginBottom:'49px',marginTop:'11px'}} ><a href='#company' >verifyCompany</a></span>
       </div>
       <p  style={{color:'rgb(143, 142, 142)'}} >Lorem ipsum sit amet, consectrur elit. Etiam eu turpis molestie, dictum est a, <span style={{color:'red'}} className='material-icons'>edit</span>  <br/>mattis tellus.</p>
      </div>

      {/* Navigation part  */}
  <nav className='links' > 
  <a href="#home">Info</a>
  <a href="#Faq">FAQ</a>
  <a href="#complaints and feedback">Complaints and feedback</a>
  <a href="#privacy policy">Privacy Poliy</a>
  <a href="#terms&conditions">Terms & Conditions</a>
  <span className='line'></span>
</nav>
<hr/>

{/* AboutUs section */}

<Row className='row-cols-1 row-cols-md-3 g-4'>
      <Col>
      <Card className='h-100'>
        <Card.Body>
            <Card.Title>
          <PermContactCalendarIcon   style={{color:'rgb(184, 183, 183)'}} /><span>Contact</span>
          <button type='button' style={{border:'transparent',backgroundColor:'transparent',float:'right'}} onClick={()=>setModalshow(true)}><span style={{color:'red',float:'right'}} className='material-icons'>edit</span></button> 
           </Card.Title >
            <Card.Text className='contact'>
             
          <Stack direction="row" alignItems="center" gap={2} >
             <EmailIcon/>
          <Typography color='black' variant="body1">salesteam@br.in/<br/>salesteam2@br.in</Typography>
          <span className='badge'>+5</span>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2} >
             <TelephoneFill/>
          <Typography color='black' variant="body1">+91 8511591740/ 8000058214</Typography>
        </Stack>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className='h-100'>
          <Card.Body>
            <Card.Title>
              <GeoAltFill   style={{color:'rgb(184, 183, 183)'}}/><span>Address</span>
              <Button  onClick={()=>setShowModal(true)} style={{border:'transparent',backgroundColor:'transparent',float:'right'}}  ><span style={{color:'red',float:'right'}} className='material-icons'>edit</span> </Button>
            </Card.Title>
            <Card.Text>C-1/351/4, GICD Makarpura,<br/>Vadodara-390010, Gujarat, India</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className='h-100'>
          <Card.Body>
            <Card.Title>
              <WorkHistoryIcon  style={{color:'rgb(184, 183, 183)'}} /><span>Hours of Operations</span>
              <span style={{color:'red',float:'right'}} className='material-icons'>edit</span> 
            </Card.Title>
            <Card.Text>
             Monday to Friday - 09:00 Am to 06:00 Pm
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className='h-100'>
          <Card.Body>
            <Card.Title>
              <Link45deg size={30}   style={{color:'rgb(184, 183, 183)'}}/><span>Social Media & Links</span>
              <Button  onClick={()=>setShowLinks(true)} style={{border:'transparent',backgroundColor:'transparent',float:'right'}}  ><span style={{color:'red',float:'right'}} className='material-icons'>edit</span> </Button>
            </Card.Title>
            <Card.Text className='links' >
            <LanguageIcon/>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            </Card.Text>
            <Card.Text className='linksname'>
            <a>Website</a>
            <a>Instagram</a>
            <a>Facebook</a>
            <a>Twitter</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className='h-100'>
          <Card.Body>
            <Card.Title>
              <Quote size={30}  style={{color:'rgb(184, 183, 183)'}} /><span>Statement</span>
              <Button  onClick={()=>setShowStatement(true)} style={{border:'transparent',backgroundColor:'transparent',float:'right'}}  ><span style={{color:'red',float:'right'}} className='material-icons'>edit</span> </Button>
            </Card.Title>
            <Card.Text>
             You think it will ink it.
              <span className='badge'>+1</span>
            </Card.Text>
           </Card.Body>
        </Card>
      </Col>
    </Row>
</div>
</Col>
 </Row>  
</Container>

{/* Contact section */}



<Modal backdrop='static'  className="modal-dialog"  show={modalshow}  onHide={()=>setModalshow(false)} >
<Modal.Header >
  <Modal.Title><ArrowLeftShort style={{cursor:'pointer'}} onClick={handleClose}   />   Contact</Modal.Title>
</Modal.Header>
<Modal.Body className='modal-content' >
  <p style={{color:'gray'}}>Please provide the company's email & contacts</p>
 
    <Container>
    <Row  className='contactcard' >
   
    <Card className='h-100'>
        <Card.Body>
            <Card.Title>
          <PermContactCalendarIcon   style={{color:'rgb(184, 183, 183)'}} /><span>Contact</span>
          
          <button onClick={()=>setEdit(true)} style={{border:'transparent',backgroundColor:'transparent',float:'right'}} ><span style={{color:'red',float:'right'}} className='material-icons'>edit</span></button>
        
          <button style={{border:'transparent',backgroundColor:'transparent',float:'right'}} ><span style={{color:'red',float:'right'}} className='material-icons'>delete</span></button> 
        
          </Card.Title >
            <Card.Text className='contact'>
             
        <Stack className='p-3' direction="row" alignItems="center" gap={2} >
             <EmailIcon/>
          <Typography color='black' variant="body1">salesteam@br.in/salesteam2@br.in</Typography>
         
        </Stack>
        <Stack className='p-3' direction="row" alignItems="center" gap={2} >
             <TelephoneFill/>
          <Typography color='black' variant="body1">+91 8511591740/ 8000058214</Typography>
        </Stack>
            </Card.Text>
          </Card.Body>
        </Card>
    </Row>
    <Row className='contactcard'>
    <Card className='h-100'>
          <Card.Body>
            <Card.Title>
          <PermContactCalendarIcon   style={{color:'rgb(184, 183, 183)'}} /><span>Contact</span>
          <button  onClick={()=>setEdit(true)}  style={{border:'transparent',backgroundColor:'transparent',float:'right'}}><span style={{color:'red',float:'right'}} className='material-icons'>edit</span></button> 
           <button   style={{border:'transparent',backgroundColor:'transparent',float:'right'}} ><span style={{color:'red',float:'right'}} className='material-icons'>delete</span></button> 
          </Card.Title >
            <Card.Text className='contact'>
             
        <Stack className='p-3' direction="row" alignItems="center" gap={2} >
             <EmailIcon/>
          <Typography color='black' variant="body1">salesteam@br.in/salesteam2@br.in</Typography>
          
        </Stack>
        <Stack className='p-3' direction="row" alignItems="center" gap={2} >
             <TelephoneFill/>
          <Typography color='black' variant="body1">+91 8511591740/ 8000058214</Typography>
        </Stack>
            </Card.Text>
          </Card.Body>
        </Card>
    </Row>
    <Row className='contactcard'>
    <Card className='h-100 contactcard1'>
         <Card.Body>
            <Card.Title>
          <PermContactCalendarIcon   style={{color:'rgb(184, 183, 183)'}} /><span>Contact</span>
          <button  onClick={()=>setEdit(true)} style={{border:'transparent',backgroundColor:'transparent',float:'right'}} ><span style={{color:'red',float:'right'}} className='material-icons'>edit</span></button> 
          <button  style={{border:'transparent',backgroundColor:'transparent',float:'right'}} ><span style={{color:'red',float:'right'}} className='material-icons'>delete</span></button> 
          </Card.Title >
            <Card.Text className='contact'>
             
        <Stack className='p-3' direction="row" alignItems="center" gap={2} >
             <EmailIcon/>
          <Typography color='black' variant="body1">salesteam@br.in/salesteam2@br.in</Typography>
       </Stack>
        <Stack className='p-3' direction="row" alignItems="center" gap={2} >
             <TelephoneFill/>
          <Typography color='black' variant="body1">+91 8511591740/ 8000058214</Typography>
        </Stack>
            </Card.Text>
          </Card.Body>
        </Card>
    </Row>
    <Row className='contactcard'>
    <Button className='btn btn-danger'>Save</Button>
    </Row>
   </Container>

  </Modal.Body>
</Modal>

{/* Contact Edit section */}


 <Modal dialogClassName='modal-side' animation={true}    show={edit}    onHide={()=>setEdit(false)} >
     <Modal.Header >
       <Modal.Title><ArrowLeftShort style={{cursor:'pointer'}} onClick={EditClose}   />   Contact</Modal.Title>
     </Modal.Header>
     <Modal.Body className='modal-content' >
       <p style={{color:'gray',paddingLeft:'20px'}}>Please provide the company's email & contacts</p>
      <Container>
       <Form  className='contactform'>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email ID</Form.Label>
             <Form.Control type="email" placeholder="eg:sales@gmail.com" />
             {val.map((data,i)=>{
         return(
             <Form.Control style={{ marginTop:'20px'}}   type="email" placeholder="eg:sales@gmail.com" onChange={e=>handleChange(e,i)}  />
         )
        })}
             <Button onClick={()=>handleAdd()}  className='btn btn-light' style={{backgroundColor:'rgb(255, 217, 217)' , marginTop:'20px',width:'350px',color:'brown'}} >  <PlusCircle/>  Add More</Button>
         
           </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Contact Number</Form.Label>
             <Form.Control type="number" placeholder="eg:8169523147" />
             {val.map((data,i)=>{
         return(
             <Form.Control style={{ marginTop:'20px'}}   type="number" placeholder="eg:1258454255" onChange={e=>handleChange(e,i)}  />
         )
        })}
             <Button   onClick={()=>handleAdd()}  className='btn btn-light' style={{backgroundColor:'rgb(255, 217, 217)' , marginTop:'20px',width:'350px',color:'brown'}} >  <PlusCircle/>  Add More</Button>
          
           </Form.Group>
           <Row className='contactcard'>
          <Button className='btn btn-danger' style={{marginTop:'250px'}} type="submit">
             Save
           </Button>
           </Row>
         </Form>
         </Container>
    </Modal.Body>
</Modal>


{/* Address section */}

<Modal show={showModal} onHide={()=>setShowModal(false)}   className="modal-dialog alert-fade"   >
      <Modal.Header >
        <Modal.Title><ArrowLeftShort style={{cursor:'pointer'}}  onClick={addressClose} />Address</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-content' >
        <p style={{color:'gray',paddingLeft:'20px'}}>Please provide the company's email & contacts</p>
       <Container>
        <Form  className='contactform'>
            <Form.Group className="mb-3 "  controlId="formBasicEmail">
              <Form.Control className='address' type="text" placeholder="Floor Number / Block no/Office Name" />
              <Form.Control className='address'  type="text" placeholder="Area / Locality" />
              <Form.Control className='address'  type="text" placeholder="Nearest Landmark" />
              <Form.Control className='address'  type="text" placeholder="Town/City" />
              <Form.Control className='address'  type="text" placeholder="City" />
              <Form.Control className='address'  type="text" placeholder="Pincode" />
            </Form.Group>
            <Row className='contactcard'>
           <Button className='btn btn-danger' style={{marginTop:'180px'}} type="submit"> Save</Button>
            </Row>
          </Form>
          </Container>
        </Modal.Body>
      </Modal>
     

    {/* Social Media and Links */}

      <Modal show={showLinks} onHide={()=>setShowLinks(false)}   className="modal-dialog alert-fade"   >
      <Modal.Header >
        <Modal.Title><ArrowLeftShort style={{cursor:'pointer'}}  onClick={linksClose} />Address</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-content' >
        <p style={{color:'gray',paddingLeft:'20px'}}>Please provide the links to the social media accounts & websites of the company</p>
       <Container>
        <Form  className='contactform'>
            <Form.Group className="mb-3 "  controlId="formBasicEmail">
              <Form.Label  >Instagram</Form.Label>
              <Form.Control style={{border:'transparent',backgroundColor:' rgb(236, 236, 236)'}}  type="email" placeholder="eg. www.instagram.com/companyname" />
              <Form.Label>Facebook</Form.Label>
              <Form.Control   type="number" style={{border:'transparent',backgroundColor:' rgb(236, 236, 236)'}} placeholder="eg. www.facebooc.com/companyname" />
              <Form.Label>Twitter</Form.Label>
              <Form.Control style={{border:'transparent',backgroundColor:' rgb(236, 236, 236)'}}  type="number" placeholder="eg. www.twitter.com/companyname" />
              <Form.Label>Website</Form.Label>
              <Form.Control style={{border:'transparent',backgroundColor:' rgb(236, 236, 236)'}}  type="number" placeholder="eg. www.companyname.com" />
              </Form.Group>
            <Row className='contactcard'>
           <Button className='btn btn-danger' style={{marginTop:'180px'}} type="submit"> Save</Button>
            </Row>
          </Form>
          </Container>
        </Modal.Body>
      </Modal>
     

    {/* Statement section */}
   
      <Modal show={showStatement} onHide={()=>setShowStatement(false)}   className="modal-dialog alert-fade"   >
      <Modal.Header >
        <Modal.Title><ArrowLeftShort style={{cursor:'pointer'}}  onClick={statementClose} />Statement</Modal.Title>
       <button   className='btn' > <span style={{color:'brown'}}><PlusCircle/>Add</span></button>
       
       </Modal.Header>
      <Modal.Body className='modal-content' >
        <p style={{color:'gray',paddingLeft:'20px'}}>Write down the statement of the company in to convey your vision to the potential customer</p>
       <Container>
           <Row className='p-3'>
            <Card >
              <Card.Header >
              <Quote size={30} />
              <span style={{color:'red',float:'right'}} className='material-icons'>edit</span> 
              <span style={{color:'red',float:'right'}} className='material-icons'>delete</span> 
              <Card.Text>eg.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. </Card.Text>
            </Card.Header>
            </Card>
           </Row>
           <Row className='p-3'>
            <Card  >
            <Card.Header >
              <Quote size={30} />
              <span style={{color:'red',float:'right'}} className='material-icons'>edit</span> 
              <span style={{color:'red',float:'right'}} className='material-icons'>delete</span> 
              <Card.Text>eg.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. </Card.Text>
            </Card.Header>
            </Card>
           </Row>
          
          </Container>
        </Modal.Body>
      </Modal>
       



  
</>

  )
}

export default MenuHome;
