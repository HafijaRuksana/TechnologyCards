import './App.css'

import Cards from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]
const App = () => (
  <div className="bg-container">
    <h1 className="head">Learn 4.0 technologies</h1>
    <p className="para">
      get trained by alumni of IITs and top companies like Amazon, Microsoft,
      Intel.\, Nvidia, QualComm, etc. learn directly from professional involved
      in product development.
    </p>
    <div className="content-card">
      <ul className="ul-card">
        {cardsList.map(eachItem => (
          <Cards cardDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default App
