import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const HeaderComponent = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href={"/"} className="flex-start">
            <Image
              src={"/images/techspherelogo.png"}
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <div className=" flex items-center w-3.5 ">
              <span className="hidden ml-3 font-bold text-xs lg:block">{`${APP_NAME}`}</span>
            </div>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default HeaderComponent;
