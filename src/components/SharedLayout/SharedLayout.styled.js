import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 20px;
`;

export const StyledNavLink = styled.div`
  font-size: 30px;
  color: ${(props) => (props.isActive ? 'orange' : 'black')};

  :hover {
    color: blue;
  }
`;


