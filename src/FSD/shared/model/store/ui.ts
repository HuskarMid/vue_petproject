import { defineStore } from 'pinia'

interface UIState {
  theme: 'light' | 'dark',
  shareContext: boolean,
  photos: Array<{
    id: number
    title?: string
    description?: string
    image?: string
    height?: number
    isChoosed: boolean
  }>
}

const STORAGE_KEY = 'ui-state'

export const isLocalStorageAvailable = () => {
  try {
    const test = 'test'
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}

export const loadState = (): UIState | null => {
  if (!isLocalStorageAvailable()) {
    return null
  }
  try {
    const savedState = localStorage.getItem(STORAGE_KEY)
    return savedState ? JSON.parse(savedState) : null
  } catch (e) {
    console.error('Ошибка при загрузке состояния:', e)
    return null
  }
}

export const saveState = (state: UIState) => {
  if (!isLocalStorageAvailable()) {
    return
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.error('Ошибка при сохранении состояния:', e)
  }
}

export const isPhotoInLocalStorage = (photo: UIState['photos'][0]) => {
  const savedState = loadState()
  return savedState ? savedState.photos.some((p: UIState['photos'][0]) => p.image === photo.image) : false
}

const initialState: UIState = {
  theme: 'dark',
  shareContext: false,
  photos: [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        height: 600,
        isChoosed: false
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1655178046272-f0c560e9a1fc?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1579689252125-767b773f3f69?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1710117748935-4285ca918fd9?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1655178118453-49a385e7adf8?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1718596046660-4ba05969a22d?q=80&w=2505&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1572608626094-bf545cb22b2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM2fHxzdG9ja3xlbnwwfHwwfHx8MA%3D%3D',
        isChoosed: false
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1712142368883-1a40bb0e529f?q=80&w=2475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1579689252125-767b773f3f69?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 11,
        image: 'https://images.unsplash.com/photo-1655178046272-f0c560e9a1fc?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1655178118453-49a385e7adf8?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 13,
        image: 'https://images.unsplash.com/photo-1710117748935-4285ca918fd9?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 14,
        image: 'https://images.unsplash.com/photo-1718596046660-4ba05969a22d?q=80&w=2505&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 15,
        image: 'https://images.unsplash.com/photo-1572608626094-bf545cb22b2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM2fHxzdG9ja3xlbnwwfHwwfHx8MA%3D%3D',
        isChoosed: false
    },
    {
        id: 16,
        image: 'https://images.unsplash.com/photo-1712142368883-1a40bb0e529f?q=80&w=2475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 17,
        image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 18,
        image: 'https://images.unsplash.com/photo-1579689252125-767b773f3f69?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 19,
        image: 'https://images.unsplash.com/photo-1710117748935-4285ca918fd9?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 20,
        image: 'https://images.unsplash.com/photo-1655178046272-f0c560e9a1fc?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 21,
        image: 'https://images.unsplash.com/photo-1655178118453-49a385e7adf8?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 22,
        image: 'https://images.unsplash.com/photo-1718596046660-4ba05969a22d?q=80&w=2505&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 23,
        image: 'https://images.unsplash.com/photo-1572608626094-bf545cb22b2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM2fHxzdG9ja3xlbnwwfHwwfHx8MA%3D%3D',
        isChoosed: false
    },
    {
        id: 24,
        image: 'https://images.unsplash.com/photo-1712142368883-1a40bb0e529f?q=80&w=2475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 25,
        image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 26,
        image: 'https://images.unsplash.com/photo-1579689252125-767b773f3f69?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 27,
        image: 'https://images.unsplash.com/photo-1710117748935-4285ca918fd9?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 28,
        image: 'https://images.unsplash.com/photo-1655178046272-f0c560e9a1fc?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 29,
        image: 'https://images.unsplash.com/photo-1655178118453-49a385e7adf8?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 30,
        image: 'https://images.unsplash.com/photo-1718596046660-4ba05969a22d?q=80&w=2505&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false
    },
    {
        id: 31,
        image: 'https://images.unsplash.com/photo-1572608626094-bf545cb22b2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM2fHxzdG9ja3xlbnwwfHwwfHx8MA%3D%3D',
        isChoosed: false
    },
    {
        id: 32,
        image: 'https://images.unsplash.com/photo-1712142368883-1a40bb0e529f?q=80&w=2475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isChoosed: false,

    },
]
}

export const useUIStore = defineStore('ui', {
  state: (): UIState => {
    const savedState = loadState()
    return savedState || initialState
  },

  getters: {
    getTheme: (state) => state.theme,
    getPhotos: (state) => state.photos,
    getChoosedCount: (state) => state.photos.filter(photo => photo.isChoosed).length,
    getShareContext: (state) => state.shareContext
  },

  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      saveState(this.$state)
    },
    addPhoto(photo: Omit<UIState['photos'][0], 'id'>) {
      this.photos.push({
        id: this.photos.length + 1,
        ...photo
      })
      saveState(this.$state)
    },
    setPhotos(photos: UIState['photos']) {
      this.photos = photos
      saveState(this.$state)
    },
    setPhotoChoosed(id:number) {
        const photo = this.photos.find(photo => photo.id === id)
        if (photo) {
            photo.isChoosed = !photo.isChoosed
            saveState(this.$state)
        }
    },
    toggleShareContext() {
        this.shareContext = !this.shareContext
        saveState(this.$state)
    }
  }
})