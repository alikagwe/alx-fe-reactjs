// src/components/RecipeList.jsx
import { Link } from 'react-router-dom'
import useRecipeStore from '../recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes)
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)

  const handleDelete = (id) => {
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(id)
    }
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}
      {recipes.map((r) => (
        <div
          key={r.id}
          style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}
        >
          <h3>{r.title}</h3>
          <p>{r.description.slice(0, 120)}{r.description.length > 120 ? '…' : ''}</p>
          <div>
            <Link to={`/recipes/${r.id}`} style={{ marginRight: 8 }}>View</Link>
            <Link to={`/recipes/${r.id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
            <button onClick={() => handleDelete(r.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
