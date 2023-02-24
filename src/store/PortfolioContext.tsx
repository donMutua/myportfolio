import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { getPortfolio, Portfolio } from "@/lib/api";

interface PortfolioContextProps {
  portfolio: Portfolio | null;
  isLoading: boolean;
  error: string | null;
}

const PortfolioContext = createContext<PortfolioContextProps>({
  portfolio: null,
  isLoading: false,
  error: null,
});

const PortfolioProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await getPortfolio();
      setPortfolio(data);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio, isLoading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };
