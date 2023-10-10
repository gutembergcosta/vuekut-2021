import http from "../http-common";

class DadosGeraisService {
	getAll() {

		try {
			let items =  [];

			http.get("/dados-gerais.php")
			.then(function (response) {
				items = response.data;
			})

		} catch (error) {
			console.error(error);
		}

		console.log(items);



		return items

	}

	get(id) {
		return http.get(`/tutorials/${id}`);
	}

	getByTitle(title) {
		return http.get(`/tutorials?title=${title}`);
	}

	insert(data) {
		return http.post("/tutorials", data);
	}

	update(id, data) {
		return http.put(`/tutorials/${id}`, data);
	}

	delete(id) {
		return http.delete(`/tutorials/${id}`);
	}

	deleteAll() {
		return http.delete(`/tutorials`);
	}

    async getAll() {

		let vm = this;

		axios.get(`${USER_API_URL}/dados-gerais.php`).then(response => {
		// returning the data here allows the caller to get it through another .then(...)
		//  let obj =response.data;

		//let arr = Object.keys(obj).map((k) => obj[k])
		vm = response.data


		return vm;

		}).catch(error => console.log(error));
//return axios.get(`${USER_API_URL}/dados-gerais.php`);
	}
}

export default new DadosGeraisService();