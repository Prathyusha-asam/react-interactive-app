import { useState, useEffect } from "react";

function Contact() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);
  const [items, setItems] = useState(["React", "Hooks", "Router"]);

  // useEffect example (Live Clock)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function addItem() {
    setItems([...items, `New Skill ${items.length + 1}`]);
  }

  return (
    <div className={darkMode ? "page dark" : "page"}>
      <h1>React Feature Showcase</h1>
      {/* Counter */}
      <section>
        <h2>useState Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </section>

      {/* Live Clock */}
      <section>
        <h2>useEffect Live Clock</h2>
        <p>{time.toLocaleTimeString()}</p>
      </section>

      {/* Dynamic List */}
      <section>
        <h2>Dynamic List Rendering</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>Add Item</button>
      </section>

      {/* Theme Toggle */}
      <section>
        <h2>Conditional Rendering (Theme Toggle)</h2>
        <button onClick={() => setDarkMode(!darkMode)}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </section>
    </div>
  );
}

export default Contact;
