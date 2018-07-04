const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  phone: state => state.user.phone,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
