import { useState } from "react";

const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <nav className="w-full h-20 fixed top-0 z-40 border-b border-white/10 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg  p-5">
      <div className="flex max-w-5xl mx-auto items-center justify-between">
        <div className="logo text-3xl">
          Hass
          <span className="text-blue-600/80 font-bold tracking-wide">nain</span>
        </div>

        <div className="hamburger  z-50 md:hidden">
          <button
            onClick={() => setopen((prev) => !prev)}
            className="cursor-pointer"
          >
            {!open ? (
              <span className="material-symbols-outlined">menu</span>
            ) : (
              <span class="material-symbols-outlined">
&#10006;
</span>
            )}
          </button>

          {open && (
            <div className="  md:hidden min-w-screen left-1 -translate-x-1 duration-600 transition-trasform  absolute z-60   bg-[#0a0a0a]/70 flex flex-col min-h-screen  justify-center  items-center gap-8 text-gray-300/90 ">
              <a
                className={`tet-gray-300 hover:text-white  text-2xl font-semibold`}
                href="#home"
                onClick={()=>setopen(false)}
              >
                Home
              </a>
              <a
                className="tet-gray-300 hover:text-white duration-300 text-2xl font-semibold transform transition-transform"
                href="#about"
                onClick={()=>setopen(false)}
              >
                About
              </a>
              <a
                className="tet-gray-300 hover:text-white duration-300 text-2xl font-semibold transform transition-transform"
                href="#project"
                onClick={()=>setopen(false)}
              >
                Projects
              </a>
              <a
                className="tet-gray-300 hover:text-white duration-300 text-2xl font-semibold transform transition-transform"
                href="#contact"
                onClick={()=>setopen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>

        <div className="  hidden md:flex items-center gap-6 text-gray-300/90 ">
          <a
            className="tet-gray-300 hover:text-white transition-colors "
            href="#home"
          >
            Home
          </a>
          <a
            className="tet-gray-300 hover:text-white transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="tet-gray-300 hover:text-white transition-colors "
            href="#project"
          >
            Projects
          </a>
          <a
            className="tet-gray-300 hover:text-white transition-colors "
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
