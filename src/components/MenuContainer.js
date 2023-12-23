/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}원`;
}

const minDistance = 1000;

const categories = {
  region: ["서울시 마포구", "서울시 강남구", "서울시 강서구", "서울시 동작구"],
  etc: ["한식", "중식", "일식", "양식", "기타"],
};

function MenuContainer() {
  const [value1, setValue1] = useState([4000, 9000]);

  const handleChange1 = (event, newValue, activeThumb) => {
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
    <div className="mt-5 flex w-full flex-col items-center bg-[#F9F9F9] p-10">
      {/* 지역 박스 */}
      <div className="mb-12 flex w-full flex-col justify-start">
        <span className="mb-3 flex text-xl font-semibold">지역</span>
        <div className="grid grid-cols-3 gap-x-10 gap-y-6">
          <span className="hover:cursor-pointer">{categories.region[0]}</span>
          <span
            className="line-through hover:cursor-pointer"
            onClick={() => {
              alert("아직 개발중입니다.");
            }}
          >
            {categories.region[1]}
          </span>
          <span
            className="line-through hover:cursor-pointer"
            onClick={() => {
              alert("아직 개발중입니다.");
            }}
          >
            {categories.region[2]}
          </span>
          <span
            className="line-through hover:cursor-pointer"
            onClick={() => {
              alert("아직 개발중입니다.");
            }}
          >
            {categories.region[3]}
          </span>
        </div>
      </div>
      {/* 기타 박스 */}
      <div className="mb-12 flex w-full flex-col justify-start">
        <span className="mb-3 flex text-xl font-semibold">기타</span>
        <div className="grid grid-cols-3 gap-x-10 gap-y-6">
          <span className="hover:cursor-pointer">{categories.etc[0]}</span>
          <span className="hover:cursor-pointer">{categories.etc[1]}</span>
          <span className="hover:cursor-pointer">{categories.etc[2]}</span>
          <span className="hover:cursor-pointer">{categories.etc[3]}</span>
          <span
            className="line-through hover:cursor-pointer"
            onClick={() => {
              alert("아직 개발중입니다.");
            }}
          >
            {categories.etc[4]}
          </span>
        </div>
      </div>
      {/* 맥주 박스 */}
      <div className="mb-4 flex w-full flex-col justify-start">
        <span className="mb-3 flex text-xl font-semibold">맥주 가격</span>
        <div className="flex flex-col items-center justify-center">
          <Box className="flex w-[24rem]">
            <Slider
              sx={{
                color: "#E8E6B1",
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
                  backgroundColor: "#E8E6B1",
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
              min={4000}
              max={9000}
              step={1000}
            />
          </Box>
          <div className="flex w-[26rem] justify-between">
            <span className="text-xs text-[#080707]">{value1[0]}원</span>
            <span className="text-xs text-[#080707]">{value1[1]}원</span>
          </div>
        </div>
      </div>
      {/* 적용하기 버튼 */}
      <div className="mt-4">
        <button className="rounded-full bg-black px-6 py-2 text-white">
          적용하기
        </button>
      </div>
    </div>
  );
}

export default MenuContainer;
