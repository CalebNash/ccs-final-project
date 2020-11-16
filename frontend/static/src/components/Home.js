import React from 'react';
import Events from './Events.js';
import ImageCarousel from './ImageCarousel'




class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {


    }

  }



  render(){
    // <div>
    // <div className='home-body row'>
    //   <div className='col-12 col-md-6'>
    //   <div className='mission-statement row'>
    //     <h1 className='col-12'>Our Mission</h1>
    //     <ol>
    //       <li>Provide nutritious meals to promote good physical health.</li>
    //       <li>Share a clear presentation of the Gospel of Jesus Christ as we develop personal relationships with those who come to the Shelter.</li>
    //       <li>Equip participants with life skills (education, training, jobs, etc) to move from their current state of need to a place of self sufficiency.</li>
    //       <li>Engage cooperative partnerships for a common purpose among those in the business, civic, and community-minded organizations providing assistance and services to people in need of renewal mind, body, and spirit.</li>
    //     </ol>
    //   </div>
    //   </div>
    return(
          <React.Fragment>
          <h1 className='row mission-title'>OUR MISSION</h1>
            <div className='container mission-container'>
              <div className='mission-body1 row'>
                <section className=' col-12 col-md-6 mission-statement'>
                  <h3 className='mission-statement-head'>PROVIDE</h3>
                  <span className='mission-statement-para para1'>
                    Provide nutritious meals to promote good physical health to the homeless and those in need.
                  </span>
                </section>
                <section id='state2' className=' col-12 col-md-6 mission-statement'>
                  <h3 className='mission-statement-head'>EQUIP</h3>
                  <span className='mission-statement-para para2'>
                    Equip participants with life skills (education, training, jobs, etc) to move from their current state of need to a place of self sufficiency.
                  </span>
                </section>
              </div>
              <div className='mission-body2 row'>

                    <section className='col-12 col-md-6 mission-statement'>
                      <h3 className='mission-statement-head'>SHARE</h3>
                      <span className='mission-statement-para para3'>
                        Share a clear presentation of the Gospel of Jesus Christ as we develop personal relationships with those who come to the Shelter.
                      </span>
                    </section>
                    <section className='col-12 col-md-6 mission-statement'>
                      <h3 className='mission-statement-head'>ENGAGE</h3>
                      <span className='mission-statement-para para4'>
                        Engage cooperative partnerships for a common purpose among those in the business, civic, and community-minded organizations providing assistance and services to people in need of renewal mind, body, and spirit.
                      </span>
                    </section>
              </div>
            </div>
            <div className='row img-caro'>
            <div className='col-12 col-md-6'><ImageCarousel/></div>
            </div>
            <h1 className='focus-title'>OUR FOCUS</h1>
            <div className='container focus-container'>
              <div className='focus-body row'>
                <div className='col-12 col-md-6 serve-groups'>
                  <h3 className='col-12'>WE SERVE 3 DISTINCT GROUPS</h3>
                  <ol>
                    <li>The absolute homeless.</li>
                    <li>Those with shelter, but NO utilites.</li>
                    <li>Those who have difficulty managing their funds.</li>
                  </ol>
                </div>
                <div className='col-12 col-md-6 support-areas'>
                <h3 className='col-12'>AREAS OF SUPPORT</h3>
                <ol>
                  <li>Food and shelter, providing a safe daytime place for women, children and men.</li>
                  <li>Overnight passage shelter.</li>
                  <li>Transitional intervention program and housing for single men.</li>
                  <li>A one-stop for the homeless, including medical care.</li>
                  <li>Life training services.</li>
                </ol>
                </div>
              </div>
            </div>
          <div className=' row img-caro'>
          <div className='col-12 col-md-6'><Events/></div>
          </div>
          <h1 className='approach-title'>OUR APPROACH</h1>
          <div className='container approach-container'>
            <div className='approach-body'>
              <ul>
                <li className='approach-para'>The local church should be the first responder</li>
                <li className='approach-para'>In the event the local church cannot provide support, the Renewal Center will provide a loving, thoughtful interview to determine needs</li>
                <li className='approach-para'>A Christian Care Management plan will be established to a member church</li>
                <li className='approach-para'>Meal and overnight shelter will be provided as the case management plan progresses</li>
              </ul>
              <div className='row approach-example'>
                <div className='col-12 row approach-example-body'>
                  <div className='approach-example1'>INTAKE</div><i className="fas fa-arrow-right approach-arrow"></i><div className='approach-example2'>MEET IMMEDIATE <br/> NEEDS</div><i className="fas fa-arrow-right approach-arrow"></i><div className='approach-example3'>DECIPLESHIP <br/> & LIFE TRAINING</div>
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>

    )
  }
}

export default Home;
