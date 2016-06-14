function action(type, payload = {}) {
  return {type, ...payload}
}

export const increment = () => action('INCREMENT')
export const decrement = () => action('DECREMENT')

export const incrementAsync = () => action('INCREMENT_ASYNC')
export const decrementAsync = () => action('DECREMENT_ASYNC')
