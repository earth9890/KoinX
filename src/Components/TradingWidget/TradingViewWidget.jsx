// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const JS_Script = document.createElement("script");
    JS_Script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    JS_Script.type = "text/javascript";
    JS_Script.async = true;
    JS_Script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|1M"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": true,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1w|15",
            "1m|30",
            "3m|60",
            "6m|120",
            "12m|1D",
            "all|1M"
          ],
          "lineColor": "rgba(49, 121, 245, 1)"
        }`;
    container.current.appendChild(JS_Script);
  }, []);

  return (
    <div
      className="tradingview-widget-container h-screen mx-auto md:mx-2"
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
