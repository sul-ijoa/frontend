/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import category from "../assets/category.svg";

function valuetext(value) {
  return `${value}원`;
}

const minDistance = 1000;

function Nav() {
  const navigate = useNavigate();

  const [value1, setValue1] = useState([3000, 8000]);

  const handleChange1 = (event, newValue, activeThumb) => {
    console.log(newValue);
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div className="mt-7 flex w-full flex-wrap items-center justify-between pb-3 pl-7">
      {/* Bundle 1: Soju Price */}
      <div className="flex h-12 min-w-[200px] items-start">
        <span className="mr-3 mt-[2px] flex items-center text-lg font-medium text-[#302f2f]">
          소주 가격
        </span>
        <div className="flex flex-shrink-0 flex-col items-center justify-center">
          <Box className="flex w-[24rem]">
            <Slider
              sx={{
                color: "#52af77",
                height: 8,
                paddingTop: 1,
                marginBottom: 1,
                "& .MuiSlider-track": {
                  border: "none",
                },
                "& .MuiSlider-thumb": {
                  height: 24,
                  width: 24,
                  backgroundColor: "#fff",
                  border: "2px solid currentColor",
                  "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                    boxShadow: "inherit",
                  },
                  "&:before": {
                    display: "none",
                  },
                },
                "& .MuiSlider-valueLabel": {
                  lineHeight: 1.2,
                  fontSize: 12,
                  background: "unset",
                  padding: 0,
                  width: 32,
                  height: 32,
                  borderRadius: "50% 50% 50% 0",
                  backgroundColor: "#52af77",
                  transformOrigin: "bottom left",
                  transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
                  "&:before": { display: "none" },
                  "&.MuiSlider-valueLabelOpen": {
                    transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
                  },
                  "& > *": {
                    transform: "rotate(45deg)",
                  },
                },
              }}
              aria-label="pretto slider"
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              getAriaValueText={valuetext}
              disableSwap
              min={3000}
              max={8000}
              step={1000}
            />
          </Box>
          <div className="flex w-[26rem] justify-between">
            <span className="text-xs text-[#080707]">{value1[0]}원</span>
            <span className="text-xs text-[#080707]">{value1[1]}원</span>
          </div>
        </div>
      </div>

      {/* Bundle 2: AI and Category */}
      <div className="flex flex-shrink-0 items-center space-x-2">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#5a5a5a] hover:cursor-pointer"
          onClick={() => {
            navigate("/aipage");
          }}
        >
          <span className="font-semibold text-[#5a5a5a]">AI</span>
        </div>
        <img
          src={category}
          alt="category"
          className="w-11 hover:cursor-pointer"
          onClick={() => {
            navigate("/menu");
          }}
        />
      </div>
    </div>
  );
}

export default Nav;
