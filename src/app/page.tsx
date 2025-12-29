import React from 'react';
import { ShoppingBag, Calendar, TestTube, Shield, Truck, Phone, ChevronRight, Star, Award } from 'lucide-react';

export default function Homepage() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Pain Relief',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      name: 'Vitamin D3 1000IU',
      category: 'Supplements',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: 'COVID-19 Test Kit',
      category: 'Test Kits',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: 'Ibuprofen 400mg',
      category: 'Pain Relief',
      price: 4.49,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
      rating: 4.6,
      reviews: 312
    }
  ];

  const services = [
    {
      icon: ShoppingBag,
      title: 'Online Pharmacy',
      description: 'Browse and order prescription & over-the-counter medicines',
      link: '/products',
      color: 'bg-blue-500'
    },
    {
      icon: TestTube,
      title: 'Test Kits',
      description: 'Home testing kits delivered to your door',
      link: '/test-kits',
      color: 'bg-green-500'
    },
    {
      icon: Calendar,
      title: 'Doctor Consultations',
      description: 'Book video appointments with registered GPs',
      link: '/appointments',
      color: 'bg-purple-500'
    }
  ];

  const trustBadges = [
    { icon: Shield, text: 'GPhC Registered' },
    { icon: Truck, text: 'Next Day Delivery' },
    { icon: Phone, text: '24/7 Support' },
    { icon: Award, text: 'NHS Approved' }
  ];

  const blogPosts = [
    {
      title: 'Managing Winter Flu: Prevention and Treatment',
      excerpt: 'Essential tips for staying healthy during flu season',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      date: '2024-12-15',
      readTime: '5 min read'
    },
    {
      title: 'Understanding Vitamin D Deficiency',
      excerpt: 'Why vitamin D matters and how to maintain healthy levels',
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400',
      date: '2024-12-10',
      readTime: '4 min read'
    },
    {
      title: 'When to Seek Medical Advice Online',
      excerpt: 'A guide to online consultations and when they\'re appropriate',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
      date: '2024-12-05',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">HealthPharm</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/products" className="text-gray-700 hover:text-blue-600 font-medium">Medicines</a>
              <a href="/test-kits" className="text-gray-700 hover:text-blue-600 font-medium">Test Kits</a>
              <a href="/appointments" className="text-gray-700 hover:text-blue-600 font-medium">Appointments</a>
              <a href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Health Blog</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600">
                <ShoppingBag className="w-6 h-6" />
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                GPhC Registered Pharmacy
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Health,
                <span className="text-blue-600"> Delivered</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Order prescription medicines, book GP consultations, and get home test kits - all from the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg flex items-center justify-center">
                  Shop Medicines
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 font-semibold text-lg">
                  Book Consultation
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <badge.icon className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-600 font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800" 
                alt="Healthcare professional"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5,000+</p>
                    <p className="text-sm text-gray-600">Consultations Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Everything you need for better health</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer group">
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href={service.link} className="text-blue-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular Products</h2>
              <p className="text-gray-600">Trusted by thousands of customers</p>
            </div>
            <a href="/products" className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all">
              View All
              <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer group overflow-hidden">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-blue-600 font-semibold mb-2">{product.category}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">£{product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Health & Wellness Blog</h2>
            <p className="text-xl text-gray-600">Expert advice and health tips</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-blue-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                    Read More
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Medical Advice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a video consultation with a registered GP today
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg inline-flex items-center">
            Book Appointment
            <Calendar className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">HealthPharm</span>
              </div>
              <p className="text-gray-400">Your trusted online pharmacy delivering health and wellness to your doorstep.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/products" className="hover:text-white">Medicines</a></li>
                <li><a href="/test-kits" className="hover:text-white">Test Kits</a></li>
                <li><a href="/appointments" className="hover:text-white">Appointments</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  0800 123 4567
                </li>
                <li>Mon-Fri: 9am-6pm</li>
                <li>Sat: 10am-4pm</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 HealthPharm. All rights reserved. GPhC Registration Number: 1234567</p>
          </div>
        </div>
      </footer>
    </div>
  );
}