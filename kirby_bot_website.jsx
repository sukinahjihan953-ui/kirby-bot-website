import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, Shield, Zap, Cpu } from 'lucide-react'

export default function KirbyBotSite() {
  const stats = {
    servers: '18,432',
    users: '1,245,678',
    uptime: '99.97%',
    avgResponse: '85ms',
    shards: 24,
  }

  const reviews = [
    { name: 'Ava#1123', rating: 5, text: 'kirby transformed our mod team. fast, quiet, and insanely reliable. can\'t recommend enough.' },
    { name: 'DevTeam', rating: 5, text: 'deep feature set and extremely stable. integration was seamless and performance is top-tier.' },
    { name: 'GamerHub', rating: 4, text: 'great bot overall, super responsive and lightweight. solid choice for busy servers.' },
  ]

  const inviteLink = 'https://discord.com/oauth2/authorize?client_id=1422261126133186720&permissions=8&integration_type=0&scope=bot'
  const kirbyAvatar = 'https://cdn.discordapp.com/avatars/1422261126133186720/2e08fb3f68aa4f67cff21eb05e91b778.png?size=1024'

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-4">
          <img src={kirbyAvatar} alt="Kirby Bot Avatar" className="w-12 h-12 rounded-full shadow-lg" />
          <h1 className="text-3xl font-bold tracking-tight">Kirby</h1>
        </div>
        <nav className="space-x-6 text-lg">
          <a href="#features" className="hover:text-pink-400 transition">features</a>
          <a href="#about" className="hover:text-pink-400 transition">about</a>
          <a href="#stats" className="hover:text-pink-400 transition">stats</a>
          <a href="#reviews" className="hover:text-pink-400 transition">reviews</a>
          <a href={inviteLink} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">invite</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-24"
        >
          <img src={kirbyAvatar} alt="Kirby Bot" className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-pink-400 shadow-lg" />
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            the most powerful discord bot
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            kirby is built for performance, stability, and advanced features to take your discord server to the next level. crafted for active communities, kirby scales smoothly while keeping resource use low.
          </p>
          <a href={inviteLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-pink-500 hover:bg-pink-600 text-lg px-6 py-3 rounded-full">
              invite kirby
            </Button>
          </a>
        </motion.div>

        <section id="features" className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl">
          {[
            { icon: <Sparkles size={40} />, title: 'smart systems', text: 'kirby uses cutting-edge ai logic and auto-response capabilities for maximum efficiency.' },
            { icon: <Shield size={40} />, title: 'secure and reliable', text: 'built with modern security protocols and 99.9% uptime for uninterrupted experience.' },
            { icon: <Zap size={40} />, title: 'lightning fast', text: 'optimized core ensures blazing speed and instant responses across all commands.' },
            { icon: <Cpu size={40} />, title: 'custom engine', text: 'kirby runs on a custom coded backend designed for peak performance and scalability.' }
          ].map((feat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
              <Card className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg">
                <CardContent className="flex flex-col items-center text-center space-y-4">
                  <div className="text-pink-400">{feat.icon}</div>
                  <h3 className="text-xl font-semibold">{feat.title}</h3>
                  <p className="text-gray-300 text-sm">{feat.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        <section id="about" className="mt-20 max-w-4xl px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h3 className="text-4xl font-bold mb-4">about kirby</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              kirby was made for communities that value quality and power. with a sleek backend and optimized performance, kirby makes managing servers smoother, faster, and smarter. built by passionate developers, kirby is constantly evolving with the latest discord updates and integrations.
            </p>
            <p className="text-gray-400 mt-4">
              key highlights: modular architecture, low memory footprint, realtime logging and analytics, built-in moderation tools, and cross-server sync.
            </p>
          </motion.div>
        </section>

        <section id="stats" className="mt-16 w-full px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-6">server stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/6 p-6 rounded-2xl">
                <CardContent className="text-left">
                  <h4 className="text-2xl font-semibold">active servers</h4>
                  <p className="text-pink-400 text-xl mt-2">{stats.servers}</p>
                  <p className="text-gray-400 text-sm mt-1">guilds running kirby across the network</p>
                </CardContent>
              </Card>

              <Card className="bg-white/6 p-6 rounded-2xl">
                <CardContent className="text-left">
                  <h4 className="text-2xl font-semibold">total users served</h4>
                  <p className="text-pink-400 text-xl mt-2">{stats.users}</p>
                  <p className="text-gray-400 text-sm mt-1">unique users interacting with kirby</p>
                </CardContent>
              </Card>

              <Card className="bg-white/6 p-6 rounded-2xl">
                <CardContent className="text-left">
                  <h4 className="text-2xl font-semibold">uptime & performance</h4>
                  <p className="text-pink-400 text-xl mt-2">{stats.uptime}</p>
                  <p className="text-gray-400 text-sm mt-1">avg response: {stats.avgResponse} • shards: {stats.shards}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <section id="reviews" className="mt-12 w-full px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-6">what people are saying</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <Card key={i} className="bg-white/6 p-6 rounded-2xl">
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{r.name}</div>
                        <div className="text-sm text-gray-400">{Array.from({ length: r.rating }).map((_, x) => '★').join('')}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mt-4">"{r.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-gray-400 text-sm">average rating: 4.7 / 5 • 1,482 verified installs</div>
          </motion.div>
        </section>

        <footer className="mt-20 mb-12 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} kirby bot. all rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
