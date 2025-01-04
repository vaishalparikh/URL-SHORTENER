import { Button } from './components/ui/button'
import './App.css'
import { Input } from './components/ui/input'

function App() {


  return (
    <div>
      <Button variant= "default">Click me</Button>
      <Button variant="outline">Button</Button>
      <Button variant="link">Button</Button>
      <h1 className="text-4xl font-bold text-center">
        Hello, Vite + React!
      </h1>
      <Input placeholder="Enter your name" />
    </div>
  )
}

export default App
