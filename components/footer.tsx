import { APP_NAME } from "@/lib/constants";
const FooterComponent = () => {
    //Getting the current year
    const currentYear = new Date().getFullYear()
    return ( <footer className="border-t">
        <div className="p-5 flex-center text-xs text-gray-500">
            {currentYear} {APP_NAME} . All Rights Reserved
        </div>

    </footer> );
}
 
export default FooterComponent;