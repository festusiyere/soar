import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { FaRegTimesCircle } from "react-icons/fa";
import Dropdown from "./Dropdown";
import {
  Location,
  Equipment,
  equipmentType,
  Status,
  systemTypes,
  Sbu,
} from "../../Data";

const locationOptions = Location.map((item) => item.name);
const equipmentTypeOptions = Equipment.map((item) => item.transactionId);
const equipmentOptions = equipmentType.map((item) => item.name);
const systemTypeOptions = systemTypes.map((item) => item.name);
const statusOptions = Status.map((item) => item.name);
const sbuOptions = Sbu.map((item) => item.name);

const Container = styled.div`
  width: 400px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1), -3px -3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin: 1rem auto;
`;
const TopContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #f2f2f2;
  padding: 1rem;
`;
const HeaderText = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
`;
const CloseBtn = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  right: 1rem;
  top: 0;
  bottom: 0;
  margin: auto;
  font-weight: bold;
`;
const MiddleContainer = styled.div`
  padding: 1rem;
`;
const Toggle = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #f2f2f2;
  padding: 0.3rem;
  margin: auto;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.6rem;
  &:hover {
    cursor: pointer;
  }
`;
const BottomContainer = styled.div`
  padding: 0.2rem;
  border-top: 1px solid #f2f2f2;
  display: flex;
  justify-content: end;
`;

const InputModal = ({ handleModal, maintenance, setMaintenance }) => {
  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState("");
  const [equipmentType, setEquipmentType] = useState("");
  const [status, setStatus] = useState("");
  const [sbu, setSbu] = useState("");

  const [date, setDate] = useState("");

  const [active, setActive] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleActiveState = (e, id) => {
    e.stopPropagation();
    setActive(id);
  };

  const handleSubmit = () => {
    if ((location, equipmentType, date, status, equipment !== "")) {
      const newMaintenanceData = {
        location: location,
        equipmentId: equipmentType,
        SBU: sbu,
        date,
        equipment,
        status,
      };
      setLoading(true);
      setMaintenance([...maintenance, newMaintenanceData]);
      setTimeout(() => {
        setLoading(false);
        handleModal();
      }, 2000);
    } else {
      alert("all input must be selected");
      setLoading(false);
    }
  };
  return (
    <Container>
      <TopContainer>
        <HeaderText>Maintenance Input</HeaderText>
        <CloseBtn onClick={handleModal}>
          <FaRegTimesCircle />
        </CloseBtn>
      </TopContainer>

      <MiddleContainer>
        <Toggle>
          <Item
            className={`${active === 1 && "active"}`}
            onClick={(e) => handleActiveState(e, 1)}
          >
            Location
          </Item>
          <Item
            className={`${active === 2 && "active"}`}
            onClick={(e) => handleActiveState(e, 2)}
          >
            System Type
          </Item>
        </Toggle>

        {active === 1 ? (
          <>
            <Dropdown
              placeholder="Location"
              label="Location"
              options={locationOptions}
              value={location}
              setOnchange={setLocation}
            />
            <Dropdown
              placeholder="Equipment"
              label="Equipment"
              options={equipmentOptions}
              value={equipment}
              setOnchange={setEquipment}
            />
            <Dropdown
              placeholder="Equipment Type"
              label="Equipment Type"
              options={equipmentTypeOptions}
              value={equipmentType}
              setOnchange={setEquipmentType}
            />
            <Dropdown
              placeholder="Status"
              label="Select Status"
              options={statusOptions}
              value={status}
              setOnchange={setStatus}
            />
            <Dropdown
              placeholder="SBU"
              label="SBU"
              options={sbuOptions}
              value={sbu}
              setOnchange={setSbu}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </>
        ) : (
          <>
            <Dropdown
              placeholder="System Type"
              label="System Type"
              options={systemTypeOptions}
              // value={systemtype}
              // setOnchange={setSystemtype}
            />
            <Dropdown
              placeholder="Equipment"
              label="Equipment"
              options={equipmentOptions}
              value={equipment}
              setOnchange={setEquipment}
            />
            <Dropdown
              placeholder="Equipment Type"
              label="Equipment Type"
              options={equipmentTypeOptions}
              value={equipmentType}
              setOnchange={setEquipmentType}
            />
            <Dropdown
              placeholder="Status"
              label="Select Status"
              options={statusOptions}
              value={status}
              setOnchange={setStatus}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </>
        )}
      </MiddleContainer>
      <BottomContainer>
        <Button
          variant="outline"
          color="black"
          onClick={handleModal}
          disabled={loading ? true : false}
        >
          Cancel
        </Button>
        <Button
          disabled={loading ? true : false}
          variant="solid"
          color="red"
          type="submit"
          onClick={handleSubmit}
        >
          {loading ? "Adding" : "Submit"}
        </Button>
      </BottomContainer>
    </Container>
  );
};

export default InputModal;
