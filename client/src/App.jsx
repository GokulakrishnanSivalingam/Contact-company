import { useState } from 'react'
import './App.css'
import { FaSearch } from "react-icons/fa";
import klite from "./assets/klite.jpg"
import { IoLocationSharp } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io5";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [company, setCompany]=useState('');
  const [names, setNames]=useState('');
  const [contact, setContact]=useState('');
  const [email, setEmail]=useState('');
  const [country, setCountry]=useState('');
  const [city, setCity]=useState('');
  const [address, setAdd]=useState('');
  const [post, setPost]=useState('');
  const [project, setProject]=useState('');
  const[nerror,setNError]=useState('');
  const[error,setError]=useState('');
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const Valid = async(e)=>{

let isvalid;

 if(company===''||names===''|| email===''|| address===''||country===''|| city===''||post===''||project===''||contact===''){
  setError("please fill the field");
  isvalid=false;
  e.preventDefault();
}
else if(contact!==10)
  {
    setNError("please enter correct number");
    isvalid=false;
    e.preventDefault();
  
  }
else{
  isvalid=true;
  setError('');
}


  const resp = await fetch('http://localhost:4000/klite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      company,
      names,
      contact,
      email,
      address,
      country,
      city,
      post,
      project
    }),
  });
  if (resp.ok) {
    console.log('Login success');
  } else {
    console.log('Login failed');
  }

}



 
  return (
    <>
    <div>
    <nav className="navbar">
     <div className="logo"><img src={klite} alt="" /></div> 
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
     <li><a href="#">ABOUTUS</a></li>  
 <li><a href="#">PRODUCT</a></li>
 <li><a href="#">DOWNLOAD</a></li>
 <li><a href="#">CONTACT</a></li>
 <li><a href="#"><FaSearch/></a></li>
        </ul>
     
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          
        </div>
      
        
      </nav>
    <h2>contact</h2>
      <div style={{ width: "100%", height: "450px", display: "flex", justifyContent: "center", alignItems: "center" }} >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d59657070.74468409!2d-5.021929728684967!3d24.130363982819905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA1JzQ0LjAiTiA4MMKwMDgnNDguMCJF!5e0!3m2!1sen!2sin!4v1732168619203!5m2!1sen!2sin"
        width="90%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    <div className="container">
      <div className="cont1">
      <div className="nam">
        <b>K-LITE Industries</b><br></br>
        India’s Lighting Company
        </div>
        <div className="mainoffice">
            <b>Corporate Office / Unit 1:<a href="https://maps.app.goo.gl/h2u9o7VMQjUm6y61A"><IoLocationSharp /></a>Get directions</b><br></br>
            D-10, Ambattur Industrial Estate,<br></br>
            Chennai – 600 058, Tamil Nadu, India.<br></br>
            Phone: +91 44 48581950, 48591800<br></br>
            Cell: +91 95000 79797, 95000 85511<br></br>
            Email: info@klite.in<br></br>
            Website: www.klite.in
        </div>
        <div className="show1">
            <b>Showroom 1:<a href="https://maps.app.goo.gl/R2T1L6pUKdjbESuC9"><IoLocationSharp /></a></b><br></br>
            G8, Ambattur Industrial Estate, Chennai – 600 058
        </div>
        <div className="show2">
            <b>Showroom 2:<a href="#"><IoLocationSharp /></a></b><br></br>
            7/11 SP, Ambattur Industrial Estate, Chennai – 600 058
        </div>
        <div className="center1">
            <b>Experience Center:<a href="https://maps.app.goo.gl/C3qJmV5phNSx8Unb9"><IoLocationSharp /></a></b><br></br>
            L-14/10, DLF City, Phase - II, Gurgaon, Haryana - 122002
        </div>
        <div className="Unit2">
            <b>Unit 2:<a href="#"><IoLocationSharp /></a></b><br></br>
            23B, Sidco Industrial Estate, Chennai – 600 098
        </div>
        <div className="Unit3">
            <b>Unit 3:<a href="#"><IoLocationSharp /></a></b><br></br>
            179&180, Sidco Industrial Estate, Chennai – 600 098
        </div>
        <div className="Unit4">
            <b>Unit 4:<a href="#"><IoLocationSharp /></a></b><br></br>
            22B, Sidco Industrial Estate, Chennai – 600 098
        </div>
        <div className="Unit5">
            <b>Bhopal-Unit 5:<a href="#"><IoLocationSharp /></a></b><br></br>
            Plot No.E30, Industrial Area, Phase-II, Mandideep Tehsil Goharganj <br />District-462046 Raisen (M.P).
        </div>
        <div className="Unit6">
            <b>Bhopal-Unit 6:<a href="#"><IoLocationSharp /></a></b><br></br>
            Plot No.E31-E32, Industrial Area, Phase-II, Mandideep Tehsil Goharganj <br />District-462046 Raisen (M.P).
        </div>
        <div className="londonoffice">
            <b>London Office:<a href="#"><IoLocationSharp /></a></b><br></br>
            K-LITE Europe Ltd<br></br>
            271 Abbeydale Road, Wembley, HA0 1TW<br></br>
            Phone: 0208 012 8393<br></br>
            Email: info@klite.co.uk<br></br>
            Website: www.klite.co.uk<br></br>
        </div>
        <div className="dealer">
            <b>Dealer:</b><br></br>
            Haji Commercial Co LLC,<br></br>
            Office No 108, Yasmeen Office Towers<br></br>
            Abu Hail, Salah Al Din Street,<br></br>
            Dubai, U.A.E.<br></br>
            Phone: +971-4-2382555, +971-6-5356900<br></br>
            Email: info@hajicommercial.com<br></br>
            Website: www.hajicommercial.com<br></br>
        </div>


      </div>
      <div className="vertical-line"></div>
      <div className="cont2">
        <form onSubmit={Valid}>
        <h3>Enquiry Form</h3>
        <div className="enquiry">
        <label htmlFor="">Type of Enquiry</label><br></br>
        <select name="enquiry" id="enquiry">
          <option value="Product Enquiry">Product Enquiry</option>
          <option value="Service Support">Service Support</option>
          <option value="Ordering">Ordering</option>
          <option value="Business Opportunity">Business Opportunity</option>
          <option value="Career">Career</option>
          <option value="Other">Other</option>
        </select>
        </div>
        <div className="c">
        <div className="company">
          <label htmlFor="">Company name</label><br></br>
          <input type="text" name='company' id='company' onChange={(e) => setCompany(e.target.value)} />
          <p className='error'>{error}</p>
          </div>
        <div className="name">
          <label htmlFor="">Name</label><br></br>
          <input type="text" name='names' id='names'onChange={(e) => setNames(e.target.value)}/> 
          <p className='error'>{error}</p>
          </div></div><br />
          <div className="c1">
          <div className="contact">
          <label htmlFor="">Contact</label><br></br>
          <input type="number" name='contact' id='contact' onChange={(e) => setContact(e.target.value)}/>
          <p className='error'>{nerror}</p>
        </div>
        <div className="email">
          <label htmlFor="">Email</label><br></br>
          <input type="email" name='email' id='email' onChange={(e) => setEmail(e.target.value)}/>
          <p className='error'>{error}</p>
          </div>
          </div><br />
        <div className="address">
        <label htmlFor="">Address</label><br></br>
          <textarea name="address" id="address" cols={55} rows={7} onChange={(e) => setAdd(e.target.value)}></textarea>
          <p className='error'>{error}</p>
          </div>
        <div className="country">
          <label htmlFor="">Country</label><br></br>
          <input type="text" name='country' id='country' onChange={(e) => setCountry(e.target.value)}/>
          <p className='error'>{error}</p>
          </div><br />
      <div className="c2">
      <div className="city">
          <label htmlFor="">City</label><br></br>
          <input type="text" name='city' id='city' onChange={(e) => setCity(e.target.value)}/>
          <p className='error'>{error}</p>
          </div>
        <div className="post">
          <label htmlFor="">Pincode</label><br></br>
          <input type="number" name='post' id='post'onChange={(e) => setPost(e.target.value)}/> 
          <p className='error'>{error}</p>
          </div></div><br />
          <div className="c3">
          <div className="project">
          <label htmlFor="">Project</label><br></br>
          <input type="text" name='project' id='project' onChange={(e) => setProject(e.target.value)}/>
          <p className='error'>{error}</p>
          </div>
        <div className="role">
        <label htmlFor="">Your Role in project</label><br></br>
          <select name="role" id="role">
            <option value="Architech">Architech</option>
            <option value="Installer">Installer</option>
            <option value="Light designer">Light designer</option>
            <option value="Client">Client</option>
            <option value="Other">Other</option>
          </select>
          </div>
          <br />
        
      </div>
      <button type='submit'> Submit</button></form>
      </div>
    </div>
    
     <hr></hr> 
  
    <div className='foot'>
    <h4>&copy;K-LITE 2024||All Rights Reserved </h4>;
      <ul>
        <li><a href="#"><GrFacebookOption /></a></li>
        <li><a href="#"><IoLogoTwitter /></a></li>
        <li><a href="#"><TiSocialLinkedin /></a></li>
        <li><a href="#"><TfiYoutube /></a></li>
        <li><a href="#"><FaInstagram /></a></li>
        <li><a href="#"><IoLogoPinterest /></a></li>
        <li><a href="#"><IoLocationSharp /></a></li>
      </ul>
    </div>
    
    </div>
    </>
  )
}

export default App
