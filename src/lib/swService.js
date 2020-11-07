
class SWService {
    SW__BASE__URL = 'https://swapi.dev/api/';
    PERSON_IMG_URL = 'https://starwars-visualguide.com/assets/img/characters/';

    #idTemplate = /\/([0-9]+)\//;

    #getItemId = (stringWithId) => {
        return stringWithId.match(this.#idTemplate)[1];
    };

    #getImageUrl = (baseUrl, id) => baseUrl + id + '.jpg';

    #modifyPerson = (personData) => {
        const id = this.#getItemId(personData.url);
        const imageUrl = this.#getImageUrl(this.PERSON_IMG_URL, id);

        return {
            id,
            imageUrl,
            name: personData.name,
            info: [
                {id: 1, title: 'Name', value: personData.name},
                {id: 2, title: 'Gender', value: personData.gender},
                {id: 3, title: 'Year of birth', value: personData.birth_year},
                {id: 4, title: 'Height', value: personData.height},
                {id: 5, title: 'Mass', value: personData.mass},
            ],
        }
    };

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
        const res = await fetch(this.SW__BASE__URL + url);
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
