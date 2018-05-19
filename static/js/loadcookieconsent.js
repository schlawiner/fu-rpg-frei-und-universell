window.addEventListener('load', function() {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#216942',
        text: '#b2d192'
      },
      button: {
        background: '#e3ab1b'
      }
    },
    theme: 'classic',
    content: {
      message:
        'Diese Webseite verwendet Cookies für Kommentare. Wenn du die Webseite weiter nutzt, stimmst du der Verwendung von Cookies zu.',
      dismiss: 'OK',
      link: 'Mehr Informationen.',
      href: '/impressum/'
    }
  });
});
