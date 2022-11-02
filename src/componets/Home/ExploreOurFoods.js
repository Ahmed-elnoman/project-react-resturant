import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ExploreOurFoods.css';
import image1 from './../../assets/01.jpg';
import image2 from './../../assets/02.jpg';
import image3 from './../../assets/03.jpg';

const ExploreOurFoods = () => {
    return(
        <div className="Explore_Ou_Foods">
            <div className="container">
                <div className="text">
                <h1>Explore Our Foods</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br/>
                    leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br/>
                     Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image1} />
                            <Card.Body>
                                <Card.Title>Rainbow Vegetable Sandwich</Card.Title>
                                <Card.Text>Time: 15 - 20 Minutes | Serves: 1</Card.Text>
                                <Card.Text className="n">$10.50 <span>$11.70</span></Card.Text>
                                <Button variant="btn">Order Now</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image2} />
                            <Card.Body>
                                <Card.Title>Vegetarian Burger</Card.Title>
                                <Card.Text>Time: 30 - 45 Minutes | Serves: 1</Card.Text>
                                <Card.Text className="n">$9.20 <span> $10.50</span></Card.Text>
                                <Button variant="btn">Order Now</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image3} />
                            <Card.Body>
                                <Card.Title>Raspberry Stuffed French Toast</Card.Title>
                                <Card.Text>Time: 10 - 15 Minutes | Serves: 1</Card.Text>
                                <Card.Text className="n">$12.50 <span>$13.20</span></Card.Text>
                                <Button variant="btn">Order Now</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreOurFoods;