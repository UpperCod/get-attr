# get-attr

This small function allows to extract properties of objects and array


``` javascript

import get from 'get-attr';

let data = {
    user : {
        name : 'Matias Trujillo',
        skills : [
            'js',
            'php',
            'css',
            'html',
            'sql',
            'nosql',
        ]
    }
}

get(data,'user.skills[0]') // js
get(data,'user.skills[9]') // undefined
get(data,'user.skills[10]','scss') // scss

```