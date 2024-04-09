import React from "react";
import GoogleMapReact from "google-map-react";
import { FaCarRear } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

type Props = {
  geo_location : {
    latitude: number;
    longitude: number;
  }
}
export default function SimpleMap({geo_location}: Props) {
  const defaultProps = {
    center: {
      lat:  geo_location?.latitude,
      lng: geo_location?.longitude,
    },
    zoom: 15,
  }
  const MapMarker = ({  }) => <div>
   <div className="flex flex-col items-center">
   <FaMapMarkerAlt className="text-2xl text-primary" />
   <div className="text-xl w-[200px] text-center font-bold text-primary">Buz Vadisi</div>
   </div>
  </div>;

  // yol tarifi al
  const GetDirections = () => {
    return (
      <div
        className="
      absolute bottom-2 left-2 bg-primary text-white px-2 py-1 rounded-md
      "
      >
        <div className="relative">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${defaultProps.center.lat},${defaultProps.center.lng}`}
            target="_blank"
            rel="noreferrer"
            className="text-base"
          >
            Adrese Git<FaCarRear className="text-2xl absolute top-0 -right-9 text-primary" />
          </a>
          
        </div>
      </div>
    );
  };
  return (
    // Important! Always set the container height explicitly
    <div className="w-full h-[50vh] relative">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBbcd7PwwmbvZphx9PtVNKkxywRBBN2xyg" }}
        defaultCenter={defaultProps.center}
        yesIWantToUseGoogleMapApiInternals={true}
        defaultZoom={defaultProps.zoom}
        // adrese götür ekle
      >
         <MapMarker
          lat= {geo_location?.latitude}
          lng= {geo_location?.longitude}
        />
      </GoogleMapReact>
      <GetDirections />
    </div>
  );
}
