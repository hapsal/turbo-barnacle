import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { request } from "graphql-request";
import { useQuery } from "react-query";
import {CANCELLED_TRIPS } from "../../GqlQueries";
import CancelCard from "./CancelCard";

const endpoint = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql/";

const CancelledData = () => {
    const { data, isLoading, error } = useQuery("cancelled", () => {
        return request(endpoint, CANCELLED_TRIPS);
      });

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    console.log(data)
    return (
        <div className="d-grid gap-3">
            {data.cancelledTripTimes.map(result => (
                <CancelCard data={result} />
            ))}
        </div>
    )
}


export default CancelledData;