import {
    AutoAwesome,
    StarPurple500,
    Bloodtype,
    MenuBook,
    FamilyRestroom,
    VolunteerActivism,
    MoodBad,
    Pool,
    LiveTv,
    LocalMovies,
    Reorder,
    Fort
} from '@mui/icons-material';

export const iconComponent = {
    AutoAwesome,
    StarPurple500,
    Bloodtype,
    MenuBook,
    FamilyRestroom,
    VolunteerActivism,
    MoodBad,
    Pool,
    LiveTv,
    LocalMovies,
    Reorder,
    Fort
}

export const TOP_LISTS = [
    {
        title: "Топ популярных фильмов",
        icon: "AutoAwesome",
        value: "TOP_POPULAR_MOVIES",
        url: "/popular"
    },
    {
        title: "Топ 250 лучших фильмов",
        icon: "StarPurple500",
        value: "TOP_250_MOVIES",
        url: "/best"
    },
    {
        title: "Вампиры",
        icon: "Bloodtype",
        value: "VAMPIRE_THEME",
        url: "/vampires"
    },
    {
        title: "Комиксы",
        icon: "MenuBook",
        value: "COMICS_THEME",
        url: "/comics"
    },
    {
        title: "Семейные",
        icon: "FamilyRestroom",
        value: "FAMILY",
        url: "/family"
    },
    {
        title: "Романтика",
        icon: "VolunteerActivism",
        value: "LOVE_THEME",
        url: "/romantic"
    },
    {
        title: "Зомби",
        icon: "MoodBad",
        value: "ZOMBIE_THEME",
        url: "/zombie"
    },
    {
        title: "Катастрофы",
        icon: "Pool",
        value: "CATASTROPHE_THEME",
        url: "/catastrophe"
    },
    {
        title: "Сериалы",
        icon: "LiveTv",
        value: "POPULAR_SERIES",
        url: "/serial"
    }
]

export const MOVIE_LISTS = [
    {
        title: "Фильмы",
        icon: "LocalMovies",
        url: "/films"
    },
    {
        title: "Сериалы",
        icon: "Reorder",
        url: "/serials"
    },
    {
        title: "Мультфильмы",
        icon: "Fort",
        url: "/cartoons"
    }
]
