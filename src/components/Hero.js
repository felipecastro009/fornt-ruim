import ten from './../assets/10.jpg'

function Hero() {
    return (
        <div class="banner">
         <div class="app-text">
             <h3>airbnb for yatchting</h3>
             <h1>Manage<br />Adventures</h1>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

             <div class="btn-group">
                 <div class="signup-btn">Sign up now</div>
             </div>
         </div>
         <div class="app-picture">
             <img src={ ten }/>
         </div>
     </div>
    )
}

export default Hero;