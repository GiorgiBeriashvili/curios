import HalfMoon from 'halfmoon';
import React, { useEffect } from 'react';

const Curios: React.FunctionComponent = () => {
    useEffect(() => HalfMoon.onDOMContentLoaded(), []);

    return (
        <section>
            <h1>Curios</h1>
        </section>
    );
};

export default Curios;
