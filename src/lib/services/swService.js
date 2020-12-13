const defaultPersonImg = require('../../images/person.png');
const defaultPlanetImg = require('../../images/planet.png');
const defaultStarshipImg = require('../../images/starship.png');

class SWService {
    #idTemplate = /\/([0-9]+)\//;
    SW_BASE_URL = 'https://swapi.dev/api';
    PERSON_IMG_URL = 'https://starwars-visualguide.com/assets/img/characters/';
    PLANET_IMG_URL = 'https://starwars-visualguide.com/assets/img/planets/';
    STARSHIP_IMG_URL = 'https://starwars-visualguide.com/assets/img/starships/';
    SW_CATEGORIES = {
        people: (data) => this.modifyPerson(data),
        planets: (data) => this.modifyPlanet(data),
        starships: (data) => this.modifyStarship(data),
    };


    #getItemId = (stringWithId) => {
        return stringWithId.match(this.#idTemplate)[1];
    };

    #getImageUrl = (baseUrl, id) => baseUrl + id + '.jpg';

    modifyPerson = (personData) => {
        const id = this.#getItemId(personData.url);
        const imageUrl = this.#getImageUrl(this.PERSON_IMG_URL, id);
        const defaultImageUrl = defaultPersonImg.default;

        return {
            id,
            imageUrl,
            defaultImageUrl,
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

    modifyPlanet = (planetData) => {
        const id = this.#getItemId(planetData.url);
        const imageUrl = this.#getImageUrl(this.PLANET_IMG_URL, id);
        const defaultImageUrl = defaultPlanetImg.default;

        return {
            id,
            imageUrl,
            defaultImageUrl,
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

    modifyStarship = (starshipData) => {
        const id = this.#getItemId(starshipData.url);
        const imageUrl = this.#getImageUrl(this.STARSHIP_IMG_URL, id);
        const defaultImageUrl = defaultStarshipImg.default;

        return {
            id,
            imageUrl,
            defaultImageUrl,
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

    getData = async (url, options) => {
        const res = await fetch(
            this.SW_BASE_URL + url, {
                signal: options.signal
            });

        return await res.json();
    };

    getItemData = async (url, category, ctrl) => {
        const data = await this.getData(url, ctrl);

        return this.SW_CATEGORIES[category](data);
    };

    getListData = async (url, category, ctrl) => {
        const data = await this.getData(url, ctrl);

        return data.results.map(this.SW_CATEGORIES[category])
    };

    modifyDataList = (category, data) => data.results.map(this.SW_CATEGORIES[category]);
}

export default SWService;
