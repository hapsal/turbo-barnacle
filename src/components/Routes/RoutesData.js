import React, { useMemo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useQuery } from "react-query";
import { ROUTES_QUERY } from "../../GqlQueries";
import Table from "./Table";

const RoutesData = () => {
      const { data, isLoading, error } = useQuery("routesData", async () => {
        const response = await axios({
              url: process.env.REACT_APP_API_KEY,
              method: "POST",
              data: {
                  query: ROUTES_QUERY
              }
          });
          return response.data.data; 
      });

      const columns = useMemo(
        () => [
            {
                Header: `Reitit`,
                columns: [
                    {
                        Header: "id",
                        accessor: "gtfsId"
                    },
                    {
                        Header: "Numero",
                        accessor: "shortName"
                    },
                    {
                        Header: "Reitti",
                        accessor: "longName"
                    },
                    {
                        Header: "",
                        accessor: "mode"
                    }
                ]
            },
        ],
        []
      );


    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    const { routes } = data;

    /* console.log(data) */
    return (
        <div className="d-grid gap-3">
            {data && <Table columns={columns} data={routes} />}
        </div>
    )
    
}

export default RoutesData;