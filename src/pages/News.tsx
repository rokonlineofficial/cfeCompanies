import { Link } from "react-router-dom";

const posts = [
  {
    title: "Why Accurate Bookkeeping Matters for Your Business",
    category: "Accounting",
    date: "October 10, 2026",
    excerpt:
      "Accurate bookkeeping gives business owners a clearer view of cash flow, expenses, profitability and the financial health of their company.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "How to Prepare Your Business for Tax Season",
    category: "Tax Planning",
    date: "October 6, 2026",
    excerpt:
      "A little preparation can make tax season much easier. Here are practical steps business owners can take before filing deadlines arrive.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "A Simple Guide to Managing Business Cash Flow",
    category: "Business Finance",
    date: "September 29, 2026",
    excerpt:
      "Understanding where your money comes from and where it goes can help you make stronger financial decisions.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Common Accounting Mistakes Small Businesses Should Avoid",
    category: "Accounting",
    date: "September 22, 2026",
    excerpt:
      "Small accounting mistakes can become expensive problems over time. Learn which financial habits deserve closer attention.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Financial Reports Every Business Owner Should Understand",
    category: "Financial Reporting",
    date: "September 15, 2026",
    excerpt:
      "You do not need to be an accountant to understand your numbers. These essential reports can help you see how your business is performing.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "The Benefits of Outsourcing Your Accounting",
    category: "Business Growth",
    date: "September 8, 2026",
    excerpt:
      "Outsourcing accounting can give growing businesses access to professional support while allowing owners to focus on running the company.",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* ================= PAGE HERO ================= */}
      <section className="border-b border-black/10">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-10">

          <div className="grid grid-cols-12 gap-6">

            <div className="col-span-12 lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4BD0FE]">
                CFE Companies
              </p>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-[7rem]">
                News
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
                Insights, advice and practical resources to help you
                make smarter financial and business decisions.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= NEWS ================= */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-10">

          <div className="mb-12 grid grid-cols-12 gap-6 md:mb-16">

            <div className="col-span-12 lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                Latest Articles
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] md:text-5xl">
                Ideas that help your business move forward.
              </h2>
            </div>

          </div>


          {/* BOXED NEWS GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {posts.map((post) => (
              <article
                key={post.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >

                {/* IMAGE */}
                <Link
                  to="#"
                  className="relative block aspect-[16/10] overflow-hidden bg-[#f4f4f2]"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em]">
                    {post.category}
                  </span>
                </Link>


                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-6 md:p-7">

                  <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-black/45">
                    {post.date}
                  </div>

                  <h3 className="text-2xl font-bold leading-[1.1] tracking-[-0.035em]">
                    <Link to="#">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-4 text-[15px] leading-6 text-black/60">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-7">

                    <Link
                      to="#"
                      className="inline-flex items-center gap-3 text-sm font-semibold"
                    >
                      <span>Read Article</span>

                      <span className="grid h-9 w-9 place-items-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-[#4BD0FE] group-hover:bg-[#4BD0FE]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h13" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      </span>
                    </Link>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="border-t border-black/10 bg-[#f4f4f2]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-10">

          <div className="grid grid-cols-12 gap-6">

            <div className="col-span-12 lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                CFE Companies
              </p>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-4xl font-extrabold leading-[1] tracking-[-0.04em] md:text-6xl">
                Need help with your business finances?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
                Our team can help you build a stronger financial
                foundation and make better decisions with confidence.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#4BD0FE] hover:text-black"
              >
                Get in Touch
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}