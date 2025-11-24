Kamu adalah AI UI/UX Designer dan Frontend Developer profesional.

🎯 Tujuan:
Buat landing page bergaya Web3 bertema **penjualan token crypto di jaringan Ethereum**, dengan animasi penuh yang halus dan futuristik — tanpa kehilangan elegansi minimalis.

🎨 Tema warna utama: "Light Steel" — gradasi abu-abu kebiruan elegan seperti baja:
#F8FAFC → #E4E7EB → #CBD5E1 → #9CA3AF → #6B7280 → #4B5563 → #374151 → #1F2937 → #111827  
Accent biru lembut: #3B82F6  

💡 Tone & vibe:
- Futuristik, elegan, dan bersih
- Permukaan baja halus dengan cahaya neon biru
- Transisi lembut, depth subtle, interaktif namun tenang
- Elemen UI hidup: fade, slide, parallax, glowing border, motion blur

💻 Stack:
- Next.js 15 (App Router)
- Tailwind CSS + Shadcn UI
- Framer Motion (untuk semua animasi)
- Lucide-react icons
- Font: Inter atau Satoshi

⚙️ Fokus fungsionalitas:
- Token sale ERC-20 di jaringan Ethereum
- Detail tokenomics dan smart contract
- “How to Buy” dengan integrasi wallet (MetaMask)
- Roadmap, CTA, dan efek animasi yang membangkitkan kepercayaan

🧩 Struktur halaman:

1. **Hero Section**
   - Headline: “Own the Future of Digital Assets”
   - Subtext: “Join our Ethereum-powered token sale and shape decentralized finance.”
   - CTA: “Buy Token” + “Whitepaper”
   - Background: gradient steel-gray (#1F2937 → #3B82F6) + subtle particle animation (Framer Motion + blur)
   - Animation:
     - Text fade-in-up (`initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`)
     - Background parallax (slow)
     - Floating 3D token orb (rotating glow)

2. **About Token**
   - Glassmorphism card (`/10 backdrop-blur-xl border border-white/10`)
   - Hover: slight scale-up (`whileHover={{ scale: 1.03 }}`)
   - Appear with staggered fade-in sequence
   - Framer Motion `transition={{ duration: 0.6, delayChildren: 0.2, staggerChildren: 0.1 }}`

3. **Tokenomics**
   - Grid 4 kolom (Public Sale, Team, Liquidity, Reserve)
   - Animated progress bars (`motion.div` expand width dynamically)
   - On-scroll fade-in from left/right
   - Tooltip animate on hover (opacity spring transition)
   - Optional pie-chart glowing hover ring

4. **How to Buy**
   - 3 langkah interaktif dengan animasi:
      1️⃣ Connect Wallet → tombol glow pulsing (`animate={{ boxShadow: '0 0 20px #3B82F6' }}`)
      2️⃣ Input ETH → input animasi focus glow
      3️⃣ Klik “Buy Token” → tombol ripple effect
   - Animate section dengan vertical reveal (`initial={{ opacity: 0, y: 60 }}` → `animate={{ opacity: 1, y: 0 }}`)
   - Add “wallet connect” modal dengan backdrop blur transition

5. **Roadmap**
   - Horizontal timeline dengan framer `whileInView` animations
   - Setiap milestone muncul sequentially (rocket, code, users, globe icons)
   - Timeline line animasi grow left-to-right
   - Subtle glowing dots di setiap fase

6. **Footer**
   - Fade-in dari bawah dengan delay
   - Background solid #111827
   - Hover efek `text-accent` transition
   - Tambahkan animasi floating ethereum icon subtle (`animate={{ rotate: 360 }}` loop)

🪩 Efek tambahan:
- Scroll parallax antar section (`useScroll`, `useTransform`)
- Hover 3D tilt pada card (`whileHover={{ rotateX: 4, rotateY: -4 }}`)
- Gradient glow border: `border-[1px] border-transparent bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-border`
- Button hover shimmer: `before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] transition-all`

⚙️ Global animation setup:
- Gunakan Framer Motion dengan variant per section: `fadeIn`, `slideUp`, `zoomIn`, `staggerChildren`
- Tambahkan `AnimatePresence` untuk transisi antar page
- Aktifkan smooth scroll dan inertial scroll easing (`scroll-behavior: smooth`)

✨ Tujuan akhir:
Hasilkan desain/struktur UI interaktif bergaya *industrial minimal futuristic*,
dengan animasi penuh (hero parallax, motion cards, scroll-based reveal, glow transitions)
namun tetap ringan dan responsif di mobile.
Output akhir bisa berupa:
- Kode Next.js + Tailwind siap run
- Atau file Figma/wireframe dengan animasi terdeskripsi
