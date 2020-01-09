import styled from 'styled-components';


// main is "nav-header"
// div is "nav-left"
// article is "nav-center"
// section is "nav-right"

const NavStyle = styled.nav`

  position: fixed;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: 0.65;

  main {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 5px;
  }

  img {
    width: 20px;
  }
  
  div {
    /* margin-top: 5.0rem; */
    width: 20%;
    text-align: right;

    @media (max-width: 500px) {
      margin-left: 1rem;  
      width: 10%;

    }

     @media (max-width: 720px) {
      margin-left: 1rem;  
      width: 10%;

    }

  }
  
  article {
    width: 50%;
    text-align: center;
    /* margin-top: 5.0rem; */
     &:hover {
      color: grey;
    }
    
    @media (max-width: 500px) {
        margin-left: 1rem;
        width: 60%;

    }

    @media (max-width: 720px) {
        margin-left: 1rem;
        width: 50%;

    }

  }

  section {
    /* margin-top: 5.0rem; */
    width: 30%;
    text-align: left; 

    @media (max-width: 500px) {
        width: 30%;

    }

    @media (max-width: 720px) {
        width: 40%;

    }

  }
`

export default NavStyle;