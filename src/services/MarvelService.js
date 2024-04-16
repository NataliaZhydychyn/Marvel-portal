

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=31ca59d60bf5f3e6f17b1ce722e04d4f';
    getRecourse = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getRecourse(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getRecourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;