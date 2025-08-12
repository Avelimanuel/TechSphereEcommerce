"use client";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 px-4">
      {/* Logo */}
      <Image
        src={"/images/smartTechtechnologiesLogo.png"}
        width={60}
        height={60}
        alt={`${APP_NAME} logo`}
        priority
        className="mb-6"
      />

      {/* Error Box */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md text-center p-8 border border-red-100">
        <h1 className="text-4xl font-semibold text-red-500 mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn’t find the page you were looking for.
        </p>

        {/* Button */}
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 mx-auto"
          onClick={() => (window.location.href = "/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
