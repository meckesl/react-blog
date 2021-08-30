import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Image from "react-graceful-image";
import Stars from "./Stars";
// import Availability from "./Availability";

export default function HotelCard(props) {
    HotelCard.propTypes = {
        hotel: PropTypes.object,
        link: PropTypes.string,
        cityName: PropTypes.string,
    };

    const { hideAddress, cityName } = props;
    let { hotel, link } = props;

    let price = "";
    if (hotel["price"]) {
        price = `$${hotel["price"]["amount"]}`;
    }

    hotel = hotel["items"][0];

    if (!link || link === "") {
        link = `/hotel/${hotel["hotelId"]}`;
    }
    //<Availability hotelName={hotel["HotelName"]} cityName={cityName} hotelCode={hotel["hotelId"]} />

    return (
        <Image src={ 'http://api.traviona.online/v1/static/hotel/img/' + hotel["hotelId"] } alt="..." width={200}/>
    )
    /*
        <div>
            <div>
                <Image src={ 'http://api.traviona.online/v1/static/hotel/img/' + hotel["hotelId"] } alt="..." />
                <div >
                    <h4>{hotel["name"]}</h4>
                    <h6>
                        <Stars text={hotel["Rating"]} />
                    </h6>
                    <p>From {price}</p>
                    <p className="card-text">{hotel["category"]}</p>
                    <p className="card-text">{hotel["HotelAddress"]}</p>

                </div>
            </div>
        </div>
    );*/
};