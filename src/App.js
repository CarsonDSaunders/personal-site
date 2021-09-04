import './App.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import HomeImg from './assets/Home-BG.jpg';
import ProjectsImg from './assets/Projects-BG.jpg';
import AboutImg from './assets/About-BG.jpg';

function App() {
    return (
        <div className='App'>
            <Navbar sticky='top' variant='dark' bg='dark' expand='lg'>
                <Container>
                    <Navbar.Brand>CSDev</Navbar.Brand>
                </Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                        <Nav.Link href='#about'>About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid>
                <Row
                    className='bg section-container'
                    style={{ backgroundImage: `url(${HomeImg}` }}
                    id='home'>
                    <div className='section-content'>
                        <h2 className='welcome-txt'>Welcome to my site</h2>
                    </div>
                </Row>
                <Row
                    className='bg section-container'
                    style={{ backgroundImage: `url(${ProjectsImg}` }}
                    id='projects'>
                    <div className='section-content'>
                        <h2 className='welcome-txt'>My Projects</h2>
                        <a
                            className='App-link'
                            href='https://bigg.carsonsaunders.dev/#/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Bigg Idea
                        </a>
                    </div>
                </Row>
                <Row
                    className='bg section-container'
                    style={{ backgroundImage: `url(${AboutImg}` }}
                    id='about'>
                    <div className='section-content'>
                        <h2 className='welcome-txt'>About Me</h2>
                        <p>I like women</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default App;
