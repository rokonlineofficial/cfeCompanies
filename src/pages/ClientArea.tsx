import { FileText, FolderOpen, Headphones } from 'lucide-react'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { site } from '../data/navigation'

export default function ClientArea() {
  return (
    <>
      <Seo
        title="Client Area"
        description="Access your CFE Companies client resources, documents and important information."
      />

      {/* Hero */}
      <section className="mx-auto max-w-[88rem] px-6 pb-24 pt-36 md:px-8 lg:px-10">
        <SectionHeading
          as="h1"
          title="Client Area"
          text="A dedicated space for CFE Companies clients to access their resources, documents and important information."
        />

        <div className="mt-10">
          {site.clientAreaUrl ? (
            <Button href={site.clientAreaUrl} arrow>
              Access Client Area
            </Button>
          ) : (
            <div className="max-w-2xl rounded-2xl bg-sage p-6">
              <div className="flex gap-4">
                <FolderOpen
                  size={22}
                  className="mt-0.5 shrink-0 text-ink"
                  aria-hidden="true"
                />

                <div>
                  <h2 className="font-semibold text-ink">
                    Client portal coming soon
                  </h2>

                  <p className="mt-2 leading-7 text-ink/70">
                    The client portal link has not been added yet. Please
                    contact our team if you need access to your documents
                    or client resources.
                  </p>

                  <p className="mt-4 text-sm text-ink/70">
                    Call us at{' '}
                    <a
                      href={`tel:${site.phone}`}
                      className="font-semibold text-ink underline underline-offset-4"
                    >
                      {site.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* What clients can access */}
      <section className="border-t border-ink/10 bg-sage/30">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">

            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/50">
                Client Resources
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Everything you need, in one place.
              </h2>
            </div>


            <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">

              {/* Card 1 */}
              <div className="rounded-2xl border border-ink/10 bg-white p-6">
                <FileText
                  size={24}
                  strokeWidth={1.8}
                  className="text-red"
                  aria-hidden="true"
                />

                <h3 className="mt-6 text-xl font-semibold text-ink">
                  Documents
                </h3>

                <p className="mt-3 text-sm leading-6 text-ink/60">
                  Access important documents and resources shared by the
                  CFE Companies team.
                </p>
              </div>


              {/* Card 2 */}
              <div className="rounded-2xl border border-ink/10 bg-white p-6">
                <FolderOpen
                  size={24}
                  strokeWidth={1.8}
                  className="text-red"
                  aria-hidden="true"
                />

                <h3 className="mt-6 text-xl font-semibold text-ink">
                  Client Resources
                </h3>

                <p className="mt-3 text-sm leading-6 text-ink/60">
                  Find the resources and information you need throughout
                  your work with our team.
                </p>
              </div>


              {/* Card 3 */}
              <div className="rounded-2xl border border-ink/10 bg-white p-6">
                <Headphones
                  size={24}
                  strokeWidth={1.8}
                  className="text-red"
                  aria-hidden="true"
                />

                <h3 className="mt-6 text-xl font-semibold text-ink">
                  Need Help?
                </h3>

                <p className="mt-3 text-sm leading-6 text-ink/60">
                  If you need assistance accessing your client resources,
                  our team is here to help.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Bottom CTA */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:px-8 lg:px-10">
        <div className="grid gap-8 border-t border-ink/10 pt-12 md:grid-cols-12 md:items-center">

          <div className="md:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/50">
              Need assistance?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Our team is here to help.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-ink/60">
              If you have questions about your client resources or need
              help accessing your documents, please get in touch with us.
            </p>
          </div>

          <div className="md:col-span-4 md:flex md:justify-end">
            <Button href="/contact" arrow>
              Contact Us
            </Button>
          </div>

        </div>
      </section>
    </>
  )
}