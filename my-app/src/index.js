import Vue from 'vue'
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

import App from './components/App.vue'

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'http://localhost:4001'
  })
})

Vue.use(VueApollo);

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})
