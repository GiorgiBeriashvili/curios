import React from 'react';

const About: React.FunctionComponent = () => (
    <div className="content">
        <h1 className="content-title mb-0" style={{ fontSize: '2.8rem' }}>
            About
        </h1>
        <p>This project encompasses numerous curios in one web application written in React.</p>
        <p>
            The project is open-source and hosted on{' '}
            <a href="https://github.com/GiorgiBeriashvili/academy-hub" className="hyperlink">
                GitHub
            </a>
            .
        </p>
        <p>
            Authors:&nbsp;
            <a href="https://github.com/GiorgiBeriashvili" className="hyperlink">
                Giorgi Beriashvili
            </a>
            .
        </p>
    </div>
);

export default About;
