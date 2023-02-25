import React from "react";

import { homeDesktopImages } from "../../assets/home/home.images";
import {ReactComponent as Circles} from '../../assets/home/desktop/pattern-circles.svg'
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const NewProductHighlight = () => {
  const { desktopSpeakerZx9Img } = homeDesktopImages;
  return (
    <div>
        <Circles/>
      <img src={desktopSpeakerZx9Img} alt="speaker-zx9" />
      <div>
        <h1>Zx9 speaker</h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button buttonType={BUTTON_TYPE_CLASSES.buttonTwo}>See Product</Button>
      </div>
    </div>
  );
};

export default NewProductHighlight;
