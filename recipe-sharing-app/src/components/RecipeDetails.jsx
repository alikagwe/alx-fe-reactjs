// src/components/RecipeDetails.jsx
import { useParams, Link, useNavigate } from 'react-router-dom'
import useRecipeStore from '../recipeStore'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
  const navigate = useNavigate()

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <Link to="/">Back to list</Link>
      </div>
    )
  }

  const handleDelete = () => {
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(id)
      navigate('/')
    }
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 8 }}>
          Edit
        </Link>
        <button onClick={handleDelete}>Delete</button>
        <div style={{ marginTop: 12 }}>
          <Link to="/">Back to list</Link>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
