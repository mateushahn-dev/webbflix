const apiKey = '7702f014e21953e95df1a530c8bc78c5'
const baseUrl = 'https://api.themoviedb.org/3'

const api = async (url) => {
    const req = await fetch(`${baseUrl}${url}&api_key=${apiKey}`)
    const res = await req.json()
    return res
}

export default {
    getMovies: async () => {
        return [
            {
                slug: 'originals',
                list: 'Originais da WebbFlix',
                items: await api(`/discover/tv?with_networks=213&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: 'trending',
                list: 'Recomendados para você',
                items: await api(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: 'action',
                list: 'Ação',
                items: await api(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: 'cience-ficton',
                list: 'Ficção Científica',
                items: await api(`/discover/movie?with_genres=878&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: 'horror',
                list: 'Terror',
                items: await api(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: 'comedy',
                list: 'Comédia',
                items: await api(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: 'drama', 
                list: 'Drama',
                items: await api(`/discover/movie?with_genres=18&language=pt-BR&api_key=${apiKey}`)
            },

            {
                slug: 'documentary',
                list: 'Documentários',
                items: await api(`/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`)
            }

        ]
    },

    getInfos: async (movieId, type) => {
        let info = {}
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await api(`/movie/${movieId}?language=pt-BR&api_key=${apiKey}`)              
                case 'tv':
                    info = await api(`/tv/${movieId}?language=pt-BR&api_key=${apiKey}`)
                default:
                    break;
            }
        }
        return info
    }
}
