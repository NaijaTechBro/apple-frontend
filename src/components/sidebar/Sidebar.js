import React from "react";
import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewIcon from '@mui/icons-material/GridView';
import AddCardIcon from '@mui/icons-material/AddCard';
import SavingsIcon from '@mui/icons-material/Savings';
import NearMeIcon from '@mui/icons-material/NearMe';
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import PaymentsSharpIcon from '@mui/icons-material/PaymentsSharp';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 230px;
  display: flex;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #533E85;
  font-size: 25px;
`;

const Img = styled.img`
  height: 25px;
  color: #533E85;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 10px 0px;
  border: 0.2px ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Sidebars = ({ darkMode, setDarkMode }) => {
  // const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            ResoPay
          </Logo>
        </Link>
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <GridViewIcon style={{ color: "#533E85",
            fontSize: "25px",
            "&:hover": { color: "#533E85"},
          }} />
            Dashboard
          </Item>
        </Link>
        <Link
          to="/savings"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <SavingsIcon style={{ color: "#533E85",
            fontSize: "25px",
            "&:hover": { color: "#533E85"},
          }} />
            Savings
          </Item>
        </Link>
        <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <AddCardIcon style={{ color: "#533E85",
            fontSize: "25px",
            "&:hover": { color: "#533E85"},
          }} />
            Deposit
          </Item>
        </Link>
        <Link
          to="send"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <PaymentsSharpIcon style={{ color: "#533E85",
            fontSize: "25px",
            "&:hover": { color: "#533E85"},
          }} />
            Withdraw
          </Item>
        </Link>
        <Hr />
        <Title>Transaction</Title>
        <Item>
          <HistoryOutlinedIcon style={{ color: "#533E85",
          fontSize: "25px",
          "&:hover": { color: "#533E85"},
        }} />
          History
        </Item>
        <Item>
          <SettingsOutlinedIcon style={{ color: "#533E85",
          fontSize: "25px",
          "&:hover": { color: "#533E85"},
        }} />
          Settings
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon style={{ color: "#533E85",
          fontSize: "25px",
          "&:hover": { color: "#533E85"},
        }} />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Hr />
        <Item>
          <LogoutIcon style={{ color: "#533E85",
          fontSize: "25px",
          "&:hover": { color: "#533E85"},
        }} />
          Logout
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Sidebars;








// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// import { logo, sun } from '../../assets/sidebar-assets/assets';
// import { navlinks } from '../../constants';


// const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
//   <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
//     {!isActive ? (
//       <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
//     ) : (
//       <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
//     )}
//   </div>
// )

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [isActive, setIsActive] = useState('dashboard');

//   return (
//     <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
//       <Link to="/">
//         <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
//       </Link>

//       <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
//         <div className="flex flex-col justify-center items-center gap-3">
//           {navlinks.map((link) => (
//             <Icon 
//               key={link.name}
//               {...link}
//               isActive={isActive}
//               handleClick={() => {
//                 if(!link.disabled) {
//                   setIsActive(link.name);
//                   navigate(link.link);
//                 }
//               }}
//             />
//           ))}
//         </div>

//         <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
//       </div>
//     </div>
//   )
// }

// export default Sidebar