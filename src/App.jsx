import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion'
import {
  ArrowUpRight,
  ChevronRight,
  Linkedin,
  Mail,
  Menu,
  Music2,
  PenLine,
  Phone,
  Scissors,
  Shirt,
  Sparkles,
  X
} from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
]

const profileLinks = {
  linkedin: 'https://www.linkedin.com/in/sandhya-kumari-a25672223/',
  email: 'rajsandhya091@gmail.com',
  phone: '+917488680819'
}

const galleryImages = [
  {
    src: '/images/sandhya-temple-seated.jpeg',
    title: 'Heritage Drapes',
    tag: 'Editorial styling',
    tall: true
  },
  {
    src: '/images/sandhya-night-seated.jpeg',
    title: 'Textile Story',
    tag: 'Mood direction'
  },
  {
    src: '/images/sandhya-white-editorial.jpeg',
    title: 'Modern Craft',
    tag: 'Look composition',
    tall: true
  },
  {
    src: '/images/sandhya-campus-fashion.jpeg',
    title: 'Campus Review',
    tag: 'NIFT moments'
  },
  {
    src: '/images/sandhya-green-festive.jpeg',
    title: 'Festive Palette',
    tag: 'Color and texture',
    tall: true
  },
  {
    src: '/images/sandhya-night-saree.jpeg',
    title: 'Evening Silhouette',
    tag: 'Visual styling'
  },
  {
    src: '/images/sandhya-industry-event.jpeg',
    title: 'Industry Exposure',
    tag: 'Networking'
  },
  {
    src: '/images/sandhya-beach-editorial.jpeg',
    title: 'Minimal Black',
    tag: 'Editorial pose',
    tall: true
  }
]

const skillGroups = [
  {
    icon: Shirt,
    title: 'Merchandising',
    skills: ['Buyer communication', 'Order management', 'PO coordination', 'Merchandising documents']
  },
  {
    icon: Scissors,
    title: 'Sampling',
    skills: ['Sample development', 'Approval tracking', 'Fabric/trims follow-up', 'Tech pack review']
  },
  {
    icon: PenLine,
    title: 'Production',
    skills: ['TNA follow-up', 'WIP updates', 'Dispatch coordination', 'Quality communication']
  },
  {
    icon: Sparkles,
    title: 'Tools & Research',
    skills: ['MS Excel', 'SAP', 'Adobe Illustrator', 'Lectra / AutoCAD']
  }
]

const featuredExperience = {
  company: 'Laxmipati',
  location: 'Surat',
  role: 'Sampling & Merchandising Executive',
  period: 'Jan 2026 - Present',
  image: '/images/sandhya-industry-event.jpeg',
  summary:
    'In my current role, I support export-ready sampling and merchandising workflows: buyer requirements, style updates, approvals, fabric and trims follow-up, order tracking, reporting, and delivery coordination.',
  strengths: [
    'I coordinate with buyers and internal teams',
    'I track sampling timelines and approvals',
    'I support TNA calendars and resolve sampling issues',
    'I communicate with production, quality, and dispatch teams'
  ]
}

const timeline = [
  {
    period: 'Jan - Apr 2025',
    company: 'Modelama Exports',
    location: 'Gurugram',
    role: 'Merchandising Intern',
    body:
      'I worked across merchandising documentation, tech pack review, sampling coordination, production updates, and purchase order support.',
    points: ['I reviewed garment construction feasibility', 'I supported TNA and PO coordination', 'I applied SMED thinking to style changeover']
  },
  {
    period: 'Jun - Jul 2024',
    company: 'Silver Spark Apparel Ltd.',
    location: 'Bangalore',
    role: 'Apparel Production Intern',
    body:
      'I studied complete jacket manufacturing operations from fabric inspection and cutting to sewing, finishing, quality control, packaging, and warehouse movement.',
    points: ['I observed industrial machinery and workflow optimization', 'I worked with RFID-based inventory tracking', 'I mapped production accuracy and QC practices']
  },
  {
    period: 'Jun 2023',
    company: 'Shahi Export House',
    location: 'Ghaziabad',
    role: 'Textile Intern',
    body:
      'I gained hands-on exposure to textile manufacturing flow, including weaving, dyeing, printing, finishing, quality evaluation, and industrial process standards.',
    points: ['I understood textile process flow', 'I assisted in fabric quality evaluation', 'I learned QA standards in export manufacturing']
  }
]

