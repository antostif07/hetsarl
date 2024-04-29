import Logo from "../components/Logo";
import Navbar from "./components/Navbar";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="bg-white relative">
            <Navbar />
            {children}
            <footer className="flex flex-col bg-slate-900 text-white py-10 gap-8 justify-center items-center">
                <div>
                    <Logo />
                </div>
                <div>
                © 2024 HTE Sarl, All rights reserved.
                </div>
            </footer>
        </div>
    );
  }