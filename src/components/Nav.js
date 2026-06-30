import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store';
import { useState, useEffect } from 'react';

function Nav() {
    const { dark } = useSelector(s => s.profile);
    const dispatch = useDispatch();

    const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })
    );

    useEffect(() => {
    const interval = setInterval(() => {
        setTime(
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
        );
    }, 1000);

    return () => clearInterval(interval);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg shadow-sm sticky-top bg-body">
            <div className="container">
                <a className="navbar-brand fw-bold" href="/">
                    <i className="bi bi-code-slash" style = {{fontSize: '30px'}}></i>
                </a>
                <button className="btn btn-outline-primary">
                   <span className="fw-semibold">{time}</span>
                </button>
            </div>
        </nav>
    );
}

export default Nav;