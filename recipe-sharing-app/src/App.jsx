// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'

function Home() {
  return (
    <div style={{ maxWidth: 900, margin: 'auto', padding: 20 }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}

export default function App() {
  return (
    <div>
      <nav style={{ padding: 12, borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
      </nav>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </main>
    </div>
  )
}
