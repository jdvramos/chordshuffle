import MobileSidebar from "./mobile-sidebar";
import WelcomeMessage from "./welcome-message";

const Navbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <MobileSidebar />
            <WelcomeMessage />
        </div>
    );
};

export default Navbar;
