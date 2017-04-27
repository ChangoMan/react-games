import axios from 'axios';

const axiosIGDB = axios.create({
    baseURL: 'https://igdbcom-internet-game-database-v1.p.mashape.com/',
    headers: {'X-Mashape-Key': 'Fzcb3lSvwomshs3TQAodBXVqyOhyp159Z1qjsn8FH322stHTF4'}
});

let gameAPI = {
    searchGames : function (game) {
        return axiosIGDB.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/', {
            params: {
                fields: "name,summary,url,cover,slug",
                limit: 10,
                offset: 0,
                order: 'release_dates.date:desc',
                search: game
            }
        })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.warn('Error in searchGames', error);
        });
    },
    getPopularGames : function () {
        return axiosIGDB.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/', {
            params: {
                'fields': "*",
                'limit': 12,
                'offset': 0,
                'order': 'release_dates.date:desc:min',
                'filter[rating][gte]': 80
            }
        })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.warn('Error in getGames', error);
        });
    },
    getGamesById : function (gameId) {
        return axiosIGDB.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/'+gameId, {
            params: {
                fields: "*"
            }
        })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.warn('Error in getGamesById', error);
        });
    }
}

module.exports = gameAPI;