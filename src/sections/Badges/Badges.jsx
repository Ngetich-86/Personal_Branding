import data from './data.js'
import "./badges.css"
const Badges = () => {
  return (
    <div className="container" style={{textAlign: "center"}}>
    <h2>My Badges</h2>
    <p>Click to view my verified achievement</p>
    <div className="badge__container">
      {
        data.map(item => (
          <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
          <div key={item.id} className=''>
            <div className="badge_img">
              <img src= {item.icon} alt=""  />
              <h4>{item.name}</h4>
              
            </div>
            
          </div>
          </a>
        ))
      }
    </div>
    </div>
  )
}

export default Badges