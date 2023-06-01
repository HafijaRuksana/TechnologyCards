// Write your code here.
import './index.css'

const Cards = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default Cards
