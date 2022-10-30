import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Tasks from './components/Tasks/Tasks';
const headerStyle = { color: 'darkolivegreen' }

function App() {
  return (
    <div className="App">
      <article>
        <div className="blog">
          <h2 style={headerStyle}>My First Blog</h2>
          <p><small>By-Shaidul Islam</small></p>
          <p style={{ lineHeight: '2rem' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, molestiae animi at corrupti unde odit saepe praesentium et rerum veritatis optio tempore, sequi facere consequatur voluptatum officia quod illum ex, esse assumenda nesciunt eveniet. Necessitatibus corporis rem dolore tempore veritatis quia voluptatibus, vero ipsa doloremque quo eos placeat optio consectetur iure repudiandae ipsum. Earum explicabo ducimus aspernatur nesciunt nam. Aliquid nostrum ut repudiandae, odio vel sapiente alias obcaecati possimus suscipit voluptates doloremque? Alias, hic, voluptates ut corporis magnam dignissimos sunt quasi delectus explicabo aliquam, cupiditate sed sequi quos et officia fuga dicta. Atque praesentium dolores perferendis odit soluta cupiditate labore.</p>

        </div>
        <Blog heading="My Second Blog" author="By-Jamil Khan"></Blog>
        <Blog heading="My Third Blog" author="By-Jakki Buhiya"></Blog>
        <Blog heading="My Fourth Blog" author="By-Parvez alom"></Blog>
      </article>
      <Mobile></Mobile>
      <Tasks></Tasks>


    </div>
  );
}
function Blog(props) {
  return (
    <div className='blog'>
      <h2 style={headerStyle}>{props.heading}</h2>
      <p ><small>{props.author}</small></p>
      <p style={{ lineHeight: '2rem' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, molestiae animi at corrupti unde odit saepe praesentium et rerum veritatis optio tempore, sequi facere consequatur voluptatum officia quod illum ex, esse assumenda nesciunt eveniet. Necessitatibus corporis rem dolore tempore veritatis quia voluptatibus, vero ipsa doloremque quo eos placeat optio consectetur iure repudiandae ipsum. Earum explicabo ducimus aspernatur nesciunt nam. Aliquid nostrum ut repudiandae, odio vel sapiente alias obcaecati possimus suscipit voluptates doloremque? Alias, hic, voluptates ut corporis magnam dignissimos sunt quasi delectus explicabo aliquam, cupiditate sed sequi quos et officia fuga dicta. Atque praesentium dolores perferendis odit soluta cupiditate labore.</p>
    </div>
  )
}
function Mobile() {
  const [battery, setBattery] = useState(100)
  const decreaseBattery = () => {
    if (battery === 0) {
      return;
    }
    const decreaseAmount = battery - 10;
    setBattery(decreaseAmount)
  }

  return (
    <div className='mobile'>
      <h2>{battery}</h2>
      <button onClick={decreaseBattery}>Battery down</button>
    </div>
  )
}


export default App;
