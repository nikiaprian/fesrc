//eslint-disable-next-line
import axios from 'axios';
import create from 'zustand';


const useAuthStore = create((set, get) => ({
  users: [],
  user: {},
  token: '',
  isLoggedIn: false,
  setUsers: (data) => set((state) => ({ users: data })),
  setUser: (data) => set((state) => ({ user: data })),
  setToken: (data) => set((state) => ({ token: data })),
  setIsLoggedIn: (data) => set((state) => ({ isLoggedIn: data })),
}));


export default useAuthStore;
