import styled from 'styled-components';

export const CartContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  background-color: #f9f9f9;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #333;
  color: white;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
`;

export const TableCell = styled.td`
  padding: 15px;
  text-align: center;
`;

export const TableBody = styled.tbody``;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  button {
    background-color: #e0e0e0;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff6347;
  cursor: pointer;
  font-size: 20px;
  
  &:hover {
    color: red;
  }
`;
