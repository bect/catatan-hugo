self.onmessage = async function(e) {
    const { query, indexUrl } = e.data;
    if (!query) {
        self.postMessage({ results: [] });
        return;
    }
    
    try {
        const response = await fetch(indexUrl || '/index.json');
        const data = await response.json();
        
        const lowerQuery = query.toLowerCase();
        const results = data.filter(item => {
            return (item.title && item.title.toLowerCase().includes(lowerQuery)) || 
                   (item.content && item.content.toLowerCase().includes(lowerQuery));
        });
        
        self.postMessage({ results });
    } catch (error) {
        self.postMessage({ error: error.message });
    }
};
