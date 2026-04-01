import {
  Bike,
  Building,
  Car,
  Coins,
  Crown,
  Facebook,
  Gamepad2,
  Globe,
  Guitar,
  Headphones,
  HeartPulse,
  Instagram,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  PlusSquare,
  Share2,
  ShieldCheck,
  Store,
  Target,
  TrendingUp,
  Trophy,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const trinityItems = [
  {
    title: "International Riders",
    description:
      "1,200 bikers from Germany, Greece, and the Balkans bringing custom builds and high-visibility energy into the center of Pogradec.",
    image:
      "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors22.jpg",
  },
  {
    title: "Lake Sports",
    description:
      "Beach volleyball, paragliding, and lake diving turn the festival into a full destination weekend instead of a single-stage event.",
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    title: "Live Music",
    description:
      "Rock bands and DJs keep the public beach active from afternoon through late night and broaden the audience beyond riders.",
    image:
      "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music1.jpg",
  },
];

const audienceMetrics = [
  { label: "International bikers", value: "1,200", icon: Bike },
  { label: "Total visitors", value: "6,000+", icon: Users },
  { label: "European reach", value: "Multi-market", icon: Globe },
  { label: "Local business impact", value: "Hotels, bars, restaurants", icon: Building },
];

const economicContributors = [
  { name: "Moto Club Pogradec", amount: "708,000 ALL" },
  { name: "Bashkia Pogradec", amount: "74,000 ALL" },
  { name: "Fondacioni Kennedy & Seven", amount: "24,000 ALL" },
];

const partnershipTiers = [
  {
    name: "Iron",
    price: "50,000 ALL",
    icon: Zap,
    accent: "border-white/20",
    benefits: ["Logo on website", "Logo on LED stage screen", "Social media mentions"],
  },
  {
    name: "Titanium",
    price: "150,000 ALL",
    icon: Crown,
    accent: "border-[#cc5500]/60",
    benefits: [
      "All Iron package benefits",
      "Event naming rights",
      "3x5m exhibition space",
      "Professional media content",
    ],
  },
];

const lineupGroups = [
  {
    title: "Music & Stage",
    icon: Guitar,
    items: ["Frank Ibrahimi", "Niki Zaimi", "Offchestra", "VJ Erion", "DJ CL4US"],
  },
  {
    title: "Sports & Adrenaline",
    icon: Trophy,
    items: ["Beach Volley Championship", "Paragliding", "Lake Diving"],
  },
  {
    title: "Culture & Family",
    icon: Gamepad2,
    items: ["Cycling to Lin", "Retro Bike & Car Expo", "Family Games"],
  },
];

const marketingColumns = [
  {
    title: "Digital Ecosystem",
    icon: Share2,
    bullets: [
      "Social and online media with 2M+ projected reach",
      "Professional photo and AV content",
      "15+ influencer connections across biker and travel communities",
    ],
  },
  {
    title: "Physical & Media",
    icon: Megaphone,
    bullets: [
      "Posters, banners, and city branding",
      "Official press and media relations",
      "Visibility from institutional partners",
    ],
  },
  {
    title: "Strategic Impact",
    icon: Target,
    bullets: [
      "Direct community engagement",
      "Inclusive and professional standards",
      "Integrated communication planning",
    ],
  },
];

const logisticsZones = [
  { name: "Main Stage & Arena", icon: Headphones },
  { name: "Partner & Expo Zone", icon: Store },
  { name: "VIP & Partner Parking", icon: Car },
  { name: "Medical & Safety Hub", icon: PlusSquare },
];

const partnerLogos = [
  {
    name: "Moto Club Pogradec",
    image:
      "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/MotoClub.jpeg",
  },
  {
    name: "Sherlock Irish Pub",
    image:
      "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/Sherlock.jpg",
  },
  {
    name: "Bashkia Pogradec",
    image:
      "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/Bashkia.PNG",
  },
  {
    name: "Policia e Shtetit",
    image:
      "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/Policia.PNG",
  },
  {
    name: "Visit Pogradec",
    image:
      "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/Visitpg.jpg",
  },
  {
    name: "Fondacioni Kennedy",
    image:
      "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/Kennedy.jpg",
  },
];

const galleryImages = [
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors3.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors8.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors19.jpg",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music4.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music8.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music12.jpg",
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-[#cc5500]">
        {eyebrow}
      </p>
      <h2 className="font-bebas text-4xl uppercase tracking-[0.08em] text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#b8b8b8]">{description}</p>
      ) : null}
    </div>
  );
}

