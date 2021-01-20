import HalfMoon from 'halfmoon';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toastAlert } from '../../shared/Toast';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IntroductionProps {}

interface IntroductionState {
    choosing: boolean;
    route: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CurioPickerProps {
    (navigateTo: string): void;
}

interface CurioPickerState {
    curio: string;
}

class CurioPicker extends React.Component<CurioPickerProps, CurioPickerState> {
    constructor(props: CurioPickerProps) {
        super(props);

        this.state = {
            curio: '/curios/gif-maker',
        };
    }

    render(): JSX.Element {
        return (
            <section>
                <select
                    name="curio"
                    onChange={(event) => {
                        this.setState({ curio: event.target.value });

                        toastAlert(`Picked ${event.target.value}!`);
                    }}
                    value={this.state.curio}
                >
                    <option value="/curios/gif-maker">GIF Maker</option>
                    <option value="/curios/periodic-table">Periodic Table</option>
                </select>
                <button
                    onClick={() => this.props.navigateTo(this.state.curio)}
                    className="btn btn-primary ml-5 mr-5"
                    type="button"
                >
                    Pick Curio
                </button>
            </section>
        );
    }
}

class Introduction extends React.Component<IntroductionProps, IntroductionState> {
    constructor(props: IntroductionProps) {
        super(props);

        this.state = {
            choosing: false,
            route: '',
        };
    }

    componentDidMount(): void {
        HalfMoon.onDOMContentLoaded();
    }

    render(): JSX.Element {
        return this.state.choosing ? (
            <CurioPicker
                navigateTo={(link) => {
                    this.setState({ choosing: false, route: link });

                    console.log(link, this.state);
                }}
            />
        ) : (
            <section>
                <button
                    className="btn"
                    onClick={() => {
                        toastAlert('Choose the Curio!');

                        this.setState({ choosing: true });
                    }}
                    type="button"
                >
                    Quick Navigation
                </button>
                {this.state.route !== '' && (
                    <Link to={this.state.route}>
                        <button className="btn btn-primary ml-5 mr-5" type="button">
                            Navigate
                        </button>
                    </Link>
                )}
            </section>
        );
    }
}

export default Introduction;
