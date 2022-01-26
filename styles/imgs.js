
export const getImage = (name) => {
    switch(name){
        case "Directions":
            return require('../assets/icons8RouteFilled.png');
        case "Call":
            return require('../assets/cellIconsPhoneCopy1.png')
        case "Website":
            return require('../assets/cellIconsWebsite.png')
    }
}