import Cards from '../../components/cards'
import data from './data.js'
import './projects.css'



const Project = () => {
  return (
    <section id="services">
    <h2>My Services</h2>
    <p>I give you the best in all the services below</p>
    <div className="container services__container">
      {
        data.map(item => (
          <Cards key={item.id} className='service light'>
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Cards>
        ))
      }
    </div>
  </section>
  )
}

export default Project