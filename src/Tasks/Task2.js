import React from "react";

const Admin = ({name, age, hobbies, animal}) => {

    let obj = {
        my: 'reading, watchingFilms, walkingWithDog'
    }

    function animal(dog) {
        return dog
    }

    return(
        <div>
            <p>Hi, my name is {name}</p>
            <p>I'm {age}</p>
            <p>I like {obj.my}</p>
            <p>I have {animal('dog Dark')}</p>
        </div>
    )

}

export default Admin