function urlsToPrefetchLinks (urls) {
  return urls
    .map(function (url) {
      if (document.querySelector('link[rel="prefetch"][href="' + url + '"]')) {
        // tag already exists
        return null;
      }
      var link = document.createElement('link');
      link.setAttribute('rel', 'prefetch');
      link.setAttribute('href', url);
      return link;
    })
    .reduce(function (fragment, item) {
      item && fragment.appendChild(item);
      return fragment;
    }, document.createDocumentFragment());
}

module.exports = function (urls) {
  urls = Array.isArray(urls) ? urls : [urls];
  document.head.appendChild(urlsToPrefetchLinks(urls));
};