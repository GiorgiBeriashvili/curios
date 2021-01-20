import HalfMoon from 'halfmoon';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface Element {
    atomicMass: string;
    atomicNumber: number;
    atomicRadius: number;
    boilingPoint: number;
    bondingType: string;
    cpkHexColor: string;
    density: number;
    electronAffinity: number;
    electronegativity: number;
    electronicConfiguration: string;
    groupBlock: string;
    ionRadius: string;
    ionizationEnergy: number;
    meltingPoint: number;
    name: string;
    oxidationStates: string;
    standardState: string;
    symbol: string;
    vanDelWaalsRadius: number;
    yearDiscovered: number;
}

interface RouteParams {
    id?: string | undefined;
}

const Element: React.FunctionComponent = () => {
    const [element, setElement] = useState<Element>();
    const [isLoaded, setIsLoaded] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [error, setError] = useState<any>(null);

    const { id } = useParams<RouteParams>();

    useEffect(() => {
        HalfMoon.onDOMContentLoaded();

        let isMounted = true;

        fetch(`https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=${id}`)
            .then((value) => value.json())
            .then(
                (value) => {
                    if (isMounted) {
                        setElement(value);
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
    }, [id]);

    if (error) {
        return <section>{error.message}</section>;
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
                    textAlign: 'justify',
                }}
            >
                <h1>{element?.name}</h1>
                <p>
                    <b>Symbol:</b> {element?.symbol}
                </p>
                <p>
                    <b>Atomic Number:</b> {element?.atomicNumber}
                </p>
                <p>
                    <b>Bonding Type:</b> {element?.bondingType}
                </p>
                <p>
                    <b>Electronic Configuration:</b> {element?.electronicConfiguration}
                </p>
                <p>
                    <b>Year Discovered:</b> {element?.yearDiscovered}
                </p>
            </section>
        );
    }
};

export default Element;
