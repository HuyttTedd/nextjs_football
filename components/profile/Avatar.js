import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Avatar() {

  const image = 'https://w7.pngwing.com/pngs/819/47/png-transparent-soccer-field-under-sunlight-illustration-football-pitch-lawn-football-field-pattern-blue-image-file-formats-landscape-thumbnail.png';
  return (
    // <div className="p-3 bg-secondary m-auto mw-70">

    // </div>
    <div 
    className='m-auto bg-secondary d-flex justify-content-center position-relative' 
    style={{ 
        display: "block", 
        width: 1000, 
        height: 150,
        backgroundImage: `url(https://media.istockphoto.com/id/472347896/photo/striped-soccer-field.jpg}) cover`,
        backgroundRepeat: 'no-repeat',
    }}>
      <Image className='border border-5 border-success position-absolute bg-light mt-2'
        src="https://pngimage.net/wp-content/uploads/2018/06/pikachu-cara-png-1.png"
        roundedCircle
      />
    </div>
  )
}

export default Avatar