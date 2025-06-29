import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./lib/hooks/useApi.ts";

import AppConfigProvider from "@/components/layouts/AppConfigProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <BrowserRouter basename="/dashboard">
      <QueryClientProvider client={queryClient}>
        <AppConfigProvider>
          <App />
        </AppConfigProvider>
      </QueryClientProvider>
    </BrowserRouter>
  
    
  </React.StrictMode>
);
