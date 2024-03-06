import Cards from '../../components/cards'
import data from './data'

const Referees = () => {
  return (
    <section id="education">
    <h2>Referees </h2>
    <p>Here are a few people I have worked with in the past. Feel free to reach out to them for a reference.</p>
    
    <div className="container services__container">
      {
        data.map(item => (
          <Cards key={item.id} className='service light'>
            <div className="service__icon" style={{width:"100px", height:"100px", background:"none"}}>
              <img src={item.icon} alt="" />
              </div>
            <div className="service__details">
              <h4>{item.name}</h4>
              <p>{item.company}</p>
              <p>{ item.icon1} {item.email} </p>
              <p>{ item.icon2} {item.tel} </p>
            </div>
          </Cards>
        ))
      }
    </div>
  </section>
  )
}

export default Referees