import { Link } from 'react-router-dom'

const posts = [
  {
    slug: '/news/why-accurate-bookkeeping-matters',
    category: 'Accounting',
    date: 'October 10, 2026',
    title: 'Why Accurate Bookkeeping Matters for Your Business',
    excerpt:
      'Accurate bookkeeping gives business owners a clearer view of cash flow, expenses, profitability and the financial health of their company.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: '/news/how-to-prepare-for-tax-season',
    category: 'Tax Planning',
    date: 'October 6, 2026',
    title: 'How to Prepare Your Business for Tax Season',
    excerpt:
      'A little preparation can make tax season much easier. Here are practical steps business owners can take before filing deadlines arrive.',
    image:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: '/news/business-cash-flow-guide',
    category: 'Business Finance',
    date: 'September 29, 2026',
    title: 'A Simple Guide to Managing Business Cash Flow',
    excerpt:
      'Understanding where your money comes from and where it goes can help you make stronger financial decisions throughout the year.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: '/news/common-accounting-mistakes',
    category: 'Accounting',
    date: 'September 22, 2026',
    title: 'Common Accounting Mistakes Small Businesses Should Avoid',
    excerpt:
      'Small accounting mistakes can become expensive problems over time. Learn which financial habits deserve closer attention.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: '/news/financial-reports-business-owners',
    category: 'Financial Reporting',
    date: 'September 15, 2026',
    title: 'Financial Reports Every Business Owner Should Understand',
    excerpt:
      'You do not need to be an accountant to understand your numbers. These essential reports can help you see how your business is performing.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: '/news/outsourced-accounting-benefits',
    category: 'Business Growth',
    date: 'September 8, 2026',
    title: 'The Benefits of Outsourcing Your Accounting',
    excerpt:
      'Outsourcing accounting can give growing businesses access to professional support while allowing owners to focus on running the company.',
    image:
      'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: '/news/how-accounting-support-helps-growth',
    category: 'Business Growth',
    date: 'August 30, 2026',
    title: 'How Better Accounting Support Can Help Your Business Grow',
    excerpt:
      'Good financial systems create a stronger foundation for growth. Discover how organized accounting can support better business decisions.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: '/news/when-to-hire-accountant',
    category: 'Business Advice',
    date: 'August 22, 2026',
    title: 'When Should Your Business Hire an Accountant?',
    excerpt:
      'Knowing when to bring in professional accounting support can save time, reduce financial stress and help your company stay organized.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
  },
]

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export default function NewsSection() {
  return (
    <div className="news-grid">

      {posts.map((post, index) => (
        <article
          key={post.slug}
          className="
            group
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-black/10
            bg-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-black/20
            hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]
          "
        >

          {/* Image */}
          <Link
            to={post.slug}
            className="
              relative
              block
              aspect-[16/10]
              overflow-hidden
              bg-[#F5F5F5]
            "
          >
            <img
              src={post.image}
              alt={post.title}
              loading={index > 2 ? 'lazy' : 'eager'}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-105
              "
            />

            {/* Category */}
            <span
              className="
                absolute
                left-5
                top-5
                rounded-full
                border
                border-black/10
                bg-white
                px-3.5
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-black
              "
            >
              {post.category}
            </span>
          </Link>


          {/* Content */}
          <div className="flex flex-1 flex-col p-6 md:p-7">

            {/* Meta */}
            <div
              className="
                mb-4
                flex
                flex-wrap
                items-center
                gap-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-black/45
              "
            >
              <span>
                {post.date}
              </span>

              <span
                className="h-1 w-1 rounded-full bg-[#4BD0FE]"
                aria-hidden="true"
              />

              <span>
                CFE Companies
              </span>
            </div>


            {/* Title */}
            <h2
              className="
                mb-4
                text-[1.45rem]
                font-bold
                leading-[1.1]
                tracking-[-0.035em]
                text-black
                transition-colors
                duration-200
                group-hover:text-black/70
                md:text-[1.65rem]
              "
            >
              <Link to={post.slug}>
                {post.title}
              </Link>
            </h2>


            {/* Excerpt */}
            <p
              className="
                mb-7
                text-[15px]
                leading-6
                text-black/60
              "
            >
              {post.excerpt}
            </p>


            {/* Read Article */}
            <div className="mt-auto pt-2">

              <Link
                to={post.slug}
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-black
                "
              >

                <span className="relative">

                  Read Article

                  <span
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-px
                      w-0
                      bg-[#4BD0FE]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                </span>


                {/* Arrow */}
                <span
                  className="
                    grid
                    h-9
                    w-9
                    place-items-center
                    rounded-full
                    border
                    border-black/20
                    bg-transparent
                    text-black
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:border-[#4BD0FE]
                    group-hover:bg-[#4BD0FE]
                    group-hover:text-black
                  "
                >
                  <ArrowIcon />
                </span>

              </Link>

            </div>

          </div>

        </article>
      ))}

    </div>
  )
}