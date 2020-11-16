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
            <div className='container'>
              <div className='mission-body row'>
                <div className='col-12 col-md-6 mission-title'>
                <h1 className='col-12'>OUR <br/> MISSION</h1>
                </div>
                <div className='col-12 col-md-6 mission-para'>
                    <section className='mission-statement'>
                      <h3 className='mission-statement-head'>PROVIDE</h3>
                      <span className='mission-statement-para'>
                        Provide nutritious meals to promote good physical health.
                      </span>
                    </section>
                    <section className='mission-statement'>
                      <h3 className='mission-statement-head'>SHARE</h3>
                      <span className='mission-statement-para'>
                        Share a clear presentation of the Gospel of Jesus Christ as we develop personal relationships with those who come to the Shelter.
                      </span>
                    </section>
                    <section className='mission-statement'>
                      <h3 className='mission-statement-head'>EQUIP</h3>
                      <span className='mission-statement-para'>
                        Equip participants with life skills (education, training, jobs, etc) to move from their current state of need to a place of self sufficiency.
                      </span>
                    </section>
                    <section className='mission-statement'>
                      <h3 className='mission-statement-head'>ENGAGE</h3>
                      <span className='mission-statement-para'>
                        Engage cooperative partnerships for a common purpose among those in the business, civic, and community-minded organizations providing assistance and services to people in need of renewal mind, body, and spirit.
                      </span>
                    </section>
                </div>
              </div>
            </div>
            <div className='row img-caro'>
            <div className='col-12 col-md-6'><ImageCarousel/></div>
            </div>
            <div className='container'>
              <div className='focus-title'>
              <h1>OUR FOCUS</h1>
              </div>
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
          <div className=' row '>
          <div className='col-12'><Events/></div>

          </div>
    </React.Fragment>

    )
  }
}

export default Home;
