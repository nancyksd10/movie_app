class Github{
    constructor(){
        this.client_id='imdb8.p.rapidapi.com';
        this.client_secret='0cf53dd5b5mshebc2abdb4bde331p1961f6jsn04d6b5d092f5';
        
    }
    async getmovie(movie)
    {
        const movie_response= await fetch('https://imdb8.p.rapidapi.com/auto-complete/ ${movie}?client_id=${this.client_id}& client_secret=${this.client_secret}');
       const movie1= await movie_response.json();
        return{
            profile
        }
    }
}