import './App.css'
import { VideosProvider } from './context/VideosContext.jsx'
import AppRoutes from './routes/routes.jsx'

function App() {

  return (
    <>
    <VideosProvider>
      <AppRoutes />
    </VideosProvider>
    </>
  )
}

export default App
