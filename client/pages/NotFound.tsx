import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import Placeholder from "./Placeholder";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Placeholder
      title="Page Not Found"
      description="The page you're looking for doesn't exist or has been moved."
      icon={<AlertTriangle className="w-12 h-12 text-orange-500" />}
    />
  );
};

export default NotFound;
