import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';
import "../../App.css";
import LogoHeader from '../../components/LogoHeader/LogoHeader';

const Features = () => {
    const navigate = useNavigate();

    return (
        <>
            <LogoHeader />
            <div className='div-head'>
                <h2>Checkout our FEATURES!</h2>
            </div>
            <div className="features-dashbody">

                <div className="box">
                    <h3>Health Goal Setting & Reminders</h3>
                </div>
                <div className="box">
                    <h3>Nutrition and Meal Recommendations</h3>
                </div>
                <div className="box" onClick={() => navigate('/symptoms')}>
                    <h3>Symptom Checker & Health Recommendations</h3>
                </div>
                <div className="box">
                    <h3>Automated Health Risk Assessment</h3>
                </div>
            </div>
        </>
    );
};

export default Features;
