import enter from './enter.svg';
import './App.css';

function App() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-[#212121] text-white">
      <header className="absolute top-0 text-xl p-5 bg-[#303030] w-full text-center rounded-lg shadow-sm">
        To-Do List App
      </header>
      <main className="pt-36 w-3/4">
        {/* User Prompt */}
        <div className="flex justify-center">
          <input className="bg-[#303030] p-4 rounded-2xl w-3/4 shadow-md" placeholder="Type your task here..."></input>
          <button className="pl-2 h-12 pt-2 scale-95">
            <img src={enter} alt="enter" className="w-full h-full" />
          </button>
        </div>

        {/* Spacing */}
        <div className="p-6" />

        {/* To-Do List */}
        <div className="flex justify-center">
          <div className="w-[85%] flex flex-col gap-y-4">
            <p className="font-semibold text-xl">📋 Your To-Do List</p>
            <hr />

            {/* Card 1*/}
            <div className="bg-[#303030] p-4 rounded-2xl shadow-lg">
              <p className="text-base">
                <span className="text-xl font-semibold">Calculus Class</span>
                <br />
                <br />
                
                <br />
                Date: 30 Februari 2025,
                <br />
                Time: 11:00 PM
                <br />
                Status: Active
                <br />
              </p>
              <input type="checkbox" />
            </div>

            {/* Card 2*/}
            <div className="bg-[#303030] p-4 rounded-2xl shadow-lg">
              <p className="text-base">
                <span className="text-xl font-semibold">Physics Class</span>
                <br />
                <br />
                
                <br />
                Date: 30 Februari 2025
                <br />
                Time: 10:00 PM
                <br />
                Status: Active
                <br />
              </p>
              <input type="checkbox" />
            </div>

            {/* Card 3*/}
            <div className="bg-[#303030] p-4 rounded-2xl shadow-lg">
              <p className="text-base">
                <span className="text-xl font-semibold">Organization Meeting</span>
                <br />
                <br />
                
                <br />
                Date: 1 March 2025
                <br />
                Time: 08:00 PM
                <br />
                Status: Active
                <br />
              </p>
              <input type="checkbox" />
            </div>

            {/* Card 4*/}
            <div className="bg-[#303030] p-4 rounded-2xl shadow-lg">
              <p className="text-base">
                <span className="text-xl font-semibold">Meeting with Lecturer</span>
                <br />
                <br />
                
                <br />
                Date: 2 March 2025
                <br />
                Time: 05:00 PM
                <br />
                Status: Active
                <br />
              </p>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
