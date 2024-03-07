const addHttpsLink = (url) => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    return url
}

export default addHttpsLink;