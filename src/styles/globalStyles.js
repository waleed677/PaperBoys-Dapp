import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
// Used for wrapping a page component
export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  width: ${({ wid }) => (wid ? wid + "%" : "100%")};

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  width: ${({ wid }) => (wid ? wid + "%" : "100%")};
`;

export const TextTitle = styled.p`
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ size }) => (size ? size + "rem" : "2.2rem")};
  font-weight: 500;
  line-height: 1.1;
  font-family: "wonder";
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 2.1rem;
    line-height: 1.5;
  }
`;

export const TextSubTitle = styled.p`
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ size }) => (size ? size + "rem" : "1.5rem")};
  font-family: "wonder";
  text-align: ${({ align }) => (align ? align : "center")};
`;

export const TextDescription = styled.p`
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ size }) => (size ? size : "1.5rem")};
  line-height: 1.6;
  font-family: "wonder";
  text-align: center;
  width: 90%;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

export const line = styled.hr`
  width: 100%;
  color: #e0e0e0;
`;

export const row = styled.div`
  display: grid;
  grid-template-columns: ${({ col }) =>
    col ? col + "%" + col + "%" : "50% 50%"};
  width: ${({ wid }) => (wid ? wid + "%" : "100%")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  column-gap: ${({ gap }) => (gap ? gap + "%" : "20%")};

  @media screen and (max-width: 768px) {
    grid-template-columns: ${({ col }) =>
      col ? col + "%" + col + "%" : "100%"};
  }
`;

export const Mint = styled.div`
  padding: 25px 0;
  border-radius: 25px;
  width: 40%;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  @media screen and (max-width: 1024px) {
    width: 90%;
    background-color: #48dbfb;
    border: 50px solid rgba(45, 52, 54, 1);
  }

  @media screen and (max-width: 480px) {
    background-color: transparent;
    width: 100%;
    top: 70%;
    padding: 40px 0;
    border: none;
  }
`;

export const CatDiv = styled.div`
  display: block;
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px !important;
  }
`;

export const Image = styled.img`
  width: ${({ wid }) => (wid ? wid + "%" : "100%")};
  transition: width 0.5s;
  transition: height 0.5s;
  margin-top: 20px;
  display: block;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #fff;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  flex-wrap: wrap;mint
  margin-top: ${({ mt }) => (mt ? mt : "0")};
`;

export const FlexItem = styled.div`
  flex: ${({ flex }) => (flex ? flex : 0)};
  padding: 10px;
`;

export const connectButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: var(--primary);
  font-family: "wonder";
  text-align: center;
  font-size: 1.5rem;
  border: 1px solid var(--primary);
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background: #1dd1a1;
    border: 1px solid #fff;
  }
`;

export const connectButtonImg = styled.button`
  padding: 40px 80px;
  background-image: url("config/images/btn-mint.png") !important;
  background-color: none !important;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border: none;
`;

export const maxButton = styled.button`
  width: 20%;
  background: #2ecc71;
  height: 50px;
  border-radius: 10px;
  font-family: "wonder";
  font-size: 1.5rem;
  color: #fff !important ;

  @media screen and (max-width: 768px) {
    position: relative;
    margin-left: auto;
    margin-bottom: 10px;
  }
`;

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const NavIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin: 10px auto;
  width: ${({ wid }) => (wid ? wid + "%" : "48px")};
  cursor: pointer;

  @media only screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }
`;

export const NavLink = styled(LinkS)`
  cursor: pointer;
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border: none;
  padding: 10px;
  font-weight: bold;
  font-size: 3rem;
  color: #ff0000;
  -webkit-text-stroke: 0.3px #37465d;
  text-shadow: 2px 2px #37465d;
  width: 10px;
  height: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  :active {
    box-shadow: none !important;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    border: none;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }

  
`;
