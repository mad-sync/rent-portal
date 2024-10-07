import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'

const modules_list = [
  {
    name: "Dashboard",
    link: "/admin/dashboard",
    isActive: false,
    sub_modules: [],
  },
  {
    name: "Tenants",
    link: "/admin/tenants",
    isActive: false,
    sub_modules: [],
  },
  {
    name: "Payments",
    link: "/admin/payments",
    isActive: false,
    sub_modules: [],
  },
  {
    name: "Miscellaneous",
    link: "/admin/misc",
    isActive: false,
    sub_modules: [
      {
        name: "SubPage01",
        link: "/admin/misc/subpage01",
      },
      {
        name: "SubPage02",
        link: "/admin/misc/subpage02",
      },
    ],
  },
];

const Layout = ({ children }) => {
  const [allModules, setAllModules] = useState(modules_list);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const updateActiveState = (modules) => {
    return modules.map((module) => {
      const isActive =
        pathname.includes(module.link) ||
        module.sub_modules.some((sub) => pathname.includes(sub.link));
      const updatedSubModules = module.sub_modules.map((sub) => ({
        ...sub,
        isActive: pathname.includes(sub.link),
      }));
      return {
        ...module,
        isActive,
        sub_modules: updatedSubModules,
      };
    });
  };

  useEffect(() => {
    setAllModules(updateActiveState(modules_list));
  }, [pathname]);

  const [showMenu, setShowMenu] = useState(false);
  const [lMenu, setLMenu] = useState(false);

  if (
    pathname === "/login" ||
    pathname === "/forgot-password" ||
    pathname === "/"
  ) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col w-full relative min-h-screen">
      {/* Header */}
      <div className="h-12 bg-white w-full fixed top-0 left-0 z-10 lg:px-5 px-4 flex items-center shadow justify-between">
        <div className="flex">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="lg:hidden block"
          >
            <img
              src="/icons/burger.svg"
              alt="burger"
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </button>
        </div>

        <button
          onClick={() => {
            setLMenu(!lMenu);
          }}
          className="text-sm text-white font-medium relative"
        >
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-[#121212]">
            A
          </div>

          {lMenu && (
            <div className="absolute w-40 bg-blue-50 right-0 top-10 overflow-hidden shadow-xl">
              {React.Children.toArray(
                ["Edit profile", "Logout"].map((item) => (
                  <button
                    onClick={() => {
                      if (item === "Logout") {
                        navigate("/login");
                      }
                      setLMenu(false);
                    }}
                    className="text-sm py-2 text-[#121212] hover:bg-blue-500 hover:text-white w-full text-start px-3"
                  >
                    <p>{item}</p>
                  </button>
                ))
              )}
            </div>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div className="w-full flex flex-row h-full flex-shrink-0 relative">
        <div
          className={`lg:w-60 ${
            showMenu ? "flex flex-col" : "lg:flex flex-col hidden"
          } w-full h-full bg-[#121212] flex-shrink-0 overflow-y-auto fixed top-0 left-0 shadow lg:z-10 z-[9]`}
        >
          <div className="flex items-center px-5 h-12">
            <h2 className="text-white text-base lg:text-lg">
              Rental Management
            </h2>
          </div>

          {/* Modules menu listing*/}
          <div className="flex flex-col w-full">
            {React.Children.toArray(
              allModules.map((item, index) => (
                <div className="flex flex-col w-full" key={index}>
                  <button
                    onClick={() => {
                      if (!item.isActive) {
                        if (item.sub_modules.length > 0) {
                          let temp = [...modules_list];
                          temp[index] = {
                            ...temp[index],
                            isActive: true,
                          }
                          setAllModules(temp);
                        } else {
                          navigate(item.link);
                          setShowMenu(false);
                        }
                      }
                    }}
                    className={`h-[46px] w-full px-5 lg:text-sm text-xs text-start relative ${
                      item.isActive
                        ? item.sub_modules.length > 0
                          ? "text-white bg-[#27272A]"
                          : "text-white bg-blue-600"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                    {item.sub_modules.length > 0 && (
                      <div className="absolute top-0 right-5 h-full flex flex-col items-center justify-center">
                        <img
                          width={12}
                          height={12}
                          src="/icons/accArrow.svg"
                          alt="accArrow"
                          className={`w-3 h-3 invert ${
                            item.isActive ? "-rotate-180" : ""
                          }`}
                        />
                      </div>
                    )}
                  </button>

                  {/* Sub modules menu listing*/}
                  <div
                    className={`w-full bg-[#27272A] ${
                      item.isActive ? "flex flex-col" : "hidden"
                    }`}
                  >
                    {React.Children.toArray(
                      item.sub_modules.map((child) => (
                        <button
                          onClick={() => {
                            navigate(child.link);
                          }}
                          className={`h-[46px] w-full px-5 lg:text-sm text-xs text-start ${
                            child.isActive
                              ? "text-white bg-blue-600"
                              : "text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 ${
                                child.isActive ? "bg-white" : "bg-[#808080]/50"
                              } rounded-full`}
                            />
                            {child.name}
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:ml-60 w-full min-h-screen flex flex-col bg-[#f2f2f2] pt-12">
          {children}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout;
