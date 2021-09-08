import './App.css';
import palsy from './images/palsy.jpg'
import cast from './images/cast.jpg'
import womanKids from './images/woman-kids.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's talk about accessibility!</h1>
        <img
          src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=941&q=80"
          className=""
        />
        <h2>What types of disabilities exist for viewing web content?</h2>
        <dl>
          <dt>Visual</dt>
          <dd>
            Visual disabilities includes blindness, low vision and color
            blindness.
          </dd>
          <dt>Hearing</dt>
          <dd>
            Hearing disabilities includes hearing impairments and deafness.
          </dd>
          <dt>Neurological</dt>
          <dd>
            Conditions and disorders involving the central and peripheral
            nervous systems such as epilepsy, Alzheimer disease, Parkinson's
            disease, etc.
          </dd>
          <dt>Cognitive</dt>
          <dd>
            Cognitive disabilities includes attention, learning disabilities and
            logic.
          </dd>
          <dt>Motor</dt>
          <dd>
            Motor disabilities includes limited fine motor control, muscle
            slowness, difficulty or inability to use hands.
          </dd>
        </dl>
      </header>
      <main>
        <section className="sectionTwo">
          <h2>Why Is Web Accessibility Important?</h2>
          <p>
            15% of the world’s population possesses some sort of disability.
            That means <strong>1 Billion</strong> of the world's population live
            with a disability
          </p>
          {/* <p>
            Accessibility is a component of design and development that touches
            on almost every element of the website’s creation. It overlaps the
            aspects of mobile-friendly designs, device independence, multi-modal
            interaction, usability, search engine optimization (SEO) and more.
            Accessible websites can have better search results, reduced
            maintenance costs, increased audience reach, and demonstrate
            corporate social responsibility (CSR). Therefore, having a
            well-designed, accessible website doesn’t just make your website
            available to those with disabilities, but it can also significantly
            improve the user experience for all users of your site.
          </p> */}
        </section>
        <section className="sectionThree">
          <h2>All types of disabilities</h2>
          <h3>Who has limited mobility?</h3>
          <p>
            Consider these three people on the screen. Which of these three
            people have limited mobility? There's a man in wheelchair with
            cerebral palsy. SO he has impaired motor functioning for upper and
            lower body. There's a girl with a broken arm in a cast. And there's
            a woman holding children. Let's have a pop quiz. Which of these three people have limited mobility? 
          </p>
          <div className="flex-grid">
            <figure className="col">
              <img src={palsy} alt="man with palsy sitting in wheelchair" />
            </figure>
            <figure className="col">
              <img src={cast} alt="girl in cast walking" />
            </figure>
            <figure className="col">
              <img
                src={womanKids}
                alt="woman struggling to hold kids and phone"
              />
            </figure>
          </div>
        </section>
        <section className="sectionFour"></section>
        <h3>Most Common Web Accessibility Problems</h3>
        <figure>
          <img src="https://assets.monsido.com/images/2021/04/14/pasted-image-0-7.png" />
          <figcaption>No Alt Text</figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.monsido.com/images/2021/04/14/pasted-image-0-7.png"
            alt="Most common WCAG failures (% of home pages)"
          />
          <figcaption>With Alt Text</figcaption>
        </figure>
      </main>
    </div>
  );
}

export default App;
