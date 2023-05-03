const Footer = () => {
  return (
    <div className='row'>
      <div className="col-12 col-sm-6 col-lg-3">
        <h1 className="header">Company</h1>
        <ul>
          <li>About Us </li>
          <li>Contact Us </li>
          <li>Reservation </li>
          <li>Privancy Policy</li>
          <li>Terms &amp; Condition </li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <h1 className="header">Contact</h1>
        <ul>
          <li>Bole, Wello Sefer, Ethiopia </li>
          <li>+2519 456 78910</li>
          <li>info@example.com</li>
          <li>Privancy Policy</li>
          <li>Terms &amp; Condition </li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <h1 className="header">Opening</h1>
        <ul  style={{listStyle: 'none'}}>
          <li>Monday - Saturday</li>
          <li>09AM - 09PM</li>
          <li>Sunday </li>
          <li>10AM - 08PM</li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <h1 className="header">Newsletter</h1>
        <ul style={{listStyle: 'none'}}>
        <li>Dolor amet sit justo amet elitr clita ipsum elitr est.</li>
        <li className="text-muted"><a href='https://www.linkedin.com/in/abrham-tafere-2b53a3241/' >Developed by Abrham Tafere</a></li>
        <li className=" fw-bold">+251921278425</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

