import AiContainer from "../../components/main/AiContainer";
import Content from "../../components/main/Content";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { useRecoilValueLoadable } from "recoil";
import { restaurantSelector } from "../../recoil/selectors/restaurantSeletor";

function AI() {
    // //레스토랑 전체 데이터
    // const dataLoadable = useRecoilValueLoadable(restaurantSelector);

    // //dataLoadable -> loading, hasValue, hasError
    // switch (dataLoadable.state) {
    //     //로딩중일경우
    //     case "loading":
    //         return <>로딩중입니다</>;

    //     //값이 들어온경우
    //     case "hasValue":
    //         const data = dataLoadable.contents;
    //         console.log(data);

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <Header />
                <AiContainer />
                {/* {data.map(function (a, i) {
                    return <Content key={i} i={i} data={data}></Content>;
                })} */}
                <Footer />
            </div>
        </>
    );

    // //에러가 뜬 경우
    // case "hasError":
    //     return <>페이지를 찾을수 없습니다</>;
    // default:
    //     return null;
    //}
}

export default AI;