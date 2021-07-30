import { createStore } from 'vuex'

export default createStore({
  state: {
    profileCard: true,
    packages: [
      {
        id: 1,
        title: 'Wedding CLassic',
        category: 'Wedding',
        items: 15,
        createdAt: '5th Sep 2020',
        amount: '350000'
      },
      {
        id: 2,
        title: 'Beauty Campaign',
        category: 'Beauty',
        items: 2,
        createdAt: '5th Sep 2020',
        amount: '45000'
      },
      {
        id: 3,
        title: 'Prewedding Gold',
        category: 'Wedding',
        items: 2,
        createdAt: '5th Sep 2020',
        amount: '45000'
      },
      {
        title: 'Cullnary Photography',
        category: 'Food',
        items: 18,
        createdAt: '5th Sep 2020',
        amount: '75000'
      }
    ],
    packageItems: [
      {
        id: 1,
        packageItem: '150 edited images',
        quantity: 1,
        price: 0,
        amount: 0
      },
      {
        id: 2,
        packageItem: 'Packs of balloon',
        quantity: 1,
        price: 15000,
        amount: 15000
      },
      {
        id: 3,
        packageItem: 'Big Circular Ear rings',
        quantity: 2,
        price: 10000,
        amount: 20000
      },
    ],
  },
  getters: {
    getProfileCard: state => state.profileCard,
    getPackages: state => state.packages,
    getPackageItems: state => state.packageItems
  },
  mutations: {
    toggleProfileCard: (state) => {
      state.profileCard = !state.profileCard
    }
  },
  actions: {
  },
  modules: {
  }
})
