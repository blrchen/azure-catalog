import { makeObservable } from 'mobx'

class GlobalStore {
  constructor() {
    makeObservable(this, {})
  }
}

export default new GlobalStore()
