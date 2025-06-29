import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import PageLoader from "../template/PageLoader";

interface AppConfigContextProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  refreshToken: () => Promise<void>;
}

const AppConfigContext = createContext<AppConfigContextProps | undefined>(
  undefined
);

const AppConfigProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppConfigContext.Provider
      value={{ isLoading, refreshToken:"refreshToken", setIsLoading }}
    >
      {isLoading ? <PageLoader /> : children}
    </AppConfigContext.Provider>
  );
};
export const useAppConfig = () => {
  const context = useContext(AppConfigContext);
  if (context === undefined) {
    throw new Error("useAppConfig must be used within a AppConfigProvider");
  }
  return context;
};

export default AppConfigProvider;