const personalityCards = [
  {
    icon: Music2,
    image: '/images/sandhya-dance-wings.jpeg',
    title: 'Movement',
    body:
      'Dance gives me rhythm, posture, confidence, and a sharper eye for how fabric moves with the body.'
  },
  {
    icon: Sparkles,
    image: '/images/sandhya-swing-night.jpeg',
    title: 'Music',
    body:
      'Music helps me think in tempo, color, pauses, drama, and the quiet precision behind a look.'
  },
  {
    icon: PenLine,
    image: '/images/sandhya-portrait-illustration.jpeg',
    title: 'Creative Arts',
    body:
      'Sketching, styling, visual storytelling, and trend watching keep my work expressive without losing commercial clarity.'
  }
]

const highlights = [
  'Bachelor of Fashion Technology, NIFT Patna, 2021 - 2025',
  'RFID-based production tracking project for inventory accuracy and production monitoring',
  'Managing Director, Aryan Dance Studio & Patna Dress House',
  'Bronze medallist in Dance Competition, NIFT Patna, 2023',
  'Published Asian Times articles on fashion trends and dance wellness, 2024',
  'Diploma in ICITE with Grade A, 2018'
]

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionKicker({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-normal text-oxblood">
      <span className="h-px w-10 bg-oxblood/40" />
      {children}
    </div>
  )
}

