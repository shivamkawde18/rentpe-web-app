import React, { useState } from "react";
import { Breadcrumb, Button, Layout, Menu, Drawer, Radio, Space } from "antd";
import "./NavbarStyle.css";
import "antd/dist/antd.css";
import { useMediaQuery } from "react-responsive";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { UserOutlined, MenuOutlined, CarOutlined } from "@ant-design/icons";
import { SearchInput } from "rentpe-ui-component-library";
import { RiEBikeLine } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <div>
      {isMobile && (
        <>
          <Space>
            <MenuOutlined
              style={{ padding: 10, fontSize: 30 }}
              onClick={showDrawer}
            />
          </Space>
          <Drawer
            placement="left"
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
            bodyStyle={{ backgroundColor: "#001529" }}
          >
            <Space>
              <MenuOutlined
                className="closeMenu"
                style={{
                  padding: 10,
                  fontSize: 30,
                  color: "white",
                  position: "relative",
                  bottom: "25px",
                  left: "300px",
                }}
                onClick={onClose}
              />
            </Space>
            <div className="drawer">
              <div className="iconDiv">
                <AiFillCar className="car" style={{ color: "white" }} />
                <b className="navigation"> Car</b>
              </div>
              <div className="iconDiv">
                <RiEBikeLine className="car" style={{ color: "white" }} />
                <b className="navigation">Bike</b>
              </div>
              <div className="iconDiv">
                <GiClothes className="car" style={{ color: "white" }} />
                <b className="navigation">Clothes</b>
              </div>
              <div className="iconDiv">
                <MdOutlineMapsHomeWork
                  className="car"
                  style={{ color: "white" }}
                />
                <b className="navigation">Home</b>
              </div>
              <div className="iconDiv">
                <GiHomeGarage className="car" style={{ color: "white" }} />
                <b className="navigation">Marrige Hall</b>
              </div>
              <div>
                <AiOutlineUser
                  className=" car"
                  style={{
                    fontSize: "30px",
                    width: "fit-content",
                    color: "white",
                  }}
                ></AiOutlineUser>
                <b className="navigation">Profile</b>
              </div>
            </div>
          </Drawer>
        </>
      )}
      {isDesktopOrLaptop && (
        <div className="navbarDiv">
          <b className="navigation">rentPe</b>
          <b className="navigation">Car</b>
          <b className="navigation">Bike</b>
          <b className="navigation">Clothes</b>
          <b className="navigation">Home</b>
          <b className="navigation">Marrige Hall</b>
          <UserOutlined
            className="navigation"
            style={{
              fontSize: "30px",
              width: "fit-content",
              color: "white",
            }}
          ></UserOutlined>
          {/* <SearchInput palceholder="Enter Type" ></SearchInput> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
