import React from 'react';
import { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import Header from '../aHeader/Header';
import Footer from '../zFooter/Footer';

const About = () => {
    const { theme, shadowAbout, aboutProduct } = useContext(clientContext)

    return (
        <>
            {
                aboutProduct ? (
                    <>
                        <Header />
                        <div className={`${theme} about-product-container`} style={shadowAbout}>
                            <div className="about-product-block">
                                <div className="section1" style={shadowAbout}>
                                    <img className="image" style={shadowAbout} src={aboutProduct.image} alt="" />
                                    <div className="side-section">
                                        <div className="title">
                                            <h2>
                                                {aboutProduct.title}
                                            </h2>
                                        </div>
                                        <div className="description">
                                            <p>{aboutProduct.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="section2">
                                    <div className="tags" style={shadowAbout}>
                                        <div className="tag">
                                            <h4>Location:</h4>
                                        </div>
                                        <div className="tag">
                                            <h4>Phone Number:</h4>
                                        </div>
                                        <div className="tag">
                                            <h4>Category:</h4>
                                        </div>
                                    </div>
                                    <div className="tag-values">
                                        <div className="value">
                                            <h4>
                                                {aboutProduct.location}
                                            </h4>
                                        </div>
                                        <div className="value">
                                            <h4>
                                                {aboutProduct.phone}
                                            </h4>
                                        </div>
                                        <div className="value">
                                            <h4>
                                                {aboutProduct.category}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
                ) : (null)
            }
        </>
    );
};

export default About;