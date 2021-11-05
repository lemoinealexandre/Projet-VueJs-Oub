import ObjIsNull from "../ObjIsNull";

const url = 'http://localhost:8080/api';

export async function get(path, params) {
    const link = `${url}/${path}`;
    let strParams = '';
    if (!ObjIsNull(params) && !paramsEmpty(params)) {
        const paramsEntries = Object.entries(params);
        strParams = strParams.concat('?').concat(
            (paramsEntries.map(([key, value]) => {
            return `${key}=${value}`;
            }).join('&'))
        );
    }
    return (await fetch(link + strParams)).json();
}

export async function post(path, params) {
    let formParams;
    if (params instanceof FormData) {
        formParams = params;
    }
    else {
        formParams = new FormData();
        Object.entries(params).forEach(([key, value]) => formParams.append(key, value))
        console.log(formParams)
    }
    return (await fetch(`${url}/${path}`, {
        method: 'POST',
        body: formParams,
    })).json();
}

function paramsEmpty(obj) {
    return Object.values(obj).length <= 0;
}
