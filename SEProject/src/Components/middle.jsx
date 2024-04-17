import React from 'react';
import '../style/Middle.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Home from '../images/Home.png'
function Middle() {
    return (
        <>
        <div className='pehle'>
            <div className='first'>
                <div>
                    <h1>Streamline your</h1>
                    <h1>documents today</h1>
                </div>

                <div>
                    <h6>Effortlessly manage, organise, and access all your important documents in</h6>
                    <h6>one secure location. Say goodbye to paperwork clutter and hello to</h6>
                    <h6>streamlined digital document management.</h6>
                </div>

                <div>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    style={{
                        '--bs-btn-padding-y': '.25rem',
                        '--bs-btn-padding-x': '.5rem',
                        '--bs-btn-font-size': '.75rem'
                    }}
                >
                    Login/Register
                </button>
            </div>
            </div>
            <div className='second'>
                <img src={Home} alt='' />
            </div>
           
        </div>

        <div className='rang'>

        </div>

       
        <div className='seam'>
            <h1 className='seam1'>Seamless Document Access</h1>
            <h1 className='seam2'>Anytime</h1>
        </div>

        
        <div className="grid text-center">
  <div className="g-col-6 g-col-md-4"><p><h3>Upload documents</h3><br/>
  easily upload your documents<br/>with just a click</p></div>
  <div className="g-col-6 g-col-md-4"><p><h3>Upload documents</h3><br/>
  easily upload your documents<br/>with just a click</p></div>
  <div className="g-col-6 g-col-md-4"><p><h3>Upload documents</h3><br/>
  easily upload your documents<br/>with just a click</p></div>
</div> 







        
        </>
        
    );
}

export default Middle;
