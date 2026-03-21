'use client'

import Script from 'next/script'

// Facebook Page Plugin requires the actual page URL, not a share link
const FB_PAGE_URL = 'https://www.facebook.com/people/Range-and-Restore-Sports-Massage/61572962878628/'

export function FacebookFeed() {
  return (
    <>
      <div id="fb-root" />

      <section className="section bg-[#c6e28a]" aria-labelledby="social-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7">
            <span className="eyebrow block mb-1.5">Stay Connected</span>
            <h2 id="social-heading" className="text-2xl sm:text-3xl font-extrabold text-[#334311] tracking-tight">
              Follow along
            </h2>
            <p className="mt-2 text-[#334311]/70 text-sm">
              Treatment tips, clinic news and updates from Archway, North London.
            </p>
          </div>

          <div className="flex justify-center">
            <div
              className="fb-page rounded-2xl overflow-hidden shadow-md"
              data-href={FB_PAGE_URL}
              data-tabs="timeline"
              data-width="500"
              data-height="500"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            />
          </div>
        </div>
      </section>

      <Script
        id="facebook-sdk"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `,
        }}
      />
    </>
  )
}
