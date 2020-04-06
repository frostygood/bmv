import Axios from 'axios';

export const state = () => ({
    ipInformations: {},
    user_ip: '',
    ip_country: ''
});
const getters = {
    ipInformations: state => {
      return state.ipInformations
    },
    USER_IP: state => {
        return state.user_ip;
    },
    IP_COUNTRY: state => {
      return state.ip_country;
    }
};
const mutations = {
    SET_ipInformations: (state, payload) => {
      state.ipInformations = payload;
    },
    SET_USER_IP: (state, payload) => {
      state.user_ip = payload;
    },
    SET_IP_COUNTRY: (state, payload) => {
      state.ip_country = payload;
    }
};
const actions = {  
  async detect_ip ({ commit, state}) {
    if (localStorage.infoIp) {
      commit("SET_ipInformations", JSON.parse(localStorage.infoIp));
      commit("SET_USER_IP", state.ipInformations.ip);
      commit("SET_IP_COUNTRY", state.ipInformations.country.name_en);
      return console.log('записали геоданные');
    } else {
      await Axios({
          method:'get',
          url: 'https://api.sypexgeo.net/'
        })
        .then(response => {
          commit("SET_ipInformations", response.data);
          commit("SET_USER_IP", response.data.ip);
          commit("SET_IP_COUNTRY", response.data.country.name_en);
            let sObj = JSON.stringify(response.data);
            localStorage.infoIp = sObj;
            return console.log(['получили данные про ip', response]);
        })
        .catch(error => {
            return console.log(['Ошибка! Не получилось загрузить ip информацию', error.response]);
        })
    }
  }

  
};

export default {
  state,
  getters,
  mutations,
  actions,
};