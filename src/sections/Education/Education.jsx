import Cards from '../../components/cards'
import data from './data.js'
import "./education.css"
// import HeaderImage from '../../assets/kyulogo.jpg'
const Education = () => {
  return (
    <section id="education">
    <h2>📚My Education Background📚</h2>
    <p>My Education Background 😁😁</p>
    <div className="container services__container">
      {
        data.map(item => (
          <Cards key={item.id} className='service light'>
            <div className="service__icon" style={{ width: '90px', height: '70px',background:"none" }}>
              <img src={item.image} alt="" />
              </div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <h4>{item.location}</h4>
                <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          </Cards>
        ))
      }
    </div>
  </section>
  )
}

export default Education