import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";


export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledflags] = useState(null);


  async function fetchFeatureFlags() {
    setLoading(true);
    try {
      const response = await featureFlagsDataServiceCall();
      setEnabledflags(response);
      console.log(response)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      throw (error)
    }
  }

  useEffect(() => {
    fetchFeatureFlags()
  }, [])
  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}