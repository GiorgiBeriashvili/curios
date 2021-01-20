import HalfMoon from 'halfmoon';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Element } from './Element';

const PeriodicTable: React.FunctionComponent = () => {
    const [elements, setElements] = useState<Array<Element>>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        HalfMoon.onDOMContentLoaded();

        let isMounted = true;

        fetch('https://neelpatel05.pythonanywhere.com/')
            .then((value) => value.json())
            .then(
                (value) => {
                    if (isMounted) {
                        setElements(value);
                        setIsLoaded(true);
                    }
                },
                (error) => {
                    if (isMounted) {
                        setError(error);
                        setIsLoaded(true);
                    }
                },
            );

        return () => {
            isMounted = false;
        };
    }, []);

    if (error) {
        return <section>{error?.message}</section>;
    } else if (!isLoaded) {
        return (
            <section>
                <h1>Loading...</h1>
            </section>
        );
    } else {
        return (
            <section
                style={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1>The Periodic Table of Elements</h1>
                {elements.map((elements) => (
                    <div
                        className="card horizontal"
                        style={{ width: '256px', margin: '24px' }}
                        key={elements.atomicNumber}
                    >
                        <div className="card-content">
                            <p>{elements.name}</p>
                            <p>{elements.symbol}</p>
                        </div>
                        <div className="card-action">
                            <Link
                                to={`/curios/periodic-table/elements/${elements.atomicNumber}`}
                                className="blue-grey-text"
                                style={{ textAlign: 'center' }}
                            >
                                See Details
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        );
    }
};

export default PeriodicTable;
