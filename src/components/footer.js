import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Footer extends React.Component {

    state = {
        title: '',
        rooms: [
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Pegase', image: 'Pegase.jpg' },
            { name: 'Thalie', image: 'Thalie.jpg' }
        ]
    };

    componentDidMount() {
        console.log('componentDidMount');
        //this.setState({ title: 'TOP 5' });
    }

    /*componentWillMount() {
        console.log('componentWillMount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }*/

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');
        return (
            <>
                <h3>{this.state.title}</h3>
                <Row>
                    {this.state.rooms.map((item, index) => (
                        <Col key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`/images/${item.image}`}></Card.Img>
                                <Card.Body>
                                    <Card.Title>
                                        {item.name}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </>
        );
    }
}

export default Footer;