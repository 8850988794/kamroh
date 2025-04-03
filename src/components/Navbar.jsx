import ContactUs from "./modal/ContactUs";

export default function Navbar() {
  return (
    <div className="md:max-w-[90vw] navbar absolute mt-4 flex justify-between bg-transparent shadow-lg px-2 md:px-6 rounded-[1.5rem] mx-auto left-0 right-0 z-20">
      <div className="flex items-center gap-2 cursor-pointer text-black font-semibold">
        <img
          src="/logo-no-background.svg"
          alt="Kamroh Logo"
          width={70}
          height={70}
          className="object-contain"
        />
        {/* <span className="text-lg tracking-wide">Kamroh</span> */}
      </div>
      <div className="hidden md:flex justify-around">
        <ul className="flex items-center menu menu-horizontal px-1">
          {/* <li className="px-2">
            <a>Home</a>
          </li>
          <li className="px-2">
            <a>Products</a>
          </li>
          <li className="px-2">
            <a>FAQ</a>
          </li> */}
          {/* <li className="px-2">
            <button
              className="btn btn-block btn-base-100 rounded-box font-light"
              // onClick={() => setContactModal((prev) => !prev)}
              onClick={()=>document.getElementById('my_modal_1').showModal()}
            >
              Contact Us
            </button>
          </li> */}
        </ul>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>FAQ</a>
            </li> */}
            {/* <li>
              <button
                className="btn"
                onClick={() => setContactModal((prev) => !prev)}
              >
                Contact Us
              </button>
            </li> */}
          </ul>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
