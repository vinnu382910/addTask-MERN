import styled from 'styled-components';

export const HomeCont = styled.div`
  margin: 0px;
  min-height: 100vh;
  padding: 30px;
  background-color: ${(props) => props.$bgColor};
`

export const AppHeading = styled.h1`
  font-stretch: expanded;
  color: ${(props) => props.$textColor};
  font-weight: bold;
  font-style: oblique;
  font-size: 34px;
`
export const SearchContainer = styled.div`
  border: 2px solid #000;
  border-color: ${(props) => props.$textColor};
  background-color: #c5e4ff;
  margin-right: 10px;
  padding-left: 10px;
  width: 250px;
  color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const TableData = styled.td`
  color: ${(props) => props.$textColor};
  background-color: ${(props) => props.$bgColor};
`

export const FilterButton = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  background-color: ${(props) => props.$isActive ? '#f5ae07' : '#007bff'};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: ${({ isActive }) => (isActive ? '2px solid #004085' : 'none')};

  &:hover {
    background-color: #f5ae07;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 6px 12px;
    margin-right: 5px; 
  }
`;

