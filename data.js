//YOUR CODE COMES HERE
let favMovies = [
    {
        title: "Mary Poppins",
        year: 1964,
        rating: 7.8,
        description: "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
        director: "Robert Stevenson",
        writer: "P.L. Travers",
        stars: "Julie Andrews, Dick Van Dyke",
        genre: "musical"



    },
    {
        title: "Scream",
        year: 1996,
        rating: 7.4,
        description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
        director: "Wes Craven",
        writer: "Kevin Williamson",
        stars: "Neve Campbell, Courteney Cox",
        genre: "horror"
    },
    {
        title: "Mr. Nobody",
        year: 2009,
        rating: 7.8,
        description: "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.",
        director: "Jaco Van Dormael",
        writer: "Jaco Van Dormael",
        stars: "Jared Leto, Sarah Polley",
        genre: "drama"
    },
    {
        title: "The Fast and the Furious: Tokyo Drift",
        year: 2006,
        rating: 6.0,
        description: "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.",
        director: "Justin Lin",
        writer: "Chris Morgan",
        stars: "Lucas Black, Sung Kang",
        genre: "action"
    }
];

let favoriteBooks = [
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        year: 2000,
        characters: ["Harry", "Ron", "Hermione", "Fred"],
        isNewerThan2000: true,
    },
    {
        title: "Utas es holdvilag",
        author: "Szerb Antal",
        year: 1937,
        characters: ["Mihaly", "Erzsi", "Eva", "Ervin"],
        isNewerThan2000: false,
    }
];

let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
        iLikeIt: true,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
        iLikeIt: true,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
        iLikeIt: true,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
        iLikeIt: true,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
        iLikeIt: true,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
        iLikeIt: true,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
        iLikeIt: false,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
        iLikeIt: true,
    },
    {
        artist: "Guns N' Roses",
        title: "Appetite for Destruction",
        year: 1987,
        genres: ["hard rock"],
        sale: 38000000,
        iLikeIt: true,

    }
];


function averageAge(list) {
    let age = 0;
    let averageAge = 0;
    for (let object of list) {
        age += 2022 - object.year

    }
    averageAge = age / list.length;
    return averageAge

}
//Ket megoldas
let result = averageAge(favMovies);
console.log(result);
console.log(averageAge(favoriteBooks));
console.log(averageAge(bestSellingAlbums));
let result2 = averageAge(favoriteBooks);
console.log(result2);
let result3 = averageAge(bestSellingAlbums);
console.log(result3);

function average(list, key) {
    let count = 0;
    let average = 0;
    for (let element of list) {
        count += element[key]

    }
    average = count / list.length;
    return average
}


console.log(average(favMovies, "rating"));
console.log(average(favoriteBooks, "year"));

function latestOrOldest(list, youngest) {
    let kacsa = list[0].year
    let cica = list[0].title
    for (let element of list) {
        if (youngest === true) {

            if (element.year > kacsa) {
                kacsa = element.year
                cica = element.title

            }
        } else {
            if(element.year < kacsa) {
                kacsa = element.year
                cica = element.title
            }
        }
    }

    return cica

}


console.log(latestOrOldest(favMovies, true));
console.log(latestOrOldest(favoriteBooks, false));
console.log(latestOrOldest(bestSellingAlbums, true));





















// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
    toExport = [
        { name: "favoriteBooks", content: favoriteBooks, type: "array" },
        { name: "favMovies", content: favMovies, type: "array" },
        { name: "bestSellingAlbums", content: bestSellingAlbums, type: "array" },
        { name: "averageAge", content: averageAge, type: "function" },
        { name: "average", content: average, type: "function" },
        { name: "latestOrOldest", content: latestOrOldest, type: "function" },

    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport };
