const SW__BASE__URL = 'https://swapi.dev/api/';

class SWService {
    getData = async (url) => {
        const res = await fetch(SW__BASE__URL + url);
        return await res.json();
    };

    getAllPeople = async () => {
        return await this.getData('people');
    };

    getPerson = async (id) => {
        return await this.getData( 'people/' + id);
    };

    getAllPlanets = async () => {
        return await this.getData('planets');
    };

    getPlanet = async (id) => {
        return await this.getData( 'planets/' + id);
    };

    getAllStarships = async () => {
        return await this.getData('starships');
    };

    getStarship = async (id) => {
        return await this.getData( 'starships/' + id);
    };
}

export default SWService;
