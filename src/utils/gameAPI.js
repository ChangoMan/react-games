import axios from 'axios';

const axiosIGDB = axios.create({
    baseURL: 'https://igdbcom-internet-game-database-v1.p.mashape.com/',
    headers: {'X-Mashape-Key': 'Fzcb3lSvwomshs3TQAodBXVqyOhyp159Z1qjsn8FH322stHTF4'}
});

var gameAPI = {
    getGames : function (game) {
        return axiosIGDB.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/', {
            params: {
                fields: "name,summary,url,cover",
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
            console.warn('Error in getGames', error);
        });
    }
}

module.exports = gameAPI;