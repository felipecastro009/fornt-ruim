import one from './../assets/1.png';
import two from './../assets/2.png';
import tree from './../assets/3.png';

function Services() {
    return (
        <div class="about-services">
         <ul>
             <li>
                 <img src={ one } />
                 <h1>SEO Consultancy</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </li>
             <li>
                 <img src={ two } />
                 <h1>Competitor Analysis</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </li>
             <li>
                 <img src={ tree } />
                 <h1>Social Media Marketing</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </li>
         </ul>
     </div>
    )
}

export default Services;