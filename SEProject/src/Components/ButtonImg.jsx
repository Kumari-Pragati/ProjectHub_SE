import React from 'react';
import '../style/Buttonele.css'
import { Link } from 'react-router-dom';

function ButtonImg(){
    return(
        <>
     <>
  <div className='change'>
  <Link to="/View-Img" className="btn btn-primary btn-lg">
                    View Image
    </Link>
  </div>

  <div className='change_sec'>
  
  <Link to="/View-Pdf" className="btn btn-primary btn-lg">
                    View pdf
    </Link>
  </div>
</>

        </>
    )
}

export default ButtonImg;