import axios from 'axios';

const api = axios.create({
    // baseURL: "http://192.168.0.105:7002/api/v1"
    baseURL: "http://192.168.0.106:7040/api/v1"
    // baseURL: "https://boncabrito-app-api.jorgeemanoel.com/api/v1"
    // baseURL: "http://10.8.0.6:7002/api/v1"
});

const Auth = {
  async sendForm(data) {
    console.log(data);
    return api
    .post('/generate/form', {form:data})
    .then(r => {
      return {
        ok: true,
        resume: r.data.resume,
      }
    })
    .catch(e => {
      return {
        ok: false,
        message: !!e.response ? e.response.data.message : 'Não foi possível registrar o formulário',
      };
    });
  },
  async teste() {
    return api
    .get('/')
    .then(r => {
      return {
        ok: true,
        message: r.data.message,
      }
    })
    .catch(e => {
      return {
        ok: false,
        message: !!e.response ? e.response.data.message : 'Não foi possível carregar a api',
      };
    });
  },

}

export default Auth;
