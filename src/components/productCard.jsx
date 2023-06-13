import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class ProductCard extends Component {


    render() {

        return (
            <div className=" col-12 col-md-6 col-lg-4 py-5 " key={this.props.id}>
                <div style={{ width: '100%', height: '100%' }}>
                    <Card style={{ width: '25rem', height: '35rem' }}>
                        <Card.Img variant="top" src={this.props.cover} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>{this.props.name}</Card.Title>
                            <Card.Text>{this.props.quote}</Card.Text>
                            <Card.Text style={{ color: 'red', fontWeight: 'bold' }}>
                                ${this.props.price}
                            </Card.Text>
                            
                            <Button variant="primary">BUY THE BOOK</Button>
                        </Card.Body>
                    </Card></div>
            </div>);
    }
}

export default ProductCard;
