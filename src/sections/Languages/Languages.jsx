// import Cards from '../../components/cards'
import data  from './data.js'
import "./lang.css"
const Languages = () => {
  return (
    <div id="languages">
         <h3>Programming Languages,tools and technologies</h3>
    <div className="lang__container">
      {
        data.map(item => (
          <div key={item.id} className=''>
            <div className="">{item.icon}
            <h4>{item.title}</h4>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Languages