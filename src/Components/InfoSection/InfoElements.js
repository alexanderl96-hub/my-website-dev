import styled from "styled-components";
import { Link } from "react-router-dom"

export const InfoContainer = styled.div`
  //   margin-top: 10px;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 26px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 4.5rem;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : " #fff")};
`;
export const BtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 80%;
  margin: 70px;
  border-radius: 4px;
  padding-right: 0;
  transition:  all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.03);
    transition:  all 0.3s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px){
    margin: 25px;
    margin-top: -80px;
  }
`;
export const Img2 = styled.img`
  width: 18%;
  margin: 4px;
  border-radius: 4px;
  padding-right: 0;
  transition:  all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.03);
    transition:  all 0.3s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px){
    margin:10px;
    margin-top: -2px;
  }
`;

export const InfoMoreContainer = styled.div`
//   color: #fff;
//   background-color: black;
//   width: 100%;
//   height: 100%;
//   margin-bottom: -10px;
//   @media screen and (max-width: 768px) {
//     padding: 100px 0;
//   }
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;    
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background-color: #101522;
// background-color: black;
// background: linear-gradient(
//     108deg, rgba(1, 147, 86, 1) 0%,
//             rgba(10, 201, 122, 1) 100%);
`;
export const InfoMoreWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InfoMoreH1 = styled.h1`
  margin-top: 25px;
  color: black;
  width: 10.2%;
  background: #fff;
  border-radius: 15px;

  &:hover {
    background: #01bf71;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    margin-top: 18px;
    font-size: 22px;
    width: 25.2%;
    border-radius: 45px;

    &:hover {
      background: #01bf71;
      cursor: pointer;
    }
  }
`;
export const InfoMoreText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;

  `
export const InfoMoreP = styled.p`
  font-size: 23px;
  color: #fff;
  margin-left: 10%;
  margin-right: 10%;
  padding: 15px;

  @media screen and (max-width: 480px) {
    font-size: 15px;
    padding: 5px;
    margin-left: 5%;
  margin-right: 5%;
  }
`

export const InfoMoreH2 = styled.h2`
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
  margin: 5px;

  @media screen and (max-width: 480px) {
    font-size: 16px;  
  }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 22px;

    @media screen and (max-width: 480px){
        margin-left:16px;
        margin-top:8px;
    };
 `