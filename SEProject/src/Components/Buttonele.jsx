import React from 'react';
import '../style/Buttonele.css'
import { Link } from 'react-router-dom';

function Buttonele(){
    return(
        <>
     <>
  <div className='change'>
  <Link to="/upload-Img" className="btn btn-primary btn-lg">
                    Upload Image
    </Link>
  </div>

  <div className='change_sec'>
  
  <Link to="/upload-pdf" className="btn btn-primary btn-lg">
                    Upload pdf
    </Link>
  </div>
</>

        </>
    )
}

export default Buttonele;