const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            personajesInfo: {},
            favoritos: []
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            // loadSomeData: () => {
            //     /**
            // 	fetch().then().then(data => setStore({ "foo": data.bar }))
            // */

            // fetch(" https://www.swapi.tech/api/people")
            //     .then((res) => res.json())
            //     .then((data) => setStore({
            //         personaje: data.result
            //     }))
            //     .catch((err) => console.log(err));
            obtenerInfoPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        personajes: data.results
                    }))
                    .catch((err) => console.log(err));
            },

            obtenerCadaPersonaje: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    .then((data) => setStore({
                        personajesInfo: data.result
                    }))
                    .catch((err) => console.log(err));
            },

            agregarFavoritos: (name) => {
                // console.log(name);
                const store = getStore();
                //Lo declaro para llamar a los objetos de Store
                setStore({
                    favoritos: [...store.favoritos, name]
                });
                console.log(store.favoritos);
                console.log(name);

            },

            eliminarFavorito: (id) => {
                const store = getStore();
                setStore({
                    favoritos: store.favoritos.filter((item) => item !== id)
                })

            }
        },



        // changeColor: (index, color) => {
        //     //get the store
        //     const store = getStore();

        //     //we have to loop the entire demo array to look for the respective index
        //     //and change its color
        //     const demo = store.demo.map((elm, i) => {
        //         if (i === index) elm.background = color;
        //         return elm;
        //     });   //reset the global store            

    };
};

export default getState;