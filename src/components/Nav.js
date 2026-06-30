import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store';

function Nav() {
    const { dark } = useSelector(s => s.profile);
    const dispatch = useDispatch();
    return (
        <nav className="navbar navbar-expand-lg shadow-sm sticky-top bg-body">
            <div className="container">
                <a className="navbar-brand fw-bold" href="/">
                    <i className="bi bi-code-slash" style = {{fontSize: '30px'}}></i>
                </a>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => dispatch(toggleTheme())}>
                    <i className={`bi ${dark ? 'bi-sun' : 'bi-moon'}`}></i>
                </button>
            </div>
        </nav>
    );
}

export default Nav;