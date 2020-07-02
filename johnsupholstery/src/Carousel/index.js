import React from 'react';
import ReactDOM  from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../App/style.scss";

class Testimonials extends React.Component{
    render() {
        return (
            <Carousel style={{"background-color": "#fff8d8"}} >
            <div className='profiles'>
              <img style={{'width': '30%'}} src='https://s3-media0.fl.yelpcdn.com/photo/XdKN1tX94Wup5YpidtsyVA/348s.jpg' />
              <p>"AMAZING!! They were friendly, professional and FAST! My most amazing customer service experience since moving here. These people ROCK"</p>
              <h3>- Rob B, Kaneohe</h3>
            </div>
            <div className='profiles'>
              <img style={{'width': '30%'}} src='https://s3-media0.fl.yelpcdn.com/photo/fk0h0ZRweL4EPI7t0kCSdA/348s.jpg'/>
              <p>"John's Upholstery rocks!! Quality work and reasonable prices. Looked better than new with the new seats. We were so happy. 5 Stars for great work at low cost."</p>
              <h3>- Vince B, Kaneohe</h3>
            </div>
            <div className='profiles'>
              <img style={{'width': '30%'}} src='https://s3-media0.fl.yelpcdn.com/photo/UUhi9JSiLgh0MWtWMkJHBg/348s.jpg'/>
              <p>"Good honest business, even willing to give advice that saves a customer money even though this meant directing business away to another establishment. That is true customer service.  Mahalo nui again."</p>
              <h3>Ji f, Kailua</h3>
            </div>
            <div className='profiles'>
              <img style={{'width': '30%'}} src='https://s3-media0.fl.yelpcdn.com/photo/YRdp47Kh065jYPByIQy_hw/348s.jpg'/>
              <p>"Ryan and the crew did a beautiful job on an antique rocking chair for my daughter.  She is expecting any day now!! We are so ready!! I am so happy I stopped in. Past this place for years and never stopped."</p>
              <h3>Audrey R, Kaneohe</h3>
            </div>
            <div className='profiles'>
              <img style={{'width': '30%'}} src='https://s3-media0.fl.yelpcdn.com/photo/LDu_Oj6g1BHHzzqFH-lt8g/348s.jpg'/>
              <p>"We recently had 6 dining room chairs re upholstered and they look better than new! The company  responded immediately, picked up the chairs from our home and had them finished within 4 days."</p>
              <h3>Joe C, Honolulu</h3>
            </div>
            </Carousel>
        );
    }
};

export default Testimonials