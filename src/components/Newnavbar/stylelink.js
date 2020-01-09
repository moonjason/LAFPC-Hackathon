import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`

  text-decoration: none;
  font-size: 12px;
  font-family: 'Roboto' , sans-serif;
  margin-left: 2%;
  padding: 0.4rem 0.4rem 0.4rem 0.4rem;
  text-transform: uppercase;  
  color: white;
  opacity: 1;
  border: 1.25px solid white;
  border-radius: 40%;
  
  
  &:hover {
      color: rgb(179, 40, 17);
      border: 1px inset rgb(179, 40, 17);
  }

  @media (max-width: 500px) {
    font-size: 8px;
    padding: 0.1rem 0.1rem;
  }

  @media (max-width: 720px) {
    padding: 0.1rem 0.1rem;
  }

`

export default NavLink;