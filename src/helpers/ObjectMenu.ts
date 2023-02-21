type MenuOptions = "" | "Bolsa" | "Tenis" | "Camisa" | "Oculos" | "Toalha";

export const createObjectmenu = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        Bolsa: false,
        Tenis: false,
        Camisa: false,
        Oculos: false,
        Toalha: false
    };

    if (activeMenu !== "") {
        returnObject[activeMenu] = true
    }

    return returnObject;
}