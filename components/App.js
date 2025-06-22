import Homepage from './components/Homepage'

import './App.css'

const HomepageList = [
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
]
const App = () => (
    <div className="Home-app-container">
      <div className="Home-list-container">
        <img class="image-1" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fmedicare-logo-with-heart&psig=AOvVaw3TytiQbEDICvDMAw5-h1cI&ust=1750480990958000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi20Y2Y_40DFQAAAAAdAAAAABAL" class="img-1 d-flex justify-center mt-6" />
        <h1 className="heading">Welcome to MediCare Companion</h1>
        <p className="description">
        Your trusted partner in medication management. Choose your role to get
        started with personalized features.</p>
       </div>
    </div>

    )

export default App
