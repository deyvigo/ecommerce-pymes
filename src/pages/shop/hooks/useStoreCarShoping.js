import { create } from 'zustand'

export const useStoreCarShoping = create((set) => ({
  carProducts: [],
  count: 0,
  addProduct: (product) => set((state) => ({ carProducts: handleAddProduct(state.carProducts, product) })),
  inc: () => set((state) => ({ count: state.count + 1 })),
  deleteProduct: (id) => set((state) => ({ carProducts: handleDeleteProduct(state.carProducts, id) })),
  dec: (i) => set((state) => ({ count: state.count - i }))
}))

const handleAddProduct = (initialState, product) => {
  const pr = initialState.find((p) => p.id === product.id)
  if (pr) {
    const newArrayProducts = initialState.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p))
    return newArrayProducts
  } else {
    return [...initialState, product]
  }
}

const handleDeleteProduct = (initialState, id) => {
  const newArrayProduct = initialState.filter(p => p.id !== id)
  return [...newArrayProduct]
}
