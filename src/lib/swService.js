
class SWService {
    SW__BASE__URL = 'https://swapi.dev/api/';
    PERSON_IMG_URL = 'https://starwars-visualguide.com/assets/img/characters/';
    PLANET_IMG_URL = 'https://starwars-visualguide.com/assets/img/planets/';
    STARSHIP_IMG_URL = 'https://starwars-visualguide.com/assets/img/starships/';

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

    #modifyPlanet = (planetData) => {
        const id = this.#getItemId(planetData.url);
        const imageUrl = this.#getImageUrl(this.PLANET_IMG_URL, id);

        return {
            id,
            imageUrl,
            name: planetData.name,
            info: [
                {id: 1, title: 'Name', value: planetData.name},
                {id: 2, title: 'Rotation period', value: planetData.rotation_period},
                {id: 3, title: 'Climate', value: planetData.climate},
                {id: 4, title: 'Terrain', value: planetData.terrain},
                {id: 5, title: 'Population', value: planetData.population},
            ]
        }
    };

    #modifyStarship = (starshipData) => {
        const id = this.#getItemId(starshipData.url);
        const imageUrl = this.#getImageUrl(this.STARSHIP_IMG_URL, id);

        return {
            id,
            imageUrl,
            name: starshipData.name,
            info: [
                {id: 1, title: 'Name', value: starshipData.name},
                {id: 2, title: 'Model', value: starshipData.model},
                {id: 3, title: 'Length', value: starshipData.length},
                {id: 4, title: 'Passengers', value: starshipData.passengers},
                {id: 5, title: 'HyperDrive rating', value: starshipData.hyperdrive_rating},
            ]
        }
    };

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
