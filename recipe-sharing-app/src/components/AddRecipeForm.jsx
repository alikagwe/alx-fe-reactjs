// src/components/AddRecipeForm.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useRecipeStore from '../recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return
    const newRecipe = { id: Date.now().toString(), title, description }
    addRecipe(newRecipe)
    setTitle('')
    setDescription('')
    navigate(`/recipes/${newRecipe.id}`)
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
