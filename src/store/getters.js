const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  nhtoken: state => state.userNh.nhtoken,
  nhphone: state => state.userNh.nhphone,
  nhname: state => state.userNh.nhname,
  nhroles: state => state.userNh.nhroles,
  mjtoken: state => state.userMj.mjtoken,
  mjphone: state => state.userMj.mjphone,
  mjname: state => state.userMj.mjname,
  mjroles: state => state.userMj.mjroles
}
export default getters
