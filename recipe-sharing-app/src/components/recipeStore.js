// src/recipeStore.js
import { create } from 'zustand'

const persistToLocal = (get) => {
  try {
    localStorage.setItem('recipes', JSON.stringify(get().recipes))
  } catch (e) {
    console.warn('Could not persist recipes to localStorage', e)
  }
}

const useRecipeStore = create((set, get) => ({
  recipes: JSON.parse(localStorage.getItem('recipes') || '[]'),

  addRecipe: (newRecipe) => {
    set((state) => {
      const updated = { recipes: [...state.recipes, newRecipe] }
      return updated
    })
    persistToLocal(get)
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => {
      const recipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      )
      return { recipes }
    })
    persistToLocal(get)
  },

  deleteRecipe: (id) => {
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) }))
    persistToLocal(get)
  },

  setRecipes: (recipes) => {
    set({ recipes })
    persistToLocal(get)
  },
}))

export default useRecipeStore
