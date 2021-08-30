import React, { useState, Component } from "react";
import StackGrid from "react-stack-grid";
import PropTypes from "prop-types";
import HotelCard from './HotelCard';
import Grid from '@material-ui/core/Grid';

export default function HotelStackGrid(props) {

  const [data, setData] = useState([]);

  const refresh = () => {

      const options = {
          method: "POST",
          mode : 'cors',
          redirect: "follow",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
              "client": {"ip": "1.2.3.4", "userAgent": "Example User Agent"},
              "currencies": ["USD"],
              "customerCountry": "FR",
              "customFields": [],
              "dates": {"from": "2021-09-01", "to": "2021-09-15"},
              "destinations": [{"id": 417309, "type": "location"}],
              "filters": [],
              "pax": [{"adults": 2}],
              "timeout": 12,
              "service": "hotels"
        })
      };
      const url = 'http://api.traviona.online/v1/hotel/search';
      try {
          fetch(url, options)
          .then((response) => {
              if (!response.ok) { throw response; }
              return response.json();
          })
          .then((json) => {
              if (json["results"])
                  setData(json["results"]);
              else
                  console.error(json);
          });
      } catch (err) {
          console.error(err);
      }
  };


  refresh();

    return (

    <Grid item md={8}>
      <StackGrid columnWidth={300}> {
        data.map((item, index) => (
          <HotelCard key={index} hotel={item} />
        ))
      }
      </StackGrid>
      </Grid>
    );

}