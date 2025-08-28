import logo from './logo.svg';
import enter from './enter.svg';
import './App.css';

function App() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-[#212121] text-white">
      <header className="absolute top-0 text-xl p-5 bg-[#303030] w-full text-center rounded-lg shadow-sm">
        To-Do List Chatbot
      </header>
      <main className="pt-36 w-1/2">
        {/* User Prompt */}
        <div className='flex justify-end'>
          <div className='bg-[#303030] p-4 rounded-2xl max-w-3/4'>
            <p>GPT, why did the chicken cross the road?</p>
          </div>
          <img src={enter} className="pl-2 h-12 pt-2 scale-95" alt="enter" />
        </div>

        {/* Spacing */}
        <div className='p-4'/>

        {/* Chatbot Response */}
        <div className='flex justify-start'>
          <img src={logo} className="h-12 pt-2" alt="logo" />
          <div className='bg-[#303030] p-4 rounded-2xl mb-8'>
            <p>
              That is not a schedule.<br/>
              Date:  Why did the<br/>
              Time:  Chicken<br/>
              Event: Cross the Road<br/>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
