import React, { useState } from "react";
import Login from "../src/components/login1";
import { FormResponse } from "./types";

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormResponse | null>(null);

  const handleLoginSuccess = (data: FormResponse) => {
    setFormData(data);
    console.log("Fetched Form:", data);
  };

  return (
    <div style={{ padding: "20px" }}>
      {!formData ? (
        <Login onSuccess={handleLoginSuccess} />
      ) : (
        <h2>Form fetched successfully! Check the console.</h2>
      )}
    </div>
  );
};

export default App;
