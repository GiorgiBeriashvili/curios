import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FunctionComponent = () => (
    <div className="sidebar">
        <div className="sidebar-menu">
            {/* <Link to="/curios" className="hyperlink"> */}
            <h5 className="sidebar-title">Curios</h5>
            {/* </Link> */}
            <div className="sidebar-divider"></div>
            <Link to="/curios/gif-maker" className="sidebar-link sidebar-link-with-icon">
                <span className="sidebar-icon">
                    <i className="fa fa-file-image-o" aria-hidden="true"></i>
                </span>
                GIF Maker
            </Link>
            <Link to="/curios/periodic-table" className="sidebar-link sidebar-link-with-icon">
                <span className="sidebar-icon">
                    <i className="fa fa-flask" aria-hidden="true"></i>
                </span>
                Periodic Table
            </Link>
        </div>
    </div>
);

export default Sidebar;
