import { Button } from "@/components/ui/button";
import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";

type SocialProvider = "facebook" | "google" | "microsoft";

interface SocialButtonProps {
  provider: SocialProvider;
}

export default function SocialButton({ provider }: SocialButtonProps) {
  const getIcon = () => {
    switch (provider) {
      case "facebook":
        return <FaFacebook className="text-[#1877F2] h-5 w-5" />;
      case "google":
        return <FaGoogle className="text-[#DB4437] h-5 w-5" />;
      case "microsoft":
        return <FaMicrosoft className="text-[#0078D4] h-5 w-5" />;
    }
  };

  const handleClick = () => {
    // In a real implementation, this would redirect to the OAuth provider
    console.log(`Authenticating with ${provider}`);
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleClick}
      className="w-full flex justify-center py-2 px-4"
    >
      {getIcon()}
    </Button>
  );
}
