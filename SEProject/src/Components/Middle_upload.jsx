import React from 'react';
import Upload from '../images/view.png'
function Middle_upload(){
    return(
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
                    <img src={Upload} alt='Upload' />
            </div>
           
        </div>

        <div className='rang'>

        </div>

        </>
    )
}

export default Middle_upload;