import React from 'react';
import { 
  Globe, 
  Target, 
  Clock, 
  DollarSign, 
  Users, 
  Mail, 
  ChevronDown,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Calendar,
  Award,
  GitBranch,
  Database,
  Settings,
  MessageCircle,
  Phone
} from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Pacific Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Globe className="h-8 w-8 text-blue-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Ingage DAO</span>
                <div className="text-xs text-gray-500 font-medium">Pacific Innovation</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('timeline')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Timeline</button>
              <button onClick={() => scrollToSection('payment')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Investment</button>
              <button onClick={() => scrollToSection('collaboration')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Partnership</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Waka Background */}
      <section className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
        {/* Waka Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-blue-800/80 z-10" />
          <img 
            src="/public/Herb-Kane_War-Canoes-of-the-New-Zealand-Maori.jpg" 
            alt="Traditional Māori Waka"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Waka Voyaging Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
              <Zap className="h-4 w-4" />
              <span>Waka Hourua • Voyaging to New Digital Horizons</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Ingage DAO
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">
                Pacific Innovation
              </span>
            </h1>

            {/* Waka Metaphor Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">Te Waka o te Taiao Hou • The Vessel to New Worlds</h2>
              <p className="text-xl leading-relaxed mb-6">
                Like our tīpuna who navigated vast Pacific waters in their waka hourua, we embark on a collective journey 
                into the blockchain frontier. <strong>Every paddler matters</strong> — each contribution propels us toward 
                new horizons of transparency, equity, and community prosperity.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="font-bold text-lg text-cyan-300">Unified Purpose</div>
                  <div className="text-sm opacity-90">Like paddlers in rhythm</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="font-bold text-lg text-blue-300">Shared Navigation</div>
                  <div className="text-sm opacity-90">Guided by collective wisdom</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="font-bold text-lg text-purple-300">New Territories</div>
                  <div className="text-sm opacity-90">Blockchain innovation awaits</div>
                </div>
              </div>
            </div>

            <p className="text-xl mb-8 leading-relaxed max-w-4xl">
              Built on the <strong>REM (Relationship Equity Management)</strong> framework, 
              our DAO honors <strong>manaakitanga</strong> and <strong>whakatōhea</strong> — 
              delivering transparent performance tracking and community collaboration for 
              Pacific Islands and Indigenous communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Join the Voyage</span>
                <ChevronDown className="h-5 w-5" />
              </button>
              <div className="text-sm text-white/80 flex items-center space-x-2 bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm">
                <Calendar className="h-4 w-4" />
                <span>Prepared: June 12, 2025 • Synergy Blockchain Pacific</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* Project Summary with Pacific Colors */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kaupapa • Our Purpose</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A phased, milestone-driven approach to build a replicable platform for managing 
              performance-based rewards, governance, and stakeholder collaboration.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <Shield className="h-14 w-14 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pono • Transparent Tracking</h3>
              <p className="text-gray-600 leading-relaxed">All contributions and results tracked on-chain with full transparency, honoring the principle of pono (righteousness)</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
              <Award className="h-14 w-14 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mātauranga • Knowledge Rewards</h3>
              <p className="text-gray-600 leading-relaxed">Verified knowledge sharing earns tokens and builds reputation, celebrating indigenous wisdom</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-14 w-14 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Whakatōhea • Collective Impact</h3>
              <p className="text-gray-600 leading-relaxed">Scalable platform for iwi and island development models, strengthening community bonds</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project with Māori Design Elements */}
      <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        {/* Subtle Māori Pattern */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,50 Q50,20 80,50 Q50,80 20,50 Z" fill="#1e40af"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="#1e40af" strokeWidth="2"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">He Aha Tēnei Kaupapa • Why This Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <Target className="h-10 w-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Performance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every contribution, milestone, and outcome is recorded on-chain, creating an 
                  immutable record of performance and ensuring all stakeholders have access to 
                  real-time project data with complete transparency.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <Users className="h-10 w-10 text-green-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Governance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Decentralized decision-making empowers community members to have a direct voice 
                  in project direction, resource allocation, and strategic decisions through 
                  culturally-appropriate token-based voting mechanisms.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <Globe className="h-10 w-10 text-purple-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pacific Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specifically designed for Pacific Islands and Indigenous communities, 
                  incorporating cultural values, traditional governance structures, and 
                  tikanga Māori into modern blockchain technology.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <GitBranch className="h-10 w-10 text-orange-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Framework</h3>
                <p className="text-gray-600 leading-relaxed">
                  The REM framework can be adapted and replicated across different communities, 
                  creating a network of interconnected DAOs that share knowledge, resources, 
                  and cultural wisdom across the Pacific.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Scope with Pacific Wave Design */}
      <section id="timeline" className="py-16 bg-white relative overflow-hidden">
        {/* Background Wave */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-5">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <path d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z" fill="#3b82f6"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Rautaki • Project Timeline</h2>
            <p className="text-lg text-gray-600">24-week development cycle with 4 distinct phases</p>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">1</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Discovery & Design</h3>
                <p className="text-gray-700 mb-4 text-lg"><strong>Weeks 1-4:</strong> Define objectives, test assumptions with QTM modeling, create system architecture</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Stakeholder Analysis</span>
                  <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Token Modeling</span>
                  <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Cultural Integration</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">2</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">System Architecture</h3>
                <p className="text-gray-700 mb-4 text-lg"><strong>Weeks 5-8:</strong> Design smart contracts, cadCAD simulation modeling, define governance rules</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Smart Contracts</span>
                  <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Simulation Testing</span>
                  <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Governance Design</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">3</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">MVP Build</h3>
                <p className="text-gray-700 mb-4 text-lg"><strong>Weeks 9-16:</strong> Web dashboard, testnet deployment, milestone-based payment simulation</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Dashboard UI</span>
                  <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Token Deployment</span>
                  <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Payment Testing</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">4</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Testing & DAO Onboarding</h3>
                <p className="text-gray-700 mb-4 text-lg"><strong>Weeks 17-24:</strong> Beta testing with partners, governance voting, Knowledge NFT module</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Beta Testing</span>
                  <span className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Community Onboarding</span>
                  <span className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">NFT Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plan with Enhanced Design */}
      <section id="payment" className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Utu • Investment & Payment</h2>
            <p className="text-lg text-gray-600">Flexible payment options designed to accommodate different funding scenarios</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <DollarSign className="h-10 w-10 text-green-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Standard Payment Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Weeks 1-6 (Setup & Planning)</span>
                  <span className="font-bold text-gray-900 text-lg">$1,000 NZD/week</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Weeks 7-24 (Full Development)</span>
                  <span className="font-bold text-gray-900 text-lg">$2,000 NZD/week</span>
                </div>
                <div className="flex justify-between items-center py-4 pt-6 border-t-2 border-green-200 bg-green-50 rounded-lg px-4">
                  <span className="text-xl font-bold text-gray-900">Total Investment</span>
                  <span className="text-3xl font-bold text-green-600">$42,000 NZD</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 bg-gray-50 p-4 rounded-lg">Includes AI tools, blockchain infrastructure, hosting, testing costs, and cultural consultation</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <Settings className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Deferred Payment Options</h3>
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2 text-lg">Option A: Delivery Payment</h4>
                  <p className="text-blue-800">Pay remainder at MVP delivery milestone</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2 text-lg">Option B: Equity Conversion</h4>
                  <p className="text-purple-800">Convert to shared IP or DAO equity partnership</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-900 mb-2 text-lg">Option C: Funding Match</h4>
                  <p className="text-green-800">Match via iwi or NZ funding agency (Te Puni Kōkiri)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <Database className="h-10 w-10 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technology Stack & Infrastructure</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 p-4 rounded-xl mb-4">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Blockchain</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="font-medium">Ethereum L2</div>
                    <div>Optimism/Base</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 p-4 rounded-xl mb-4">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Governance</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="font-medium">Gnosis Safe</div>
                    <div>Snapshot Voting</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-purple-50 p-4 rounded-xl mb-4">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Simulation</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="font-medium">cadCAD</div>
                    <div>QTM Modeling</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-orange-50 p-4 rounded-xl mb-4">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Security</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="font-medium">Slither/MythX</div>
                    <div>Code4rena Audit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Collaboration with Pacific Design */}
      <section id="collaboration" className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Whakatōhea • Co-Creation Partnership</h2>
            <p className="text-lg text-gray-600">Building together with Pacific communities and technical partners</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Developer Partnership</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Māori or Pacific developers join from Week 6+ with ownership potential and cultural guidance</p>
              <div className="inline-flex items-center text-blue-600 font-medium bg-blue-100 px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 mr-2" />
                Equity Opportunities
              </div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
              <Globe className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Partners</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Involve iwi directly in governance, testing, and reward systems with cultural protocols</p>
              <div className="inline-flex items-center text-green-600 font-medium bg-green-100 px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 mr-2" />
                Direct Governance Role
              </div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact Funders</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Support an open-source, scalable impact platform for Pacific innovation</p>
              <div className="inline-flex items-center text-purple-600 font-medium bg-purple-100 px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 mr-2" />
                Open Source Model
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white p-10 rounded-2xl text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-6">Impact by Month 6</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <CheckCircle className="h-10 w-10 mx-auto mb-4" />
                <div className="font-bold text-lg">On-Chain Contracts</div>
                <div className="text-sm opacity-90 mt-2">Milestone-based payouts with transparency</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <CheckCircle className="h-10 w-10 mx-auto mb-4" />
                <div className="font-bold text-lg">Stakeholder Voting</div>
                <div className="text-sm opacity-90 mt-2">Knowledge NFT pilot program</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <CheckCircle className="h-10 w-10 mx-auto mb-4" />
                <div className="font-bold text-lg">MVP Testing</div>
                <div className="text-sm opacity-90 mt-2">With local iwi partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Your Details */}
      <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Kōrero Mai • Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to build a transparent, equitable Pacific innovation system — one milestone at a time.
          </p>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Immediate Next Steps</h3>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">Confirm weekly payment structure or choose deferred option</span>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">Approve project phases and team invitation process</span>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">Launch system mapping and cultural integration in Week 1</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <Mail className="h-10 w-10 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Contact</h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <div><strong>Prepared by:</strong> Synergy Blockchain Pacific</div>
                <div><strong>Date:</strong> June 12, 2025</div>
                <div><strong>For:</strong> Stakeholders and Community Partners</div>
              </div>
              <a 
                href="mailto:synergyblockchaintf@gmail.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                <span>synergyblockchaintf@gmail.com</span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp Contact</h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <div><strong>Direct messaging for:</strong></div>
                <div>• Quick questions and clarifications</div>
                <div>• Project timeline discussions</div>
                <div>• Partnership opportunities</div>
              </div>
              <a 
                href="https://wa.me/6857544930"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                <span>+685 754 4930</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Pacific Elements */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 relative overflow-hidden">
        {/* Pacific Wave Pattern in Footer */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 200">
            <path d="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="relative">
              <Globe className="h-8 w-8 text-blue-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-bold">Ingage DAO</span>
              <div className="text-sm text-gray-300">Pacific Innovation Platform</div>
            </div>
          </div>
          <p className="text-gray-300 text-lg mb-4">
            Building decentralized innovation systems for Pacific communities
          </p>
          <p className="text-gray-400 text-sm">
            Honoring traditional values • Embracing technological innovation • Creating sustainable futures
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;