import './Dashboard.css'
export default function Dashboard(){
    return(
        <>
        {/* <!-- Navbar --> */}
    <header className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-indigo-600">TravelExplorer</h1>
            <nav className="space-x-6">
                <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">Destinations</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">Packages</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </nav>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <a href="/api/logout">
                    Logout
                </a>

            </button>
        </div>
    </header>

    {/* <!-- Hero Section --> */}
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
        style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80');">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center max-w-xl">
            <h2 className="text-5xl font-bold mb-4">Discover The World 🌍</h2>
            <p className="mb-6 text-lg">Unforgettable experiences, beautiful destinations, and the best travel deals just
                for you.</p>
            <button className="px-6 py-3 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-700">
                Start Your Journey
            </button>
        </div>
    </section>

    {/* <!-- Popular Destinations --> */}
    <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Destinations</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526779259212-939e64784ebc?auto=format&fit=crop&w=800&q=80"
                    className="w-full h-56 object-cover"/>
                <div className="p-6">
                    <h3 className="font-bold text-lg">Paris, France</h3>
                    <p className="text-gray-600 text-sm">The city of love with rich history and culture.</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80"
                    className="w-full h-56 object-cover"/>
                <div className="p-6">
                    <h3 className="font-bold text-lg">Bali, Indonesia</h3>
                    <p className="text-gray-600 text-sm">Tropical paradise with beaches, temples & culture.</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80"
                    className="w-full h-56 object-cover"/>
                <div className="p-6">
                    <h3 className="font-bold text-lg">New York, USA</h3>
                    <p className="text-gray-600 text-sm">The city that never sleeps, full of excitement.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Special Offers --> */}
    <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-4">Special Offer ✈️</h2>
            <p className="mb-6">Book your dream vacation today and get <span className="font-semibold">20% OFF</span> on all
                travel packages.</p>
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200">
                Grab the Deal
            </button>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2025 TravelExplorer. All Rights Reserved.</p>
        </div>
    </footer>
        </>
    )
}