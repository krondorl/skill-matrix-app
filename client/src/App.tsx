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
    <>
      <h1 className="text-3xl font-bold underline">Skill Matrix App</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        similique sunt accusamus consequatur vel, aliquam nemo optio voluptates
        quae, itaque, dolorum maxime aliquid! Recusandae quasi porro
        accusantium, molestias a dolore?
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
    </>
  );
}

export default App;
