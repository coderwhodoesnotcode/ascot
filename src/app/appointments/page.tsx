import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Star, ShoppingCart, Heart, X } from 'lucide-react';

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: 156 },
    { id: 'pain-relief', name: 'Pain Relief', count: 45 },
    { id: 'cold-flu', name: 'Cold & Flu', count: 32 },
    { id: 'vitamins', name: 'Vitamins & Supplements', count: 28 },
    { id: 'first-aid', name: 'First Aid', count: 21 },
    { id: 'skincare', name: 'Skincare', count: 18 },
    { id: 'digestive', name: 'Digestive Health', count: 12 }
  ];

  const products = [
    {
      id: 1,
      name: 'Paracetamol 500mg Tablets',
      category: 'pain-relief',
      price: 3.99,
      comparePrice: 5.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      rating: 4.8,
      reviews: 234,
      stock: 'In Stock',
      prescriptionRequired: false,
      description: '16 tablets for effective pain and fever relief'
    },
    {
      id: 2,
      name: 'Vitamin D3 1000IU',
      category: 'vitamins',
      price: 8.99,
      comparePrice: null,
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400',
      rating: 4.9,
      reviews: 156,
      stock: 'In Stock',
      prescriptionRequired: false,
      description: '90 capsules - supports bone and immune health'
    },
    {
      id: 3,
      name: 'Ibuprofen 400mg',
      category: 'pain-relief',
      price: 4.49,
      comparePrice: 6.49,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
      rating: 4.7,
      reviews: 312,
      stock: 'In Stock',
      prescriptionRequired: false,
      description: '24 tablets for pain and inflammation relief'
    },
    {
      id: 4,
      name: 'Night Nurse Liquid',
      category: 'cold-flu',
      price: 6.99,
      comparePrice: null,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      rating: 4.6,
      reviews: 189,
      stock: 'In Stock',
      prescriptionRequired: false,
      description: '160ml - complete night-time cold & flu relief'
    },
    {
      id: 5,
      name: 'Omeprazole 20mg',
      category: 'digestive',
      price: 12.99,
      comparePrice: null,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
      rating: 4.8,
      reviews: 98,
      stock: 'Low Stock',
      prescriptionRequired: true,
      description: '28 capsules for heartburn and acid reflux'
    },
    {
      id: 6,
      name: 'Multivitamin Complex',
      category: 'vitamins',
      price: 11.99,
      comparePrice: 14.99,
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400',
      rating: 4.7,
      reviews: 145,
      stock: 'In Stock',
      prescriptionRequired: false,
      description: '60 tablets - complete daily nutrition'
    },
    {
      id: 7,
      name: 'Strepsils Honey & Lemon',
      category: 'cold-flu',
      price: 4.29,
      comparePrice: null,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      rating: 4.5,
      reviews: 267,
      stock: 'In Stock',
      prescriptionRequired: false,
      description: '24 lozenges for sore throat relief'
    },
    {
      id: 8,
      name: 'Elastoplast Plasters',
      category: 'first-aid',
      price: 3.49,
      comparePrice: null,
      image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400',
      rating: 4.9,
      reviews: 423,
      stock: 'In Stock',
      prescriptionRequired: false,
      description: '40 assorted waterproof plasters'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Same as homepage */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">HealthPharm</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Products</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse Medicines</h1>
          <p className="text-gray-600">Prescription and over-the-counter medicines delivered to your door</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search medicines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sort By */}
            <div className="relative w-full md:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700 group-hover:text-blue-600 flex-1">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-400">{category.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-blue-600"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">£{priceRange[0]}</span>
                    <span className="text-gray-900 font-medium">£{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Additional Filters */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Availability</h4>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  <span className="ml-2 text-gray-700">In Stock Only</span>
                </label>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Prescription</h4>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">No Prescription Required</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">Prescription Required</span>
                  </label>
                </div>
              </div>

              <button className="w-full mt-6 text-blue-600 font-medium hover:text-blue-700">
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden">
                  {/* Wishlist Button */}
                  <button className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
                  </button>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                    {product.comparePrice && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        SAVE £{(product.comparePrice - product.price).toFixed(2)}
                      </span>
                    )}
                    {product.prescriptionRequired && (
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Rx
                      </span>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-700 ml-1 font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                      </div>
                      <span className={`ml-auto text-xs font-medium px-2 py-1 rounded ${
                        product.stock === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {product.stock}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-900">£{product.price}</span>
                          {product.comparePrice && (
                            <span className="text-sm text-gray-400 line-through">£{product.comparePrice}</span>
                          )}
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}