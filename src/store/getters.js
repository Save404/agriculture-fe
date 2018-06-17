const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  nhtoken: state => state.userNh.token,
  nhavatar: state => state.userNh.avatar,
  nhname: state => state.userNh.name,
  nhroles: state => state.userNh.roles,
  mjtoken: state => state.userMj.token,
  mjavatar: state => state.userMj.avatar,
  mjname: state => state.userMj.name,
  mjroles: state => state.userMj.roles
}
export default getters
