import React from "react";
import { removePopup } from "../../ui/React/createPopup";
import { IBladeburner } from "../IBladeburner";
import { WorldMap } from "../../ui/React/WorldMap";
import { CityName } from "../../Locations/data/CityNames";

interface IProps {
  bladeburner: IBladeburner;
  popupId: string;
}

export function TravelPopup(props: IProps): React.ReactElement {
  function travel(city: string): void {
    props.bladeburner.city = city;
    removePopup(props.popupId);
  }

  return (
    <>
      <p>
        Travel to a different city for your Bladeburner activities. This does not cost any money. The city you are in
        for your Bladeburner duties does not affect your location in the game otherwise.
      </p>
      <WorldMap currentCity={props.bladeburner.city as CityName} onTravel={(city: CityName) => travel(city)} />
    </>
  );
}
