import { React } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';

import { DayFirst } from './DayFirst';
import { DaySecond } from './DaySecond';
import { DayThird } from './DayThird';
import { DayFourth } from './DayFourth';
import { DayFifth } from './DayFifth';
import { DaySixth } from './DaySixth';
import { DaySeventh } from './DaySeventh';
import { DayEighth } from './DayEighth';
import { DayNinth } from './DayNinth';
import { DayTenth } from './DayTenth';

function App() {
  const components = [
    <DayFirst />,
    <DaySecond />,
    <DayThird />,
    <DayFourth />,
    <DayFifth />,
    <DaySixth />,
    <DaySeventh />,
    <DayEighth />,
    <DayNinth />,
    <DayTenth />,
  ];

  const daysArray = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Day ${index + 1}`,
  }));

  return (
    <Container fluid='lg'>
      <Tab.Container defaultActiveKey='1'>
        <Card.Link
          href='https://adventofcode.com/2022'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2> Advent of Code 2022</h2>
        </Card.Link>
        <Row>
          <Col xs={2}>
            <Nav variant='underline' className='flex-column'>
              {daysArray.map((day) => (
                <Nav.Item key={day.id}>
                  <Nav.Link eventKey={day.id}>{day.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col xs={9}>
            <Tab.Content>
              {daysArray.map((day) => (
                <Tab.Pane eventKey={day.id} key={day.id}>
                  <Card bg='info'>
                    {components[day.id - 1] && components[day.id - 1]}
                  </Card>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default App;
