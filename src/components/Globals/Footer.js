import React from 'react'


export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
                    <h3>© {new Date().getFullYear().toString()}. All Rights Reserved. </h3>
                </div>
            </div>
            </div>
        </footer>
    )
}
