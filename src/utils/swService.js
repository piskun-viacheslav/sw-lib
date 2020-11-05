const SW__BASE__URL = 'https://swapi.dev/api/';

class SWService {
    #idTemplate = /\/([0-9]+)\//;

    #getItemId = (stringWithId) => {
        return stringWithId.match(this.#idTemplate)[1];
    };

    #modifyPerson = (personData) => ({
        id: this.#getItemId(personData.url),
        name: personData.name,
        gender: personData.gender,
        birthYear: personData.birth_year,
        height: personData.height,
        mass: personData.mass
    });

    #modifyPlanet = (planetData) => ({
        id: this.#getItemId(planetData.url),
        name: planetData.name,
        rotationPeriod: planetData.rotation_period,
        climate: planetData.climate,
        terrain: planetData.terrain,
        population: planetData.population
    });

    #modifyStarship = (starshipData) => ({
        id: this.#getItemId(starshipData.url),
        name: starshipData.name,
        model: starshipData.model,
        length: starshipData.length,
        passengers: starshipData.passengers,
        hyperdriveRating: starshipData.hyperdrive_rating,
    });

    getData = async (url) => {
        const res = await fetch(SW__BASE__URL + url);
        return await res.json();
    };

    getAllPeople = async () => {
        const data = await this.getData('people');
        return data.results.map(this.#modifyPerson);
    };

    getPerson = async (id) => {
        const data = await this.getData( 'people/' + id);
        return this.#modifyPerson(data);
    };

    getAllPlanets = async () => {
        const data = await this.getData('planets');
        return data.results.map(this.#modifyPlanet);
    };

    getPlanet = async (id) => {
        const data = await this.getData( 'planets/' + id);
        return this.#modifyPlanet(data);
    };

    getAllStarships = async () => {
        const data = await this.getData('starships');
        return data.results.map(this.#modifyStarship);
    };

    getStarship = async (id) => {
        const data = await this.getData( 'starships/' + id);
        return this.#modifyStarship(data);
    };
}

export default SWService;
