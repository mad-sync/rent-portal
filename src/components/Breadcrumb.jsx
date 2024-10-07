import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumb = ({ links }) => {
  const navigate = useNavigate();

  return (
    <div className="h-12 px-5 flex items-center justify-between bg-white">
      <div className="flex items-center">
        {React.Children.toArray(
          links.map((item, index) => (
            <button
              onClick={() => navigate(item?.link)}
              className="text-sm last:text-blue-600 text-[#121212]/70 first:pl-0 font-medium"
            >
              {item.name}
              {index !== links.length - 1 && (
                <span className="px-2 text-sm">/</span>
              )}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

Breadcrumb.protoTypes = {
  links: PropTypes.array,
};

export default Breadcrumb;
