/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import './App.css';
import Employee from './components/Employee';

function App() {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <header>
        <h1 className="text-3xl font-bold underline">Skill Matrix App</h1>
      </header>
      <main className="my-4">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          similique sunt accusamus consequatur vel, aliquam nemo optio
          voluptates quae, itaque, dolorum maxime aliquid! Recusandae quasi
          porro accusantium, molestias a dolore?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </div>
      </main>
      <footer className="">Made with ❤️ love and ☕ coffee. Since 2025.</footer>
    </div>
  );
}

export default App;
