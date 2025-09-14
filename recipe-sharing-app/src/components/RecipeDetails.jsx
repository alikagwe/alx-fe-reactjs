// src/components/RecipeDetails.jsx
import { useParams, Link } from 'react-router-dom'
import useRecipeStore from '../recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

export default function RecipeDetails() {
  const { id } = useParams()
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))

  if (!recipe) {
    return (
      <div style={{ padding: 16 }}>
        <h2>Recipe not found</h2>
        <Link to="/">Back to list</Link>
      </div>
    )
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>{recipe.title}</h1>
      <p style={{ whiteSpace: 'pre-wrap' }}>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 10 }}>Edit</Link>
        <DeleteRecipeButton id={id} />
      </div>

      <div style={{ marginTop: 16 }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  )
}
