const apiKey = '39901627-719ccf8971235dd54bb900542';

export const serviceSearch = (query, page) => {
  const perPage = 12;
  const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => ({ hits: data.hits, totalHits: data.totalHits }))
    .catch(error => {
      throw new Error(`Fetch error: ${error.message}`);
    });
};

