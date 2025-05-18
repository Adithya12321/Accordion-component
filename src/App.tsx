
import './App.css'
import { About } from './components/About'
import { Accoridan } from './components/Accoridan'

function App() {
  const items = [
    {
            title: "What is Github and how does it work?",
            content:
              "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
          },
          {
            title: "How do I see GitHub's availability?",
            content: "Check our real-time status report",
          },
          {
            title: "Why is GitHub so popular?",
            content:
              "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
          },
  ]

  return (
    <div className='bg-[#2E2E2E] text-[#F3F3F3]  w-full h-screen'>
      <div className='fixed top-1/3  w-full px-10'>
        <div className='border rounded p-2'>
          {
            items.map((data, index) => (
              <Accoridan key={index} title={data.title} content={data.content} />
            ))
          }
        </div>
      </div>
      <About />
    </div>
  )
}

export default App
