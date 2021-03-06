import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from "react-query";
import {CANCELLED_TRIPS } from "../../GqlQueries";
import CancelCard from "./CancelCard";
import axios from "axios";

const CancelledData = () => {
    const { data, isLoading, error } = useQuery("cancelData", async () => {
        const response = await axios({
            url: process.env.REACT_APP_API_KEY,
            method: "POST",
            data: {
                query: CANCELLED_TRIPS
            }
        });
        return response.data.data;
      });

      
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    //console.log(data)
    return (
        <div className="d-grid gap-3">
            {data.cancelledTripTimes.map(result => (
                <CancelCard data={result} tripData={result.trip} />
            ))}
        </div>
    )
}


export default CancelledData;