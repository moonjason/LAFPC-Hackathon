import React, { Component } from 'react';

import NavStyle from './style';
import NavLink from './stylelink';

class Newnavbar extends Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

   

    render() {
        return (
            <NavStyle>
                <nav>
                    <main>
                        <div>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/">About</NavLink>
                           
                            
                        </div>
                        <article>
                            <NavLink to="/">Issues and Impact</NavLink>
                            <NavLink to="/">Programs</NavLink>
                            <NavLink to="/">Announcements</NavLink>
                        </article>
                        <section>
                            <NavLink to="/">Join Us</NavLink>
                            <NavLink to="/">Donate</NavLink>
                            <NavLink to="/">Dashboard</NavLink>
                        </section>
                    </main>
                </nav>
               
            </NavStyle >
        )

    }
};

export default Newnavbar;