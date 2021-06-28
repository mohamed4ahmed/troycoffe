import React from "react";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup ,Tooltip } from 'react-leaflet';
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { iconTroy } from "./IconMarker";
import logoImg from "../../../assets/img/IMG-20210617-WA0068.jpg";

const Map = () => {

	const position = [30.973947,31.181758];
	const zoom = 18;
	return (
		<div className="map">
			<LeafletMap center={position} zoom={zoom}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position} icon={iconTroy}>
					<Popup>
						<div className="info-container">
							<div
								className="info__logo"
								// style={{ backgroundImage: `url(${logoImg})` }} 
							> 
								<img src={logoImg} alt="logo" />
							</div>
							<div className="info__name">TROY Coffee  Tea</div>
							<div className="info__address">
                            2st Nour Eleman, Elmahala-Elkoubra, Gharbia, Egypt
							</div>
						</div>
					</Popup>
					<Tooltip>TROY Coffee  Tea</Tooltip>
				</Marker>
			</LeafletMap>
		</div>
	);
};

export default Map;