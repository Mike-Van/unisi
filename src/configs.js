// const CFG = typeof window === 'object' ? window.__NEXT_DATA__.runtimeConfig : process.env
// export const ENV = CFG.env
//
// const NODE_URL = CFG.NODE_URL || 'https://node.clik-test.com/portal'
// const HASURA_URL = CFG.HASURA_URL || 'node.clik-test.com/hasura-portal'
//
// export const GQL_URL = 'https://' + HASURA_URL + '/v1alpha1/graphql'
// export const WSS_URL = 'wss://' + HASURA_URL + '/v1alpha1/graphql'
//
// export function getRoutes() {
//   return {
//     index: { link: '/', title: 'Dashboard', icon: 'home', auth: true },
//     loyalty: { link: '/loyalty', title: 'Loyalty', icon: 'shopping-bag', auth: true },
//     login: { link: '/login', title: 'Login', hide: true },
//     register: { link: '/register', title: 'Register', hide: true },
//     staff: { link: '/staff', title: 'Staff Managment', icon: 'home', auth: true },
//   }
// }
//
// export const endpoints = {
//   areas: NODE_URL + '/areas/',
//   upload: (NODE_URL || 'https://node.clik-test.com/ekmc') + '/upload',
//   qr: NODE_URL + '/qr',
//   login: NODE_URL + '/merchant/login',
//   consumer: 'https://node.clik-test.com/ekmc' + '/ekyc/',
//   consumers: NODE_URL + '/consumers'
// }
//
// export const firebase = {
//   apiKey: 'AIzaSyDAAwa8AyC14lFm7_OEo8hixsF9v3QCmI0',
//   messagingSenderId: '583876324967',
//   appId: '1:583876324967:web:826f22a1c0618cb4edeec2'
// }
//
// export default {
//   ENV,
//   GQL_URL,
//   WSS_URL,
//   endpoints,
//   getRoutes,
//   firebase
// }
