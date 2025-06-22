const App = () => (
    <div className="Home-app-container">
      <div className="Home-list-container">
        <img class="image-1" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fmedicare-logo-with-heart&psig=AOvVaw3TytiQbEDICvDMAw5-h1cI&ust=1750480990958000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi20Y2Y_40DFQAAAAAdAAAAABAL" class="img-1 d-flex justify-center mt-6" />
        <h1 className="heading">Welcome to MediCare Companion</h1>
        <p className="description">
        Your trusted partner in medication management. Choose your role to get
        started with personalized features.</p>
       </div>

       <div class="container-patient-section">
      <div class="d-flex flex-row justify-content-center">
        <div class="patient-card-item">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/lamp-img.png"
            class="patient-card-image"
          />
          <h1 class="patient-card-name">I'm a parient</h1>
          <p class="parient-card-par">Track your medication schedule and maintain your health records</p>
          <ul>
            <li>Mark medications as taken</li>
            <li>Upload proof photos (optional)</li>
            <li>View your medication calendar</li>
            <li>Large, easy-to-use interface</li>
          </ul>
          <button class="btn1 btn-primary" onclick="">Continue as Patient</button>
        </div>
        
        

        <div class="caretake-card-item">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/lamp-img.png"
            class="caretake-card-image"
          />
          <h1 class="caretake-card-name">I'm a Caretaker</h1>
          <p class="caretake-card-par">Monitor and support your loved one's medication adherence</p>
          <ul>
            <li>Monitor medication compliance</li>
            <li>Set up notification preferences</li>
            <li>View detailed reports</li>
            <li>Receive email alerts</li>
          </ul>
          <button class="btn btn-success" onclick="">Continue as Caretaker</button>
        </div>
        </div>
    </div>

    </div>

    )
