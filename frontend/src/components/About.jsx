import React from 'react'
import aboutImage from '../assets/Images/aboutDiv.png'
import aboutImage2 from '../assets/Images/aboutDiv2.png'
import './Css/About.css'

export default function About() {
    return (
        <div>
            <div className="about-container">
                <header className="about-header">
                    <h1>About Us</h1>
                </header>
                <section className="about-content">
                    <div className="about-text">
                        <h2>Welcome to all..., We are the leading publisher of comprehensive industrial directories across Tamil Nadu.</h2>
                        <div>
                            <div className="about-images">
                                <img src={aboutImage} alt="Company 1" className="about-image" />
                            </div>
                            <div>
                                <p>
                                We are specialize in creating detailed and up-to-date industrial directories that serve a diverse range of fields and industries. Our directories are meticulously compiled to provide valuable information on businesses and services across all locations in Tamil Nadu, making it easier for professionals and companies to connect and collaborate. Whether you’re looking for manufacturers, suppliers, service providers, or any other industrial entity, our directories are your go-to resource for accurate and reliable information.
                                </p>
                            </div>
                        </div>
                        <p>
                        we are committed to supporting the growth of industries by delivering high-quality publications that cater to the evolving needs of businesses throughout Tamil Nadu
                        </p>
                        <p>
                            If you have any questions or need further information, please feel
                            free to contact us.
                        </p>
                    </div>
                    <div className="about-images">
                        <img src={aboutImage2} alt="Company 1" className="about-image" />
                    </div>
                </section>
            </div>
        </div>
    )
}
