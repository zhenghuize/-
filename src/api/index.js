import axios from 'axios';
<<<<<<< HEAD
axios.defaults.baseURL = 'http://127.0.0.1:1574';
=======
axios.defaults.baseURL = 'http://localhost:1574';
>>>>>>> c5848bbd7845c0411b441fdc286045d891b46d6d
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = function (data) {
	if (!data) return data;
	let result = ``;
	for (let attr in data) {
		if (!data.hasOwnProperty(attr)) break;
		result += `&${attr}=${data[attr]}`;
	}
	return result.substring(1);
};
axios.interceptors.response.use(function onFulfilled(response) {
	return response.data;
}, function onRejected(reason) {
	return Promise.reject(reason);
});
axios.defaults.validateStatus = function (status) {
	return /^(2|3)\d{2}$/.test(status);
}
export default axios;