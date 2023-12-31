import Header from "../../components/common/Header";
import NavBar from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import Content from "../../components/main/Content"
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { restaurantSelector } from "../../recoil/selectors/restaurantSeletor";
import { useLocation } from "react-router-dom";
import { menuAtom, restaurantAtom } from "../../recoil/atoms/menuAtom";
import { useEffect } from "react";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const Main = () => {


  const location = useLocation();

  //소주가격 클릭시 데이터
  const filteredData = location.state?.filteredData;
  //소주 전체 데이터
  const dataLoadable = useRecoilValueLoadable(restaurantSelector)


  console.log(getCookie('JSESSIONID'));


  //dataLoadable -> loading, hasValue, hasError
  switch (dataLoadable.state) {
    //로딩중일경우
    case 'loading':
      return (
        <>
          로딩중입니다
        </>
      );

    //값이 들어온경우
    case 'hasValue':

      // const data = dataLoadable.contents, filterData가 값 있으면 data
      const data = filteredData || dataLoadable.contents;

      return (

        <>
          <div className="flex flex-col items-center justify-center">
            <Header />
            <NavBar />
            {
              data.map(function (a, i) {
                return (
                  <Content key={i} i={i} data={data}></Content>
                )
              })
            }
            <Footer />
          </div >
        </>

      );

    //에러가 뜬 경우
    case 'hasError':
      return (
        <>
          페이지를 찾을수 없습니다
        </>
      );
    default:
      return null;
  }
}

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
}

export const getCookie = (name) => {
  return cookies.get(name);
}

export default Main;
