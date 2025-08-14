import { useEffect, useState } from "react";

type Config = {
  eventLicenseDuration: { integerValue?: string };
  eventLicensePrice: { integerValue?: string };
  onlineOrderFee: { doubleValue?: number };
};

export default function useConfig() {
  const [config, setConfig] = useState<Config>();

  useEffect(() => {
    fetch(
      "https://firestore.googleapis.com/v1/projects/bstell-online/databases/(default)/documents/docs/config",
    )
      .then((res) => res.json())
      .then((res) => setConfig(res.fields))
      .catch(() => setConfig(undefined));
  }, []);

  return config;
}
