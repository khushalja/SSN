import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './home.css';
import Image from 'react-bootstrap/Image';
import nana from '../../Media/nanapatekar.jpg';
import swamiji from '../../Media/Swamiji.jpg';
import ali from '../../Media/mohammadali.jpg';
import topimg from '../../Media/Homescreentoppic.jpg';


export default class home extends Component {
  render() {
    return (
      <div className='Hmain'>
        <div>
          <Image src={topimg} className='topimage' />
          <div className='topitxt '>
            <h3>"Giving does not only precede receiving; it is the reason for it. It is in giving that we receive."</h3>
            <h4>- Israelmore Ayivor</h4>
          </div>
        </div>
        <div className='Carddiv'>
          <Card style={{ width: '18rem' }} className='eachcard'>
            <Card.Img variant="top" src={nana} style={{ justifycontent: "center" }} align="center"/>
            <Card.Body>
              <Card.Title style={{ justifycontent: "center" }} align="center" >Nana Patekar</Card.Title>
              <Card.Text style={{ justifycontent: "center" }} align="center" >
                "All we need is to build human relations with our deeds. That's only thing that lasts forever "
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className='eachcard'>
            <Card.Img variant="top" src={swamiji} style={{ justifycontent: "center" }} align="center"/>
            <Card.Body>
              <Card.Title style={{ justifycontent: "center" }} align="center" >Swami Vivekananda</Card.Title>
              <Card.Text style={{ justifycontent: "center" }} align="center" >
                "An atheist can be charitable but not religious. But the religious man must be charitable."
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className='eachcard'>
            <Card.Img variant="top" src={ali} style={{ justifycontent: "center" }} align="center"/>
            <Card.Body>
              <Card.Title style={{ justifycontent: "center" }} align="center" >Mohammed Ali</Card.Title>
              <Card.Text style={{ justifycontent: "center" }} align="center" >
                "Service to others is the rent you pay for your room here on earth."
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='Carouseldiv'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1666984132216-d97e0b6d6eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
                src="https://images.unsplash.com/photo-1666984132216-d97e0b6d6eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1666984132246-d97e0b6d6eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
