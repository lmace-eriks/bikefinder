import React, { useEffect, useMemo, useRef, useState } from "react";
import { canUseDOM } from "vtex.render-runtime";

import styles from "./styles.css";

interface BikeFinderProps {

}

const BikeFinder: StorefrontFunctionComponent<BikeFinderProps> = ({ }) => {
  const guideKey = "3e52abd5-738d-43ab-bdb2-d64e469a6ab5";
  const renderTo = "preezie-widget-div-id";
  const renderData = {
    guideKey,
    version: "1.0.0",
    renderTo
  }

  const data = `<script type="text/javascript">PREEZIE_GUIDE.render([${renderData}]);</script>`;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div id={renderTo}></div>
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </div>
    </div>
  );
}

BikeFinder.schema = {
  title: "Bike Finder",
  type: "object",
  properties: {}
}

export default BikeFinder;