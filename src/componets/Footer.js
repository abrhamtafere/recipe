const Footer = () => {
  return (
    <div className='row'>
      <div className="col-3">
        <h1 className="header">Company</h1>
        <ul>
          <li>About Us </li>
          <li>Contact Us </li>
          <li>Reservation </li>
          <li>Privancy Policy</li>
          <li>Terms &amp; Condition </li>
        </ul>
      </div>
      <div className="col-3">
        <h1 className="header">Contact</h1>
        <ul>
          <li>123 Street, New York, USA </li>
          <li>+012 345 67890</li>
          <li>info@example.com</li>
          <li>Privancy Policy</li>
          <li>Terms &amp; Condition </li>
        </ul>
      </div>
      <div className="col-3">
        <h1 className="header">Opening</h1>
        <ul  style={{listStyle: 'none'}}>
          <li>Monday - Saturday</li>
          <li>09AM - 09PM</li>
          <li>Sunday </li>
          <li>10AM - 08PM</li>
        </ul>
      </div>
      <div className="col-3">
        <h1 className="header">Newsletter</h1>
        <ul style={{listStyle: 'none'}}>
        <li>Dolor amet sit justo amet elitr clita ipsum elitr est.</li>
        <li className="text-muted">Developed by Abrham Tafere</li>
        <li className=" fw-bold">+251921278425</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

