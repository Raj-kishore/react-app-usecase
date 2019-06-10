import React from 'react';

import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Carousel, Card, Jumbotron } from 'react-bootstrap';

import posed from 'react-pose';


import SplitText from 'react-pose-text';


import './index.css';


// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text

const Sidebar = posed.div({
  exit: {
    x: '-100%'
  },
  enter: {
    x: '0%',
    beforeChildren: true,
    staggerChildren: 50
  }
});

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 }
};

function Appp() {
  return (




<Card id="pf1">
<Card.Header> <SplitText charPoses={charPoses}>About Us</SplitText></Card.Header>
<Appp/>
<Card.Body>
  <blockquote className="blockquote mb-0">
    <p>
      {' '}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.{' '}
    </p>
    <footer className="blockquote-footer">
      Your Position <cite title="Source Title">Sovan Mukherjee                                                                  </cite>
    </footer>
  </blockquote>
</Card.Body>
</Card>


  );
}

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class Example extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />;
  }
}


export default function SearchAppBar() {

  return (
    <>

      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Demo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="# home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#features">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar>


      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://arch.kku.ac.th/pr/wp-content/uploads/2016/10/cropped-global-business-header-713-1024x300.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://arch.kku.ac.th/pr/wp-content/uploads/2016/10/cropped-global-business-header-713-1024x300.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://arch.kku.ac.th/pr/wp-content/uploads/2016/10/cropped-global-business-header-713-1024x300.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

<Appp/>


    </>
  );
}

