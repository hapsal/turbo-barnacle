import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { request } from "graphql-request";
import { useQuery } from "react-query";
import { HSL_ALERTS } from "../../GqlQueries";
import AlertCard from "./AlertCard";

const endpoint = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql/"; 

const AlertData = () => {
    const { data, isLoading, error } = useQuery("alerts", () => {
        return request(endpoint, HSL_ALERTS);
      });

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    
  const removeDuplicateObjects = (array, key) => {
    const set = new Set()

    return array.filter(item => {
        const hasSameKey = set.has(item[key])
        set.add(item[key])

        return !hasSameKey
    })
  }
  
  console.log(removeDuplicateObjects(data.alerts, 'alertDescriptionText'))

    return (
        <div className="d-grid gap-3">      
            {removeDuplicateObjects(data.alerts, 'alertDescriptionText').sort((a, b) => a.effectiveStartDate > b.effectiveStartDate ? -1 : 1).map(result => (
                <AlertCard alert={result} />
            ))}
        </div>
    )
    
}

export default AlertData;