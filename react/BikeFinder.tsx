import React, { useEffect, useMemo, useRef, useState } from "react";
import { canUseDOM } from "vtex.render-runtime";

import styles from "./styles.css";

interface BikeFinderProps {
  guideKey: string
}

const BikeFinder: StorefrontFunctionComponent<BikeFinderProps> = ({ guideKey }) => {
  const outputKey = guideKey;
  const renderTo = "preezie-widget-div-id";

  const data = `<script type="text/javascript">
    PREEZIE_GUIDE.render([
      {
        guideKey: "${outputKey}",
        version: "1.0.0",
        renderTo: "${renderTo}"
      }
    ]);
  </script>`;

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
  properties: {
    guideKey: {
      title: "Guide Key",
      type: "string"
    }
  }
}

export default BikeFinder;