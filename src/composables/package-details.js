import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

export const usePackageDetailsComposable = () => {
  const store = useStore()

  const serviceCharge = reactive({
      price: 10000,
      amount: 10000
    })
  const newItems = reactive([
    {
      id: 1,
      packageItem: 'Confetti and Flowers',
      quantity: 2,
      price: 3000,
      amount: 6000
    },
  ])
  const packageItems = reactive(store.getters.getPackageItems)

  const noPrice = (price) => price <= 0

  const total = computed(() => {
    let subTotal = 0
    subTotal += serviceCharge.amount
    newItems.forEach(item => {
      subTotal += item.amount
    })
    packageItems.forEach(item => {
      subTotal += item.amount
    })
    return subTotal
  })

  return {
    serviceCharge,
    newItems,
    packageItems,
    noPrice,
    total,
  }

}