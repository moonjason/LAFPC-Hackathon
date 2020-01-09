import styled from 'styled-components';


// main is "nav-header"
// div is "nav-left"
// article is "nav-center"
// section is "nav-right"

const NavStyle = styled.nav`

  position: relative;
  width: 100%;
  top: 0;
  background-color: white;
  opacity: 0.7;

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
  }
  
  article {
    width: 50%;
    text-align: center;
    /* margin-top: 5.0rem; */
     &:hover {
      color: grey;
    }
    

    @media (max-width: 500px) {
      font-size: 14px;
      
      /* margin-top: 4%;
      margin-right: 4%;
      margin-left: 12.5%; */
    }

    @media (max-width: 720px) {
      /* font-size: 16px;
      margin-top: 4%;
      margin-right: 5%; */
    }
  }

  section {
    /* margin-top: 5.0rem; */
    width: 30%;
    text-align: left; 
  }
`

export default NavStyle;