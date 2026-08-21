document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    const resultsContainer = document.getElementById('search-results-box');
    
    if (!query) {
        resultsContainer.innerHTML = '<p class="search-empty">Please enter a search term in the top right.</p>';
        return;
    }
    
    resultsContainer.innerHTML = '<p class="search-loading">Searching archives for "'+query+'"...</p>';
    
    if (!window.Worker) {
        resultsContainer.innerHTML = '<p class="search-error">Your browser does not support Web Workers.</p>';
        return;
    }

    const worker = new Worker(window.SEARCH_WORKER_URL);
    
    worker.onmessage = function(e) {
        if (e.data.error) {
            resultsContainer.innerHTML = '<p class="search-error">Error accessing archives: ' + e.data.error + '</p>';
            return;
        }
        
        const results = e.data.results;
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p class="search-empty">No records found for "'+query+'".</p>';
            return;
        }
        
        let html = '<ul class="search-result-list">';
        results.forEach(item => {
            let snippet = "";
            if (item.content) {
                const lowerContent = item.content.toLowerCase();
                const index = lowerContent.indexOf(query.toLowerCase());
                if (index !== -1) {
                    const start = Math.max(0, index - 40);
                    const end = Math.min(item.content.length, index + query.length + 40);
                    snippet = (start > 0 ? "..." : "") + item.content.substring(start, end) + "...";
                    const regex = new RegExp(query, 'gi');
                    snippet = snippet.replace(regex, match => `<mark>${match}</mark>`);
                } else {
                    snippet = item.content.substring(0, 100) + "...";
                }
            }
            
            html += `
                <li class="search-result-item">
                    <h3><a href="${item.permalink}">${item.title}</a></h3>
                    <div class="search-meta">${item.date}</div>
                    <p class="search-snippet">${snippet}</p>
                </li>
            `;
        });
        html += '</ul>';
        resultsContainer.innerHTML = html;
        worker.terminate();
    };
    
    worker.postMessage({ query: query });
});
