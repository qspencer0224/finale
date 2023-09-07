export function edit(postData) {
    return sendRequest(BASE_URL, 'PUT', postData);
}

export function remove(postData){
    return sendRequest(BASE_URL, 'DELETE', postData);
}