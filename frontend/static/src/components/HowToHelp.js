import React from 'react';
import pieChart from "./images/donation-pie-chart.png";


class HowToHelp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }



  render(){
    return(
      <React.Fragment>
        <div className='how-to-help container'>
          <div className='how-i-can-help row'>
            <h1>What Can I Do to Help?</h1>
            <div className='how-i-can-help-para'>
              <span>Beyond providing charitable donations or donations of food, clothes and household goods, The Renewal Center also needs volunteers. More than 1,300 people volunteer for us each year and make the dierence in the lives of thousands.</span><br/><br/>
              <span>We need people who can serve lunches (12 pm to 1 pm). Each volunteer is trained to interact with clients who come to the Renewal Center for food, clothing or other help. Many volunteers choose one day a month, each month. Some help on more than one day each month.</span><br/><br/>
              <span>Once trained, volunteers are encouraged to help certain duties whether organizing clothes, arranging goods in the food pantry, clothes sorting, among many other services.</span>
            </div>
          </div>
          <div className='other-ways-to-help row'>
            <h1>Can’t Volunteer? Other Ways to Help!</h1>
            <div className='other-ways-to-help-para col-12 col-lg-7'>
              <span>The Renewal Center is completely supported by private donations. As Christians, we belive that we are called to care and protect the poor and needy. We belive the best way to do this is for the local churches and community to come together and care for those in need ourselves.</span><br/><br/>
              <span>The greater Ouachita parish community and private donors have done an amazing job to help us care for those in need. We are forever thankful for all that has been provided to us, and we are excited to continue to help our community.</span>
            </div>
            <div className='donations-pie-chart col-lg-4 col-12'>
              <img src={pieChart} alt=""/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HowToHelp;
