import React, { Component } from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

class Footer extends Component {
    render() {
        return (
            <MDBFooter style={{ backgroundColor: '#000000' }} className='text-center text-lg-left'>
                <MDBContainer className='p-4'>
                    <MDBRow>
                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase' style={{ color: '#ffffff' }}>Footer text</h5>

                            <p style={{ color: '#ffffff' }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                                est atque cumque eum delectus sint!
                            </p>
                        </MDBCol>

                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase' style={{ color: '#ffffff' }}>Footer text</h5>

                            <p style={{ color: '#ffffff' }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                                est atque cumque eum delectus sint!
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <div className='text-center p-3' style={{ color: '#ffffff' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a style={{ color: '#ffffff' }} href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;
