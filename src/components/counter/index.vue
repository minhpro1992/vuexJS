<template>
  <div>
    <button class="btn btn-primary" @click="increment">+</button>
    Count: {{ count }} times. Count is
    {{ evenOrOdd }}
    <button class="btn btn-warning" @click="decrement">-</button>
    <button class="btn btn-secondary" @click="incrementIfEven">
      Increment if count if event
    </button>
    <button class="btn btn-primary" @click="incrementAsync">
      Increment async
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

export { state, getters, actions, mutations }
export default {
  name: 'Counter',
  computed: {
    ...mapGetters(['evenOrOdd', 'count'])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'incrementIfEven',
      'incrementAsync'
    ])
  }
}
</script>
