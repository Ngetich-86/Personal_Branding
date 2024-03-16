import Cards from '../../components/cards'
import data  from './data.js'

const Experience = () => {
  return (
    <section id="education">
    <h2>My Experience</h2>
    {/* <p> 😁😁</p> */}
    <div className="container services__container">
      {
        data.map(item => (
          <Cards key={item.id} className='service light'>
            <div className="service__icon" style={{background:"white",border:"2px solid grey"}}>
              {/* {item.icon} */}
              <img src={item.icon} alt="" />
              </div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </Cards>
        ))
      }
    </div>
  </section>
  )
}

export default Experience