import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter = ({ seconds }) => {
    const getDigit = (number, position) => {
        return Math.floor(number / Math.pow(10, position)) % 10;
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark text-white p-3">
            <div className="d-flex align-items-center">
                <div className="bg-secondary p-2 m-1 rounded">
                    <FontAwesomeIcon icon={faClock} size="2x" />
                </div>
                <div className="bg-secondary p-2 m-1 rounded">{getDigit(seconds, 5)}</div>
                <div className="bg-secondary p-2 m-1 rounded">{getDigit(seconds, 4)}</div>
                <div className="bg-secondary p-2 m-1 rounded">{getDigit(seconds, 3)}</div>
                <div className="bg-secondary p-2 m-1 rounded">{getDigit(seconds, 2)}</div>
                <div className="bg-secondary p-2 m-1 rounded">{getDigit(seconds, 1)}</div>
                <div className="bg-secondary p-2 m-1 rounded">{getDigit(seconds, 0)}</div>
            </div>
        </div>
    );
};

export default SecondsCounter;
