import React from "react";
import "../../assets/css/header.css";
import Logo from "./Logo";
import Button from "../ui-elements/Button";
import { useAuth } from "../../common/AuthProvider";
import { useNavigate } from "react-router-dom";

function Header() {
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="header-container grid grid-cols-6">
      <div className="col-span-1">
        <div className="px-20">
          <Logo />
        </div>
      </div>
      <div className="col-span-5 py-7">
        <div className="grid grid-cols-6">
          <div className="col-span-5">
            <div className="mandali-regular text-color-white header-title">
              Current Module Summary
            </div>
          </div>
          <div className="col-span-1">
            {token ? (
              <Button
                className="btn btn-danger col-span-2"
                value="Sign Out"
                onClick={handleLogout}
              />
            ) : (
              <Button className="btn btn-primary col-span-2" value="Sign In" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
