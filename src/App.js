import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex justify-center min-h-screen bg-[#212121] text-white">
      <header className="absolute top-0 text-xl p-5 bg-[#303030] w-screen text-center rounded-lg shadow-sm">
        To-Do List Chatbot
      </header>
      <main className="pt-36 w-1/2">
        {/* User Prompt */}
        <div className='flex justify-end'>
          <div className='bg-[#303030] p-4 rounded-2xl max-w-3/4'>
            <p>GPT, why did the chicken cross the road?</p>
          </div>
        </div>

        {/* Spacing */}
        <div className='p-4'/>

        {/* Chatbot Response */}
        <div className='flex justify-start'>
          <img src={logo} className="h-12 pt-2" alt="logo" />
          <div className='bg-[#303030] p-4 rounded-2xl mb-8'>
            <p>
              Next Steps<br/>
              <br/>
              Sketch Your Module Outline<br/>
              Start with an intro lesson, then follow with HTML structure → styling → layout → responsive design → tools → project work.<br/>
              <br/>
              Embed Resources Strategically<br/>
              Include links to the Odin overview, Noble Desktop syllabus, UCSD course, Coursera labs, and MDN documentation at appropriate places within the content.<br/>
              <br/>
              Create Supporting Materials<br/>
              <br/>
              Slides or reading content explaining each concept.<br/>
              <br/>
              Step-by-step exercises, quizzes, and a final mini-project.<br/>
              <br/>
              Provide external resource links for deeper exploration and reference.<br/>
              <br/>
              Add Interactivity<br/>
              Consider embedding code pens, live coding exercises, or referring learners to interactive platforms like Khan Academy.<br/>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
