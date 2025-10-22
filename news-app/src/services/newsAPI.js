// Моки новостей
const mockNewsData = [
  {
    id: '1',
    title: 'Breakthrough in Quantum Computing Technology',
    description: 'Scientists have achieved a major milestone in quantum computing, potentially revolutionizing data processing capabilities.',
    content: 'In a groundbreaking development, researchers at the Quantum Institute have successfully demonstrated a 1000-qubit quantum processor that maintains coherence for unprecedented durations. This breakthrough could accelerate the development of practical quantum applications in cryptography, drug discovery, and artificial intelligence.',
    url: 'https://example.com/news/quantum-computing-breakthrough',
    urlToImage: 'https://picsum.photos/500/300?random=1',
    publishedAt: '2024-10-20T10:30:00Z',
    source: { name: 'Tech Today' },
    category: 'technology',
    author: 'Dr. Sarah Chen'
  },
  {
    id: '2',
    title: 'Global Climate Summit Reaches Historic Agreement',
    description: 'World leaders unite on ambitious climate targets for the next decade.',
    content: 'The Global Climate Summit concluded with 195 countries signing a comprehensive agreement to reduce carbon emissions by 50% by 2030. The accord includes innovative financing mechanisms for developing nations and establishes a global carbon credit system.',
    url: 'https://example.com/news/climate-summit-agreement',
    urlToImage: 'https://picsum.photos/500/300?random=2',
    publishedAt: '2024-10-19T14:45:00Z',
    source: { name: 'World News Network' },
    category: 'general',
    author: 'Michael Rodriguez'
  },
  {
    id: '3',
    title: 'Revolutionary Gene Therapy Shows Promise',
    description: 'New treatment successfully reverses genetic blindness in clinical trials.',
    content: 'A novel gene therapy developed by BioTech Labs has restored vision in 90% of patients with inherited blindness. The treatment uses CRISPR technology to correct defective genes directly in the retina, offering hope for millions worldwide.',
    url: 'https://example.com/news/gene-therapy-breakthrough',
    urlToImage: 'https://picsum.photos/500/300?random=3',
    publishedAt: '2024-10-18T09:15:00Z',
    source: { name: 'Medical Journal Today' },
    category: 'health',
    author: 'Dr. Emily Watson'
  },
  {
    id: '4',
    title: 'SpaceX Launches Revolutionary Mars Mission',
    description: 'Historic mission aims to establish the first permanent research base on Mars.',
    content: 'SpaceX has successfully launched the Ares-1 mission, carrying advanced equipment and supplies for establishing a permanent research outpost on Mars. The mission represents a crucial step toward human colonization of the Red Planet.',
    url: 'https://example.com/news/spacex-mars-mission',
    urlToImage: 'https://picsum.photos/500/300?random=4',
    publishedAt: '2024-10-17T16:20:00Z',
    source: { name: 'Space Daily' },
    category: 'science',
    author: 'James Thompson'
  },
  {
    id: '5',
    title: 'AI Startup Raises $500M in Record Funding',
    description: 'NeuralNext secures massive investment to develop next-generation AI systems.',
    content: 'Artificial intelligence startup NeuralNext has raised $500 million in Series C funding, valuing the company at $5 billion. The funding will accelerate development of their revolutionary AI model that promises human-level reasoning capabilities.',
    url: 'https://example.com/news/ai-startup-funding',
    urlToImage: 'https://picsum.photos/500/300?random=5',
    publishedAt: '2024-10-16T11:30:00Z',
    source: { name: 'Business Wire' },
    category: 'business',
    author: 'Lisa Park'
  },
  {
    id: '6',
    title: 'Olympic Games Set New Sustainability Record',
    description: 'Paris 2024 Olympics achieves carbon-neutral status through innovative green technologies.',
    content: 'The Paris 2024 Olympic Games have officially become the first carbon-neutral Olympics in history. Through renewable energy, sustainable materials, and carbon offset programs, organizers have set a new standard for mega-events.',
    url: 'https://example.com/news/olympics-sustainability',
    urlToImage: 'https://picsum.photos/500/300?random=6',
    publishedAt: '2024-10-15T13:45:00Z',
    source: { name: 'Sports Global' },
    category: 'sports',
    author: 'Carlos Mendez'
  },
  {
    id: '7',
    title: 'Hollywood Embraces AI in Film Production',
    description: 'Major studios adopt artificial intelligence for enhanced visual effects and storytelling.',
    content: 'Leading Hollywood studios are integrating AI technology into film production, from script analysis to advanced visual effects. The technology promises to reduce production costs while enhancing creative possibilities.',
    url: 'https://example.com/news/hollywood-ai-adoption',
    urlToImage: 'https://picsum.photos/500/300?random=7',
    publishedAt: '2024-10-14T08:20:00Z',
    source: { name: 'Entertainment Weekly' },
    category: 'entertainment',
    author: 'Rachel Green'
  },
  {
    id: '8',
    title: 'Renewable Energy Reaches New Milestone',
    description: 'Solar and wind power now account for 60% of global electricity generation.',
    content: 'According to the International Energy Agency, renewable sources have reached a historic milestone, providing 60% of global electricity. This achievement accelerates the transition toward sustainable energy independence.',
    url: 'https://example.com/news/renewable-energy-milestone',
    urlToImage: 'https://picsum.photos/500/300?random=8',
    publishedAt: '2024-10-13T15:10:00Z',
    source: { name: 'Energy Today' },
    category: 'science',
    author: 'David Kim'
  }
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const newsAPI = {
  async getNews({ query = '', category = '', page = 1, pageSize = 6 }) {
    await delay(1000); 

    let filteredNews = [...mockNewsData];

    if (category && category !== '') {
      filteredNews = filteredNews.filter(article => 
        article.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (query && query.trim() !== '') {
      const searchQuery = query.toLowerCase();
      filteredNews = filteredNews.filter(article =>
        article.title.toLowerCase().includes(searchQuery) ||
        article.description.toLowerCase().includes(searchQuery) ||
        article.content.toLowerCase().includes(searchQuery)
      );
    }

    const totalResults = filteredNews.length;
    const totalPages = Math.ceil(totalResults / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const articles = filteredNews.slice(startIndex, endIndex);

    return {
      articles,
      totalResults,
      totalPages,
      currentPage: page
    };
  },

  async getNewsById(id) {
    await delay(500);
    
    const article = mockNewsData.find(article => article.id === id);
    if (!article) {
      throw new Error('Article not found');
    }
    
    return article;
  },

  async getCategories() {
    await delay(300);
    
    const categories = [...new Set(mockNewsData.map(article => article.category))];
    return categories;
  }
};

export const realNewsAPI = {
  apiKey: 'YOUR_API_KEY_HERE',
  baseUrl: 'https://newsapi.org/v2',

  async getNews({ query = '', category = '', page = 1 }) {
    const params = new URLSearchParams({
      apiKey: this.apiKey,
      page: page.toString(),
      pageSize: '6'
    });

    if (query) params.append('q', query);
    if (category) params.append('category', category);

    const endpoint = query ? 'everything' : 'top-headlines';
    if (!query) params.append('country', 'us');

    const response = await fetch(`${this.baseUrl}/${endpoint}?${params}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    
    return {
      articles: data.articles.map((article, index) => ({
        ...article,
        id: `${Date.now()}-${index}` // Добавляем ID для роутинга
      })),
      totalResults: data.totalResults,
      totalPages: Math.ceil(data.totalResults / 6)
    };
  }
};