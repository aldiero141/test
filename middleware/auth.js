export default function ({ app, route, redirect }) {
  if (!app.$cookies.get('access_token')) {
    if (!route.path.includes('/login') && !route.path.includes('/register')) {
      return redirect('/login')
    }
  }
  if (app.$cookies.get('access_token')) {
    if (route.path.includes('/login') || route.path.includes('/register')) {
      return redirect('/profile')
    }
  }
}
