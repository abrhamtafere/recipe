import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormField() {
  return (
    <Form>
      <div className='row '>
        <div className='col-12 text-center'>
          <p className='reservation text-center fs-5 mt-3'>Reservation ----</p>
          <h1 className='display-4 fw-bold text-white'>Book A Table Online</h1>
        </div>
      <div className='col-5 m-3'>
          <Form.Control className=' py-3 border-none' type="name" placeholder="Your name" />
        </div>
        <div className='col-5 m-3'>
          <Form.Control className=' py-3' type="email" placeholder="Enter email" />
        </div>
        <div className='col-5 m-3'>
          <Form.Control className='py-3' type="date" placeholder="Date &amp; time" />
        </div>
        <div className='col-5 m-3'>
          <Form.Control className=' py-3' type="peple" placeholder="people" />
        </div>
        <div className='col-11 py-3 mb-3  ms-3'>
          <Form.Control placeholder='Special Request' as="textarea" rows={3} />
        </div>
        <div className='col-11 mb-3 '>
          <Button className='w-100 text-center ms-3 py-3 fs-4' type="submit">
           Book Now
          </Button>
      </div>
      </div>
      
      
    </Form>
  );
}

export default FormField;