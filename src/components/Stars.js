import React from "react";
import PropTypes from "prop-types";
import star from "../assets/img/star.png";
import { nanoid } from 'nanoid';

const Stars = (props) => {
    Stars.propTypes = {
        text: PropTypes.number,
    };
    const key = nanoid();
    const stars = [];
    for (let i = 0; i < props.text; i++) {
        stars.push(<img key={key+1} src={star} alt={props.text} />);
    }
    return <React.Fragment>{stars}</React.Fragment>;
};

export default Stars;
