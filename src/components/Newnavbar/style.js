import styled from 'styled-components';


// main is "nav-header"
// div is "nav-left"
// article is "nav-center"
// section is "nav-right"

const NavStyle = styled.nav`

  position: absolute;
  width: 100%;
  top: 0;
  background-color: transparent;
  opacity: 1;

  main {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 5px;

    @media (min-width: 1000px) {
      max-width: 58.5%;
    }
  }

  img {
    width: 20px;
  }
  
  div {
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

     @media (min-width: 721px) {
      text-align: right;
      width: 15%;
      margin-left: 2.5rem;
    }

    @media (min-width: 1000px) {
      text-align: right;
      width: 10%;
      margin-left: 3.0rem;
    }

  }
  
  article {
    width: 50%;
    text-align: center;
    
     &:hover {
      color: grey;
    }
    
    @media (max-width: 500px) {
        /* margin-left: 1rem; */
        width: 60%;

    }

    @media (max-width: 720px) {
        /* margin-left: 1rem; */
        width: 50%;

    }

    @media (min-width: 721px) {
      width: 65%;
    }

  }

  section {
    
    width: 30%;
    text-align: left; 

    @media (max-width: 500px) {
        width: 30%;

    }

    @media (max-width: 720px) {
        width: 40%;

    }

    @media (min-width: 721px) {
      width: 30%;
      margin-right: 5.0rem;
    }

    @media (min-width: 1000px) {
      width: 35%;
      margin-right: 5.2rem;
    }

  }
`

export default NavStyle;