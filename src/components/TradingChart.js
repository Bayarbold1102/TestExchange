import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

export default function TradingChart() {
  return (
    <>
      <div className="main-chart">
        <TradingViewWidget
          symbol="BITSTAMP:BTCUSD"
          theme={Themes.LIGHT}
          locale="fr"
          autosize
          hide_side_toolbar={false}
        />
      </div>
    </>
  );
}
