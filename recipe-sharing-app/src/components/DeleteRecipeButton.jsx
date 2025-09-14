// src/components/DeleteRecipeButton.jsx
import { useNavigate } from 'react-router-dom'
import useRecipeStore from '../recipeStore'

export default function DeleteRecipeButton({ id, onDeleted }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) return
    deleteRecipe(id)
    if (typeof onDeleted === 'function') {
      onDeleted()
    } else {
      // default behavior: go back to list
      navigate('/')
    }
  }

  return (
    <button onClick={handleDelete} style={{ background: '#e74c3c', color: '#fff', border: 0, padding: '6px 10px', borderRadius: 4 }}>
      Delete
    </button>
  )
}
