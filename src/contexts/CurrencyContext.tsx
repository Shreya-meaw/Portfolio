import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CurrencyContextType {
  currency: "USD" | "INR";
  exchangeRate: number | null;
  loadingRate: boolean;
  toggleCurrency: () => void;
  formatPrice: (priceStr: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loadingRate, setLoadingRate] = useState(true);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();
        if (data && data.result === "success" && data.rates && data.rates.INR) {
          console.log("Exchange rate fetched:", data.rates.INR);
          setExchangeRate(data.rates.INR);
        } else {
          console.warn("Invalid exchange rate data", data);
        }
      } catch (error) {
        console.error("Error fetching exchange rate", error);
      } finally {
        setLoadingRate(false);
      }
    };
    fetchRate();
  }, []);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "USD" ? "INR" : "USD"));
  };

  // Parse price string like "$150 – $250" or "$450 – $850"
  const parsePriceRange = (priceStr: string): [number, number] | null => {
    if (!priceStr || priceStr.toLowerCase().includes("startup")) return null;

    // Match two numbers separated by any non-digit chars (dash, space, etc)
    const match = priceStr.match(/(\d+)[^\d]+(\d+)/);
    if (match) {
      const min = Number(match[1]);
      const max = Number(match[2]);
      if (!isNaN(min) && !isNaN(max)) return [min, max];
    }

    // If no range, try single number
    const singleMatch = priceStr.match(/(\d+)/);
    if (singleMatch) {
      const val = Number(singleMatch[1]);
      if (!isNaN(val)) return [val, val];
    }

    return null;
  };

  const formatPrice = (priceStr: string): string => {
    if (!priceStr) return "Startup Collaboration";
    if (currency === "USD") return priceStr;

    if (loadingRate) return "Loading...";
    if (!exchangeRate) return "Rate unavailable";

    const range = parsePriceRange(priceStr);
    if (!range) return priceStr;

    const [min, max] = range;
    const minINR = Math.round(min * exchangeRate);
    const maxINR = Math.round(max * exchangeRate);

    if (minINR === maxINR) return `₹${minINR.toLocaleString()}`;
    return `₹${minINR.toLocaleString()} – ₹${maxINR.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        exchangeRate,
        loadingRate,
        toggleCurrency,
        formatPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
