import "./App.css";

function PersonalInfo({ name, role }) {
  return (
    <div className="mt-12 p-8 bg-indigo-800/50 rounded-2xl border border-indigo-500/30 backdrop-blue-sm">
      <h2 className="text-3xl font-bold mb-4 text-indigo-300">
        Hello! I'am {name}
      </h2>
      <p className="text-xl text-gray-300">
        I'm a {role} with a passion for building amazing web applications.
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center text-white">
      <div className="text-center p-10 bg-white/10 backdrop-blue-lg rounded-2xl shadow-2xl max-w-lg">
        <h1 className="text-6xl font-bold mb-6">Hello React! 🚀</h1>
        <p className="text-2xl mb-8">This is my first component in month 3</p>
        <PersonalInfo name="Mehran" role="Software Engineer" />
        <button
          className="mt-10 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl text-xl font-semibold transition transform hover:scale-105 active:scale-95"
          onClick={() => alert("Welcome To React! 🚀")}
        >
          Click To See!
        </button>
      </div>
    </div>
  );
}

export default App;
