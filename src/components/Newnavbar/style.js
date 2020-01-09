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
    margin: 50px auto;
    display: flex;
    padding: 5px 0px 5px 0px;

    @media (min-width: 1200px) {
      max-width: 100.0%;
      padding: 5px 5px 5px 0px;
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

    @media (min-width: 1200px) {
      margin-left: 0px;
      text-align: right;
      width: 12%;
      padding-left: 25rem;
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
      width: 64%;
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
      width: 40%;
      padding-right: 15rem;
    }

    @media (min-width: 1200px) {
      width: 40%;
      /* margin-right: 10.0rem; */
      padding-right: 20rem;
    }

  }
`

export default NavStyle;