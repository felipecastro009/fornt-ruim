import logo from './../assets/logo.png'

function Header() {
    return (
            <div class="navbar">
                <div class="logo">
                    <a href="#">
                        <img src={ logo } />
                    </a>
                </div>
                <div class="login-btn">Login</div>
             </div>   
    );
  }
  
  export default Header;