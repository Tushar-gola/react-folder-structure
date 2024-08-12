import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const LoginCallback = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("jwt") as string | null;
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }else{
      navigate('/login')
    }
  }, [token, navigate]);

  return null;
};
