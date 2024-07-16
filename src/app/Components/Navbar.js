import React from 'react';
import Image from 'next/image';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a class="navbar-brand text-warning" href="#">
            <Image className='m-2'  src="/favicon.ico" alt="Logo"  width={60} height={60} /> 
                Agent Willy</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item active">
                        <a class="nav-link text-warning" href="#">Scheduling</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-warning" href="#">Investment</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-warning" href="#">Tracking</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-warning" href="#">Currency</a>
                    </li>

                </ul>

            </div>
        </nav>
    );
}

export default Navbar;