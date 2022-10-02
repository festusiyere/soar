import React, { useState } from "react";
import { FaAngleLeft, FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { TableData } from "../../Data";
import Button from "./Button";
import InputModal from "./InputModal";
import Table from "./Table";

const Container = styled.div`
  max-width: 1500px;
  width: 100vw;
  margin: 2rem auto;
  background-color: #f2f2f2;
  padding: 3rem 1rem 1rem;
  position: relative;
`;
const Navigation = styled.div`
  position: absolute;
  left: 1rem;
  top: 0.5rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Top = styled.div`
  display: flex;
`;
const Add = styled.div`
  flex: 1;
  height: 5rem;
  margin: 0.2rem;
  border-radius: 0.5rem;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AddText = styled.div`
  font-weight: 500;
`;
const Item = styled.div`
  flex: 1;
  margin: 0.2rem;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const TopText = styled.p`
  font-size: 0.8rem;
`;
const TopNumber = styled.h2``;
const Search = styled.div`
  position: absolute;
  right: 2rem;
  top: 1rem;
  font-weight: 200;
  font-size: 0.8rem;
`;

const Dashboard = () => {
  const [maintenance, setMaintenance] = useState(TableData);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {!modal && (
        <Container>
          <Navigation>
            <FaAngleLeft color="gold" /> Maintenance
          </Navigation>
          <Top>
            <Add>
              <Button
                variant="solid"
                shape="round"
                color="red"
                onClick={handleModal}
              >
                +
              </Button>
              <AddText>Maintenance</AddText>
            </Add>
            <Item>
              <TopText>Total Available Equipment</TopText>
              <TopNumber> 10 </TopNumber>
            </Item>
            <Item>
              <TopText>Total Maintenance Equipment</TopText>
              <TopNumber> 153 </TopNumber>
            </Item>
            <Item>
              <TopText>Total Breakdown Equipment</TopText>
              <TopNumber> 3 </TopNumber>
            </Item>
          </Top>
          <div className="table-container">
            <Search>
              <FaSearch />
            </Search>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Equipment ID</th>
                  <th>Location</th>
                  <th>SBU</th>
                  <th>Equipment</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {maintenance.map((item, index) => (
                  <Table key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      )}

      {modal && (
        <InputModal
          handleModal={handleModal}
          maintenance={maintenance}
          setMaintenance={setMaintenance}
        />
      )}
    </>
  );
};

export default Dashboard;