function CTAButton({ href, children, variant = 'dark' }) {
  return (
    <a
      href={href}
      onMouseEnter={() => window.dispatchEvent(new Event('cursor-active'))}
      onMouseLeave={() => window.dispatchEvent(new Event('cursor-idle'))}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold uppercase tracking-normal transition duration-300 ${
        variant === 'dark'
          ? 'bg-ink text-porcelain shadow-editorial hover:bg-oxblood'
          : 'border border-ink/25 bg-white/30 text-ink backdrop-blur hover:border-oxblood hover:text-oxblood'
      }`}
    >
      {children}
      <ArrowUpRight size={17} className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink text-porcelain"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-6 h-28 w-px origin-top bg-porcelain/70"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
        <motion.p
          className="font-display text-4xl tracking-normal sm:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          Sandhya
        </motion.p>
        <motion.p
          className="mt-3 text-xs font-bold uppercase tracking-normal text-porcelain/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          Fashion Portfolio
        </motion.p>
      </div>
    </motion.div>
  )
}

function Cursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const smoothX = useSpring(mouseX, { stiffness: 350, damping: 32 })
  const smoothY = useSpring(mouseY, { stiffness: 350, damping: 32 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }
    const on = () => setActive(true)
    const off = () => setActive(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('cursor-active', on)
    window.addEventListener('cursor-idle', off)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('cursor-active', on)
      window.removeEventListener('cursor-idle', off)
    }
  }, [mouseX, mouseY])

  return <motion.div className={`cursor-orbit ${active ? 'is-active' : ''}`} style={{ left: smoothX, top: smoothY }} />
}

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between border border-white/35 bg-porcelain/70 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-5">
          <a href="#home" className="font-display text-2xl font-semibold tracking-normal text-ink">
            Sandhya
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-normal text-mocha/75 transition hover:text-oxblood"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-normal text-porcelain transition hover:bg-oxblood lg:inline-flex"
          >
            Connect
          </a>
          <button
            type="button"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-ink text-porcelain lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-3xl">Sandhya</span>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20"
              >
                <X size={20} />
              </button>
            </div>
            <div className="px-6 pt-12">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-white/12 py-5 font-display text-4xl"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * index }}
                >
                  {item.label}
                  <ChevronRight size={22} className="text-brass" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 120])
  const opacity = useTransform(scrollY, [0, 650], [1, 0.72])

  return (
    <section id="home" className="relative min-h-[92svh] overflow-hidden bg-ink text-porcelain">
      <motion.img
        src="/images/sandhya-arch-editorial.jpeg"
        alt="Sandhya in an editorial fashion portrait"
        className="absolute inset-0 h-[110%] w-full object-cover object-[50%_28%]"
        style={{ y, opacity }}
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/20 to-ink/78" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,18,15,0.76),rgba(21,18,15,0.16)_48%,rgba(21,18,15,0.55))]" />
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-normal text-pearl/80">
            NIFT Graduate / Fashion Professional
          </p>
          <h1 className="magazine-title font-display text-7xl font-semibold leading-[0.78] tracking-normal sm:text-8xl md:text-[8.5rem] lg:text-[10rem] xl:text-[12rem]">
            Sandhya
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(280px,0.36fr)] lg:items-end">
            <div>
              <h2 className="max-w-3xl font-accent text-4xl font-medium leading-[0.96] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem]">
                Fashion Merchandising & Production Professional
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton href="#gallery">View Work</CTAButton>
                <CTAButton href="#contact" variant="light">
                  Contact
                </CTAButton>
              </div>
            </div>
            <div className="max-w-sm border-l border-pearl/40 pl-5 text-sm leading-7 text-pearl/78">
              I bring merchandising logic, production discipline, and a polished creative eye for apparel brands,
              buyers, recruiters, and fashion-led teams.
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-12 bg-gradient-to-t from-porcelain to-transparent" />
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative bg-porcelain px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="relative">
          <div className="absolute -left-6 -top-6 hidden h-32 w-32 border border-brass/45 lg:block" />
          <img
            src="/images/sandhya-temple-seated.jpeg"
            alt="Sandhya styled in a heritage-inspired editorial portrait"
            className="relative h-[520px] w-full object-cover object-[50%_22%] shadow-editorial"
            loading="lazy"
          />
          <div className="absolute -bottom-7 right-4 max-w-[220px] bg-ink px-6 py-5 text-porcelain shadow-editorial sm:right-10">
            <p className="font-accent text-3xl leading-none">NIFT</p>
            <p className="mt-2 text-[0.66rem] font-bold uppercase tracking-normal text-pearl/70">
              B.F.Tech / Merchandising / Production
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionKicker>About</SectionKicker>
          <h2 className="magazine-title max-w-4xl font-display text-5xl font-semibold leading-[0.9] text-ink sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
            A creative mind with a production-ready sense of order.
          </h2>
          <div className="mt-8 grid gap-6 text-base leading-8 text-mocha sm:grid-cols-2">
            <p>
              I am a Fashion Technology graduate from NIFT Patna with hands-on experience in merchandising,
              sampling coordination, apparel production, buyer communication, and textile process exposure. I like
              working at the point where creativity meets execution: understanding the mood of a collection and
              helping it move through approvals, timelines, and delivery.
            </p>
            <p>
              I am naturally drawn to fashion trends, styling, dance, music, creative arts, and visual storytelling.
              At the same time, I enjoy the practical side of the industry: Excel, reporting, follow-ups, TNA, and
              coordination that keep apparel work clear and useful for teams.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="bg-linen px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionKicker>Capabilities</SectionKicker>
            <h2 className="max-w-4xl font-display text-5xl font-semibold leading-[0.9] text-ink sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.4rem]">
              Skills built for fashion teams that move fast.
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-mocha">
            I bring a balance of communication, spreadsheet discipline, brand sensitivity, and hands-on apparel
            workflow exposure.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <Reveal key={group.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -9 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                  className="group h-full border border-ink/10 bg-white/46 p-6 shadow-soft backdrop-blur"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-porcelain transition group-hover:bg-oxblood">
                      <Icon size={20} />
                    </span>
                    <span className="font-accent text-4xl text-brass/70">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-ink">{group.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm font-medium text-mocha">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-oxblood" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="bg-ink px-5 py-24 text-porcelain sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionKicker>Experience</SectionKicker>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.7rem]">
              Industry experience with export-floor fluency.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-pearl/72">
              My work experience connects buyer communication, sampling discipline, production exposure, textile
              process knowledge, and documentation habits that apparel recruiters can trust.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16" delay={0.08}>
          <article className="grid overflow-hidden border border-white/12 bg-white/[0.055] shadow-editorial backdrop-blur lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[430px]">
              <img
                src={featuredExperience.image}
                alt={`${featuredExperience.role} at ${featuredExperience.company}`}
                className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-bold uppercase tracking-normal text-brass">{featuredExperience.period}</p>
                <h3 className="mt-2 font-display text-4xl font-semibold">{featuredExperience.company}</h3>
                <p className="mt-1 text-sm text-pearl/70">{featuredExperience.location}</p>
              </div>
            </div>
            <div className="p-6 sm:p-9 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-normal text-brass">Current Role</p>
              <h3 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
                {featuredExperience.role}
              </h3>
              <p className="mt-6 text-base leading-8 text-pearl/72">{featuredExperience.summary}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {featuredExperience.strengths.map((strength) => (
                  <div key={strength} className="border border-white/12 bg-porcelain/[0.06] p-4 text-sm font-semibold leading-6 text-pearl/82">
                    {strength}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-10 grid gap-5">
          {timeline.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <article className="grid gap-6 border-t border-white/12 py-8 lg:grid-cols-[220px_minmax(0,0.72fr)_minmax(280px,0.55fr)]">
                <div>
                  <p className="font-accent text-4xl text-brass">{item.period}</p>
                  <p className="mt-2 text-sm text-pearl/52">{item.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold leading-tight">{item.role}</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-normal text-pearl/58">{item.company}</p>
                  <p className="mt-5 text-base leading-8 text-pearl/70">{item.body}</p>
                </div>
                <div className="space-y-3">
                  {item.points.map((point) => (
                    <p key={point} className="border-l border-brass/50 pl-4 text-sm font-semibold leading-6 text-pearl/74">
                      {point}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="bg-porcelain px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <SectionKicker>Portfolio</SectionKicker>
            <h2 className="max-w-4xl font-display text-5xl font-semibold leading-[0.9] text-ink sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.1rem]">
              Editorial moodboards with commercial intent.
            </h2>
          </div>
          <p className="text-base leading-8 text-mocha">
            My visual gallery shows my styling range, confidence, cultural references, and image direction for
            recruiters and fashion brands.
          </p>
        </Reveal>

        <div className="masonry">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={(index % 3) * 0.08} className="masonry-item">
              <motion.article
                whileHover="hover"
                className="group relative overflow-hidden bg-ink shadow-soft"
                onMouseEnter={() => window.dispatchEvent(new Event('cursor-active'))}
                onMouseLeave={() => window.dispatchEvent(new Event('cursor-idle'))}
              >
                <motion.img
                  src={image.src}
                  alt={`${image.title} fashion portfolio visual`}
                  className={`w-full object-cover ${image.tall ? 'h-[520px]' : 'h-[390px]'}`}
                  loading="lazy"
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/86 via-ink/10 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-porcelain">
                  <p className="text-[0.66rem] font-bold uppercase tracking-normal text-pearl/70">{image.tag}</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold">{image.title}</h3>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Personality() {
  return (
    <section className="overflow-hidden bg-canvas px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <SectionKicker>Creative Personality</SectionKicker>
            <h2 className="font-display text-5xl font-semibold leading-[0.9] text-ink sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
              Rhythm, style, and quiet confidence.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-mocha">
            Dance, music, styling, fashion trends, and creative arts are a real part of how I see fashion. They
            sharpen my eye for movement, detail, and presentation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {personalityCards.map((card, index) => {
            const Icon = card.icon
            return (
              <Reveal key={card.title} delay={index * 0.09}>
                <motion.article
                  whileHover={{ y: -10 }}
                  className="group relative min-h-[470px] overflow-hidden bg-ink p-6 text-porcelain shadow-editorial"
                >
                  <img
                    src={card.image}
                    alt={`${card.title} inspired personal portfolio visual`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/44 to-ink/12" />
                  <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-4xl font-semibold">{card.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-pearl/76">{card.body}</p>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Highlights() {
  return (
    <section className="bg-porcelain px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionKicker>Highlights</SectionKicker>
          <h2 className="font-display text-5xl font-semibold leading-[0.9] text-ink sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.8rem]">
            Projects, leadership, and creative credibility.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-mocha">
            A quick view of the things that shape my professional story: NIFT training, production systems, cultural
            leadership, publishing, and creative performance.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-ink/10 bg-white/48 p-5 shadow-soft backdrop-blur sm:p-8">
            <img
              src="/images/sandhya-nift-entrance.jpeg"
              alt="Sandhya at NIFT"
              className="mb-8 h-72 w-full object-cover object-[50%_38%]"
              loading="lazy"
            />
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex gap-4 border-b border-ink/10 pb-4 last:border-b-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <span className="font-accent text-3xl leading-none text-brass">0{index + 1}</span>
                  <p className="pt-1 text-sm font-semibold leading-7 text-mocha">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-5 py-24 text-porcelain sm:px-8 lg:px-10 lg:py-32">
      <img
        src="/images/sandhya-river-night.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-ink/88" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <SectionKicker>Contact</SectionKicker>
          <h2 className="font-display text-5xl font-semibold leading-[0.88] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
            Let's build the next collection story.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-pearl/70">
            I am open to fashion merchandising roles, production coordination opportunities, creative styling work,
            and brand-facing projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 transition hover:border-brass hover:text-brass"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profileLinks.email}`}
              aria-label="Send email"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 transition hover:border-brass hover:text-brass"
            >
              <Mail size={20} />
            </a>
            <a
              href={`tel:${profileLinks.phone}`}
              aria-label="Call Sandhya"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 transition hover:border-brass hover:text-brass"
            >
              <Phone size={18} />
            </a>
          </div>
          <div className="mt-7 space-y-2 text-sm font-semibold text-pearl/66">
            <p>{profileLinks.email}</p>
            <p>{profileLinks.phone}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-white/12 bg-white/[0.055] p-6 shadow-editorial backdrop-blur-xl sm:p-9">
            <p className="text-xs font-bold uppercase tracking-normal text-brass">Connect With Me</p>
            <h3 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              For merchandising, sampling, production, and fashion brand roles.
            </h3>
            <div className="mt-8 grid gap-4">
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-white/12 bg-porcelain/[0.06] p-5 transition hover:border-brass"
              >
                <span>
                  <span className="block text-xs font-bold uppercase tracking-normal text-pearl/52">LinkedIn</span>
                  <span className="mt-1 block text-base font-semibold text-pearl/86">Sandhya Kumari</span>
                </span>
                <ArrowUpRight size={20} className="text-brass transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={`mailto:${profileLinks.email}`}
                className="group flex items-center justify-between border border-white/12 bg-porcelain/[0.06] p-5 transition hover:border-brass"
              >
                <span>
                  <span className="block text-xs font-bold uppercase tracking-normal text-pearl/52">Email</span>
                  <span className="mt-1 block text-base font-semibold text-pearl/86">{profileLinks.email}</span>
                </span>
                <ArrowUpRight size={20} className="text-brass transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={`tel:${profileLinks.phone}`}
                className="group flex items-center justify-between border border-white/12 bg-porcelain/[0.06] p-5 transition hover:border-brass"
              >
                <span>
                  <span className="block text-xs font-bold uppercase tracking-normal text-pearl/52">Phone</span>
                  <span className="mt-1 block text-base font-semibold text-pearl/86">{profileLinks.phone}</span>
                </span>
                <ArrowUpRight size={20} className="text-brass transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-ink px-5 pb-8 text-porcelain sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/12 pt-8 text-xs font-bold uppercase tracking-normal text-pearl/50 sm:flex-row sm:items-center sm:justify-between">
        <p>Sandhya / Fashion Portfolio</p>
        <p>Merchandising / Production / Styling</p>
      </div>
    </footer>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28 })

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1450)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Cursor />
      <motion.div className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left bg-oxblood" style={{ scaleX }} />
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Gallery />
        <Personality />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
