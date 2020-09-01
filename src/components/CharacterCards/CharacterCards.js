import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './CharacterCards.css';

export default class CharacterCards extends Component {
    constructor() {
        super();
        this.state = {
            showDescription: false
        }
    }

    render() {

        const charInfo =    <Popover id="popover">
                                <Popover.Content className='char-description'>
                                    {this.state.showDescription && (this.props.characters.description)}
                                </Popover.Content>
                            </Popover>

        return(
            <Card className='cards' bg={'dark'} text={'light'} style={{ width: '10rem' }}>
                <Card.Img variant="top" src={this.props.img.path + '.' + this.props.img.extension} />
                <OverlayTrigger placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={charInfo}
                >
                    <Card.Body id={this.props.id}
                            onMouseEnter={() => this.setState({showDescription: true})}
                            onMouseLeave={() => this.setState({showDescription: false})}>
                        <Card.Title>{this.props.characters.name}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </OverlayTrigger>
                
            </Card>    
        )
    }
}