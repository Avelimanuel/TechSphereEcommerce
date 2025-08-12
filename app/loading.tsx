import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src={loader}
          width={120}
          height={120}
          alt="Loading..."
          className="animate-pulse"
        />
        <p className="text-gray-500 text-sm">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
