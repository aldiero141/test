export default function ({ $axios, redirect, app }) {
  $axios.onRequest((config) => {
    if (app.$cookies.get('access_token')) {
      console.log(app.$cookies.get('access_token'), config.url)
      app.$axios.setHeader('Authorization', app.$cookies.get('access_token'))
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/403')
    }
  })
}
