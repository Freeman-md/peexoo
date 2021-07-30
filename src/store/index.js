import { createStore } from 'vuex'

export default createStore({
  state: {
    packages: [
      {
        title: 'Wedding CLassic',
        category: 'Wedding',
        items: 15,
        createdAt: '5th Sep 2020',
        amount: 'N350,000'
      },
      {
        title: 'Beauty Campaign',
        category: 'Beauty',
        items: 2,
        createdAt: '5th Sep 2020',
        amount: 'N45,000'
      },
      {
        title: 'Prewedding Gold',
        category: 'Wedding',
        items: 2,
        createdAt: '5th Sep 2020',
        amount: 'N45,000'
      },
      {
        title: 'Cullnary Photography',
        category: 'Food',
        items: 18,
        createdAt: '5th Sep 2020',
        amount: 'N75,000'
      }
    ]
  },
  getters: {
    getPackages: (state) => state.packages
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
