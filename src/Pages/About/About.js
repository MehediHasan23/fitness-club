import React from 'react';
import './About.css'
import pic1 from '../../images/about/about1.png'
import pic2 from '../../images/about/about2.jpg'
import pic3 from '../../images/about/about3.jpg'
import pic4 from '../../images/about/about4.jpg'

const About = () => {
  return (
    <div className='container about-container'>
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          <div>
          <h3>About Us</h3>
            <p>
            Founded in 1999, Dhaka Fitness Gym has long been known for its luxurious and inviting fitness club design as well as its high quality, results-oriented personal training programs and high-energy group fitness programs.

              The Dhaka Fitness Gym health club culture is all about quality, results, and passion for exceeding our members’ expectations, we are dedicated to continually improving our clubs and ensuring that our fitness programs and services provide excitement and motivation to inspire our members to make positive changes in their lives.

              My friend always using Valium and no problems with shipping www.maintenance-software.org trust them.
              Don’t hesitate and get started today by signing up in Dhaka Fitness Gym by contacting one of our membership consultants.
            </p>
          </div>
          <div>
          <h3>About Our Team</h3>
            <p>
            Our team is what make Life’s a Gym such a great atmosphere, presenting at Corporate Vitality sessions or just one-on-one with a personal trainer we are putting our energy and experience into best practice. Over the past 13 years we have selected a team of elite who coach with quality and professionalism – at the same time delivering a unique combination of integrity, hard work and passion.
            Our goal is to empower our clients to make the best decisions for the long-term health and happiness.

            Welcome to Dhaka Fitness Gym and feeling fantastic.
            </p>
          </div>
          <div>
            <h3>Profile of Jafar Ahmed</h3>
            <p>           
              Profile of Jafar Ahmed
              Fitness Center Consultant & Specialist
              The owner of “California fitness” Uttara-Bashundhara-& Baridhara, Jafar Ahmed was a student of BAF Shaheen school and college in 1999, He completed his masters in geography from Dhaka university in 2006. He started working in fitness centers of many five star hotels in Dhaka & abroad in the year 2000 to 2005, when he was a student. Later in 2006, he obtained diploma in fitness, gym massage and aromatherapy from Thailand.
              From the year 2006 to 2013 he rendered a long period of time to prepare himself as international standard fitness professional. During this time he has taken different sorts of training at several health clubs of Dubai, Malaysia, Singapore and many other countries. He obtained many certificates as a fitness trainer.
              Jafar Ahmed ,is not only doing fitness , He has professional skills in setting-up steam bath, sauna, jaccuzi, massage center, spa, swimming pool and gymnasium (fitness center) for your home and office places.
              He is also involved in many others
              <a href="http://www.onlinephentermine.net"></a>
              social welfare activities for the country. He went to the great wall of China, campaigning for Sundarban in Bangladesh to be voted as one of the new 7 wonders of the world.
              A few lakh people also voted online through his company “California fitness” after being influenced by Jafar Ahmed Campaign. It was a great achievement for Bangladesh.
              Other then, Jafar Ahmed, was also involved in many national and united nations health, fitness hygienic and social awareness programs. At the same time he received many awards for these purposes from the Bangladesh government and united nations.

              Client Reference:
              Jafar Ahmed has set up GYM, Sauna, Steam & Swimming pool etc. & provided trainers in Bangladesh and abroad. In California Fitness Thailand & Singapore, 36 ADA Brigade Dhaka Cantonment, Army Golf Club Dhaka, Sylhet Station Club, Uttara Fitness Club, California Fitness Uttara, Bashundhara, Baridhara, Gulshan, Concord Group of Companies.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <div><img className='img-fluid my-1' src={pic1} alt="" /></div>
          <div><img className='img-fluid my-1' src={pic2} alt="" /></div>
          <div><img className='img-fluid my-1' src={pic3} alt="" /></div>
          <div><img className='img-fluid my-1' src={pic4} alt="" /></div>
        </div>
      </div>
    </div>
 
  
  );
};

export default About;