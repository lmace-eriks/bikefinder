import React, { useEffect, useMemo, useRef, useState } from "react";
import { canUseDOM } from "vtex.render-runtime";

import styles from "./styles.css";

interface BikeFinderProps {
  guideKey: string
}

const BikeFinder: StorefrontFunctionComponent<BikeFinderProps> = ({ guideKey }) => {

  useEffect(() => {
    // @ts-expect-error
    window.PREEZIE_GUIDE.render([
      {
        guideKey,
        version: "1.0.0",
        renderTo: "preezie-widget-div-id",
      },
    ]);

    return () => { };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div id="preezie-widget-div-id"></div>
      </div>
    </div>
  );
}

BikeFinder.schema = {
  title: "Bike Finder",
  type: "object",
  properties: {
    guideKey: {
      title: "Guide Key",
      type: "string"
    }
  }
}

export default BikeFinder;
