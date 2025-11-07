import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function AuthSuccess() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      console.warn("❌ No token found in URL");
      setChecked(true);
      setTimeout(() => navigate("/login"), 1500);
      return;
    }

    localStorage.setItem("token", token);
    console.log("✅ Token saved:", token);

    setChecked(true);
    setTimeout(() => navigate("/"), 1500);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      <h1 className="text-2xl font-bold text-primary mb-3">
        {checked ? "Processing login..." : "Verifying..."}
      </h1>
      <p className="text-gray-500">
        Please wait while we verify your credentials.
      </p>
    </div>
  );
}
