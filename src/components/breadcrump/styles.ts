import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const BreadcrumbItem = styled.span`
  color: #555;

  a {
    text-decoration: none;
    color: #007bff;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    font-weight: bold;
  }
`;
