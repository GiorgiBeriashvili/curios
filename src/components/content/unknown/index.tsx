import HalfMoon from 'halfmoon';
import React, { useEffect } from 'react';
import type { RouteComponentProps } from 'react-router-dom';

const Unknown = (props: RouteComponentProps): React.ReactElement => {
    useEffect(() => HalfMoon.onDOMContentLoaded(), []);

    return (
        <section>
            <h1>404 Error {props.match.url}</h1>
        </section>
    );
};

export default Unknown;
