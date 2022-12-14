import Typography from "@src/components/Typography/Typography";
import React, { PropsWithChildren } from "react";

interface CoinScreenProps {}

const CoinScreen: React.FC<PropsWithChildren<CoinScreenProps>> = () => {
  return <Typography>COIN</Typography>;
};

export default CoinScreen;