export function MobilePresentation() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#121212] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695037688416-9863d3efc8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="MotoFest hero background"
            className="h-full w-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-[#121212]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="font-ruslan text-2xl uppercase tracking-[0.2em] text-[#8e8e8e] sm:text-3xl">
              Pogradec, Albania
            </p>
            <h1 className="mt-5 font-bebas text-6xl uppercase leading-none tracking-[0.08em] text-white sm:text-8xl">
              Moto Fest <span className="text-[#cc5500]">2026</span>
            </h1>
            <div className="mt-6 h-px w-32 bg-[#cc5500]" />
            <p className="mt-6 font-mono text-sm uppercase tracking-[0.4em] text-[#b8b8b8] sm:text-base">
              The legend returns
            </p>
            <p className="mt-4 font-bebas text-3xl uppercase tracking-[0.18em] text-[#cc5500] sm:text-4xl">
              17-18 July 2026
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass-panel rounded-3xl p-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8e8e8e]">Theme</p>
              <p className="mt-3 font-bebas text-5xl text-white">The Legend Returns</p>
            </div>
            <div className="glass-panel rounded-3xl p-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8e8e8e]">Location</p>
              <p className="mt-3 font-bebas text-5xl text-white">Pogradec</p>
            </div>
            <div className="glass-panel rounded-3xl p-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8e8e8e]">Dates</p>
              <p className="mt-3 font-bebas text-5xl text-white">17-18 July</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="01 / Executive Brief"
            title="Elevating Pogradec"
            description="The event is positioned as a tourism engine, a cultural platform, and a community-support vehicle at the same time."
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="font-ruslan text-3xl uppercase tracking-[0.12em] text-[#8e8e8e]">
                The Mission
              </p>
              <p className="mt-6 text-base leading-7 text-[#c4c4c4] sm:text-lg">
                We are making Pogradec a destination for bikers and tourists from across Europe,
                with direct upside for local hotels, restaurants, bars, and the wider city brand.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Huge crowd: 1,200 international bikers and 5,000+ total visitors.",
                  "Business boost: stronger occupancy and more spending across local venues.",
                  "Community aid: 10 trucks of supplies already confirmed for 2026.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-t border-white/10 pt-4 text-[#f2f2f2]"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#cc5500]" />
                    <p className="text-sm leading-6 sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#cc5500]/20">
              <ImageWithFallback
                src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/MotoFestTarga.png"
                alt="MotoFest patch"
                className="h-full min-h-[320px] w-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="02 / Trinity"
            title="Three Reasons People Join"
            description="The mobile version breaks the pitch into clear vertical chapters instead of dense side-by-side slide compositions."
          />
          <div className="grid gap-5">
            {trinityItems.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40"
              >
                <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover grayscale md:h-full"
                  />
                  <div className="p-6 sm:p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#cc5500]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-bebas text-4xl uppercase tracking-[0.08em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#b8b8b8]">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="03 / Community"
            title="Helping Our Community"
            description="The humanitarian angle becomes a straightforward impact block on mobile instead of a cinematic split composition."
          />
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              {[
                {
                  title: "Already done",
                  text: "22 trucks of medical and school supplies delivered in past years.",
                  icon: Truck,
                },
                {
                  title: "Coming in 2026",
                  text: "10 more trucks of support are already confirmed for this year.",
                  icon: HeartPulse,
                },
                {
                  title: "German partnership",
                  text: "Biker-Brummi-Hilfe remains part of the aid effort to Albania.",
                  icon: Globe,
                },
              ].map((item) => (
                <div key={item.title} className="glass-panel rounded-[2rem] p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-[#cc5500]/30 bg-[#cc5500]/10 p-3">
                      <item.icon className="h-6 w-6 text-[#cc5500]" />
                    </div>
                    <div>
                      <h3 className="font-bebas text-3xl uppercase tracking-[0.08em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-[#b8b8b8]">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[#cc5500]/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695222833131-54ee679ae8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                alt="Cargo truck"
                className="h-full min-h-[360px] w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-bebas text-8xl leading-none text-[#cc5500]">22</p>
                <p className="font-ruslan text-2xl uppercase text-white/80">Full Trucks Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="04 / Audience"
            title="Who Is Coming?"
            description="A mobile reader should be able to understand the scale of the audience in seconds."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {audienceMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-[#cc5500]/30 bg-[#cc5500]/10 p-3">
                    <metric.icon className="h-6 w-6 text-[#cc5500]" />
                  </div>
                  <div>
                    <p className="font-bebas text-4xl uppercase tracking-[0.06em] text-white">
                      {metric.value}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8e8e8e]">
                      {metric.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="05 / Economic Engine"
            title="Investment, ROI, and Occupancy"
            description="The desktop speedometer becomes readable stacked economics content on small screens."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-[#cc5500]/30 bg-[#cc5500]/10 p-3">
                    <Coins className="h-6 w-6 text-[#cc5500]" />
                  </div>
                  <div>
                    <p className="font-bebas text-4xl text-white">2,752,000 ALL</p>
                    <p className="mt-2 text-base leading-7 text-[#b8b8b8]">
                      Total budget currently being invested in delivering the event.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bebas text-4xl text-white">150% ROI</p>
                    <p className="mt-2 text-base leading-7 text-[#b8b8b8]">
                      Estimated city-level return driven by tourism and audience spending.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bebas text-4xl text-white">100% Full Hotels</p>
                    <p className="mt-2 text-base leading-7 text-[#b8b8b8]">
                      A full-capacity weekend for accommodation and related services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#cc5500]/20 bg-black/40 p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#cc5500]">
                Contributors
              </p>
              <div className="mt-6 space-y-4">
                {economicContributors.map((contributor) => (
                  <div
                    key={contributor.name}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-4"
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-[#b8b8b8]">
                      {contributor.name}
                    </p>
                    <p className="font-bebas text-3xl text-white">{contributor.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="06 / Sponsorship"
            title="Partnership Tiers"
            description="Two sponsorship levels are presented as clean vertical cards that are readable on phones."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {partnershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-[2rem] border bg-black/40 p-6 sm:p-8 ${tier.accent}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-2xl border border-[#cc5500]/30 bg-[#cc5500]/10 p-3">
                    <tier.icon className="h-7 w-7 text-[#cc5500]" />
                  </div>
                  <p className="font-bebas text-4xl text-[#cc5500]">{tier.price}</p>
                </div>
                <h3 className="mt-6 font-bebas text-5xl uppercase tracking-[0.08em] text-white">
                  {tier.name}
                </h3>
                <div className="mt-6 space-y-3">
                  {tier.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#cc5500]" />
                      <p className="text-base leading-7 text-[#c4c4c4]">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="07 / Organizers"
            title="Moto Club Pogradeci"
            description="The engine behind the event, reframed as a mobile profile instead of a side-by-side showcase."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <ImageWithFallback
                src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors19.jpg"
                alt="Moto Club Pogradeci"
                className="h-full min-h-[360px] w-full object-cover grayscale"
              />
            </div>

            <div className="space-y-4">
              <div className="glass-panel rounded-[2rem] p-6">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-[#cc5500]" />
                  <h3 className="font-bebas text-3xl uppercase tracking-[0.08em] text-white">
                    Mission
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-[#b8b8b8]">
                  Scale Pogradec as an international adventure destination and deliver measurable
                  value with local authorities and humanitarian partners.
                </p>
              </div>
              <div className="glass-panel rounded-[2rem] p-6">
                <div className="flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-[#cc5500]" />
                  <h3 className="font-bebas text-3xl uppercase tracking-[0.08em] text-white">
                    Legacy
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-[#b8b8b8]">
                  Previous editions in 2022 and 2024, followed by Brotherhood Fest in 2025,
                  create a credible growth arc instead of a one-off launch.
                </p>
              </div>
              <div className="glass-panel rounded-[2rem] p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-[#8e8e8e]" />
                  <h3 className="font-bebas text-3xl uppercase tracking-[0.08em] text-white">
                    Commitment
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-[#b8b8b8]">
                  Primary project contributor with 708,000 ALL already invested into the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="08 / Program"
            title="Festival Lineup"
            description="The schedule slide becomes three readable content blocks with cleaner separation between programming categories."
          />
          <div className="grid gap-5">
            {lineupGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-[#cc5500]/30 bg-[#cc5500]/10 p-3">
                    <group.icon className="h-6 w-6 text-[#cc5500]" />
                  </div>
                  <h3 className="font-bebas text-3xl uppercase tracking-[0.08em] text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[0.14em] text-[#c4c4c4]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="09 / Visibility"
            title="Promotion Strategy"
            description="The mobile page groups the marketing story into three compact cards with clearer scannability."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {marketingColumns.map((column) => (
              <div
                key={column.title}
                className="rounded-[2rem] border border-[#cc5500]/20 bg-black/40 p-6"
              >
                <div className="w-fit rounded-2xl border border-[#cc5500]/30 bg-[#cc5500]/10 p-3">
                  <column.icon className="h-6 w-6 text-[#cc5500]" />
                </div>
                <h3 className="mt-5 font-bebas text-3xl uppercase tracking-[0.08em] text-white">
                  {column.title}
                </h3>
                <div className="mt-5 space-y-3">
                  {column.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#cc5500]" />
                      <p className="text-base leading-7 text-[#b8b8b8]">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="10 / Logistics"
            title="Site Map & Operations"
            description="The mobile version keeps the map as a full-width asset and moves operational details into a clean checklist."
          />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6">
              <div className="space-y-4">
                {logisticsZones.map((zone) => (
                  <div key={zone.name} className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <div className="rounded-2xl border border-[#cc5500]/30 bg-[#cc5500]/10 p-3">
                      <zone.icon className="h-5 w-5 text-[#cc5500]" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[#c4c4c4]">{zone.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-[#cc5500]/20">
              <ImageWithFallback
                src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Maps.png"
                alt="Event layout map"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="11 / Growth"
            title="Beyond 2026"
            description="The long-form site treats the vision slide as a simple roadmap with believable milestones."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-base leading-7 text-[#b8b8b8]">
                The long-term goal is to establish Pogradec as a definitive Balkan biker capital
                and expand the event footprint across tourism, audience size, and cross-border
                visibility by 2030.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-[#cc5500]/30 bg-[#cc5500]/10 p-3">
                    <TrendingUp className="h-6 w-6 text-[#cc5500]" />
                  </div>
                  <div>
                    <p className="font-bebas text-3xl text-white">10,000+ attendees</p>
                    <p className="mt-2 text-base leading-7 text-[#b8b8b8]">
                      Projected target for year five, by 2030.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-[#cc5500]/30 bg-[#cc5500]/10 p-3">
                    <Globe className="h-6 w-6 text-[#cc5500]" />
                  </div>
                  <div>
                    <p className="font-bebas text-3xl text-white">Pan-European reach</p>
                    <p className="mt-2 text-base leading-7 text-[#b8b8b8]">
                      Expanded marketing focus across Italy, Greece, and DACH markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#cc5500]/20 bg-black/40 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#cc5500]">
                Growth trajectory
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { year: "2026", value: "6k", width: "w-3/5" },
                  { year: "2027", value: "7.5k", width: "w-[68%]" },
                  { year: "2028", value: "8.5k", width: "w-[78%]" },
                  { year: "2029", value: "9.2k", width: "w-[88%]" },
                  { year: "2030", value: "10k+", width: "w-full" },
                ].map((bar) => (
                  <div key={bar.year}>
                    <div className="mb-2 flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-[#8e8e8e]">
                      <span>{bar.year}</span>
                      <span>{bar.value}</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/5">
                      <div className={`h-3 rounded-full bg-[#cc5500] ${bar.width}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="12 / Sponsors & Partners"
            title="Institutional and Brand Support"
            description="Logo-heavy content becomes a responsive partner wall that keeps each brand readable."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="flex min-h-[180px] flex-col justify-between rounded-[2rem] border border-white/10 bg-black/40 p-4"
              >
                <div className="flex min-h-[110px] items-center justify-center">
                  <ImageWithFallback
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-24 w-full object-contain"
                  />
                </div>
                <p className="text-center font-bebas text-2xl uppercase tracking-[0.08em] text-[#c4c4c4]">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="13 / Contact"
            title="Ride With Us"
            description="Contact details are kept tappable-looking and separated into clear cards for mobile users."
          />
          <div className="grid gap-4">
            {[
              {
                label: "Sponsorship inquiries",
                value: "dritanhoxha@protonmail.com",
                icon: Mail,
              },
              {
                label: "Social media",
                value: "MC POGRADECI",
                icon: Instagram,
                extraIcon: Facebook,
              },
              {
                label: "Core team direct line",
                value: "+355 69 44 09 129",
                icon: Phone,
              },
              {
                label: "Address",
                value: 'Bulevardi "Deshmoret e Pojskes", Pogradec',
                icon: MapPin,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-5"
              >
                <div className="shrink-0 rounded-2xl border border-[#cc5500]/30 bg-[#cc5500]/10 p-3">
                  <item.icon className="h-6 w-6 text-[#cc5500]" />
                  {item.extraIcon ? <item.extraIcon className="mt-2 h-4 w-4 text-[#cc5500]" /> : null}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8e8e8e]">
                    {item.label}
                  </p>
                  <p className="mt-2 break-words font-bebas text-3xl uppercase tracking-[0.04em] text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,85,0,0.18),transparent_35%)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="14 / Gallery"
            title="Festival Atmosphere"
            description="The final section turns the animated desktop gallery into a stable, fast-loading grid suitable for scrolling."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={image} className={index === 0 ? "sm:col-span-2" : ""}>
                <ImageWithFallback
                  src={image}
                  alt={`MotoFest gallery ${index + 1}`}
                  className="h-64 w-full rounded-[2rem] object-cover grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
