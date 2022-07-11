import { gql } from "graphql-request";

export const ALL_ALERTS = gql
`
{
	alerts {
    id
    feed
    alertDescriptionText
    alertSeverityLevel
    alertUrl
    effectiveStartDate
    effectiveEndDate
    route {
      gtfsId
      longName
    }
    stop {
      gtfsId
      name
      lat
      lon
    }
  }
}
`
export const HSL_ALERTS = gql
`
{
	alerts(feeds: ["HSL"]) {
    id
    feed
    alertSeverityLevel
    alertDescriptionText
    alertUrl
    effectiveStartDate
    effectiveEndDate
    route {
      gtfsId
      longName
      shortName
    }
    stop {
      gtfsId
      name
      lat
      lon
    }
  }
}
`

export const CANCELLED_TRIPS = gql
`
{
    cancelledTripTimes(
      feeds: ["HSL"]
    ) {
      scheduledDeparture
      serviceDay
      trip {
        gtfsId
        tripHeadsign
        routeShortName
        directionId
        pattern {
          code
          name
        }
        route {
          gtfsId
          longName
          shortName
        }
      }
      realtimeState
      headsign
    }
  }
`

export const ROUTES_QUERY = gql
`
{
  routes(transportModes: BUS) {
    gtfsId
    shortName
    longName
    mode
  }
}

`