document.getElementById('searchButton').addEventListener('click', function() {
    var query = document.getElementById('searchQuery').value;
    if (query) {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + query)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                var meanings = data[0].meanings.map(function(meaning) {
                    return '<li>' + meaning.definitions[0].definition + '</li>';
                }).join('');
                document.getElementById('searchResults').innerHTML = '<ol>' + meanings + '</ol>';
            })
            .catch(error => {
                document.getElementById('searchResults').innerHTML = '<p>Error fetching results: ' + error.message + '</p>';
            });
    }
});
