const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            personajesInfo: {},
            favoritos: [],
            auth: false,
            view: "",
            hidden: "visually-hidden"
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

            signup: (userEmail, userPassword) => {
                fetch('https://3000-analiabrb-authenticatio-ff838dpsmso.ws-us85.gitpod.io/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "password": userPassword
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        if (response.status === 200) {
                            alert("El usuario fue creado con éxito")
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "El usuario ya existe") {
                            alert(data.msg)
                        }
                    })
                    .catch((err) => console.log(err))
            },

            login: (Email, Password) => {
                fetch('https://3000-analiabrb-authenticatio-ff838dpsmso.ws-us85.gitpod.io/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "email": Email,
                            "password": Password
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true,
                                view: "visually-hidden",
                                hidden: ""
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "Bad email or password") {
                            alert(data.msg)
                        }
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
            },

            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    auth: false,
                    view: "",
                    hidden: "visually-hidden"
                })
            },


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