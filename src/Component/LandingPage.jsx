import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Add";
import { ToastContainer } from "react-toastify";

const LandingPage = () => {
  const [value, setValue] = useState(0);
  function handleClick(event) {
    event.preventDefault();
    console.info("event");
  }

  const BarStyle = {
    width: "85rem",
    background: "#F0F0F0",
    border: "none",
    padding: "0.5rem",
    borderRadius: "0.5rem",
  };

  return (
    <div className="bg-primary text-3xl p-52 pt-28 wrapper">
      <BottomNavigation
        sx={{ width: 900 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={BarStyle}
      >
        <div className="flex justify-content ml-auto" role="presentation" onClick={handleClick}>
          <NavLink to="/contact" className="text-black font-bold hover:text-orange">
            Contact us
          </NavLink>
          <div className="font-bold text-xl hover:bg-orange-700">
            <button
              style={{
                background: "#CE5A29",
                textAlign: "center",
                marginLeft: "2em",
                width: "70%",
                padding: "0.4rem",
                borderRadius: "0.3rem",
              }}
              type="submit"
            >
              Signup
            </button>
          </div>
        </div>
      </BottomNavigation>

      {/* 2nd SESSION */}
      <div className="flex justify-between">
        <div className="mt-44">
          <div>
            <h1 className="font-bold text-6xl pb-5">Make your Party fun!</h1>
            <p className="pb-5  font-medium text-3.5xl">
              Create your own custom playlist today.
            </p>
          </div>
          <div>
            <button
              style={{
                background: "#CE5A29",
                textAlign: "center",
                width: "40%",
                borderRadius: "0.3rem",
                padding: "0.3rem",
              }}
              type="submit"
            >
              Create playlist
            </button>
          </div>
        </div>
        <div className="mt-10">
          <Box
            sx={{
              width: 500,
              height: 700,
            }}
            className="mb-20 bg-grey2 rounded-md"
          >
            <div className="space-y-12 flex justify-center">
              <form className="" autoComplete="off">
                <div className="ml-16 py-10 self-center">
                  <h2 className="font-bold">Trending songs</h2>
                </div>
                <div>
                  <div className="text-3xl text-center ml-9 bg-white rounded-md py-2 px-16 font-bold mb-4">
                    <Button endIcon={<SendIcon />}>
                      Unavailable by Davido
                    </Button>
                  </div>
                  <div className="text-3xl text-center ml-9 bg-white rounded-md py-2 px-16 font-bold mb-4">
                    <Button endIcon={<SendIcon />}>
                      Unavailable by Davido
                    </Button>
                  </div>
                  <div className="text-3xl text-center ml-9 bg-white rounded-md py-2 px-16 font-bold mb-4">
                    <Button endIcon={<SendIcon />}>
                      Unavailable by Davido
                    </Button>
                  </div>
                  <div className="text-3xl text-center ml-9 bg-white rounded-md py-2 px-16 font-bold mb-4">
                    <Button endIcon={<SendIcon />}>
                      Unavailable by Davido
                    </Button>
                  </div>
                  <div className="text-3xl text-center ml-9 bg-white rounded-md py-2 px-16 font-bold mb-4">
                    <Button endIcon={<SendIcon />}>
                      Unavailable by Davido
                    </Button>
                  </div>
                  <div className="text-3xl text-center ml-9 bg-white rounded-md py-2 px-16 font-bold">
                    <Button endIcon={<SendIcon />}>
                      Unavailable by Davido
                    </Button>
                  </div>
                </div>
                <div className="mt-10 ml-9 text-2xl">
                  <button
                    style={{
                      background: "#CE5A29",
                      textAlign: "center",
                      marginLeft: "3em",
                      width: "50%",
                      padding: "0.2rem",
                      height: "20%",
                      borderRadius: "0.3rem",
                    }}
                    type="submit"
                  >
                    View More
                  </button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
