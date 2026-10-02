'use client';

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function sendEvent(name, params = {}) {
  if (!measurementId || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId || typeof window === "undefined" || typeof window.gtag !== "function") return;

    const query = searchParams?.toString();
    const pageLocation = query ? `${window.location.origin}${pathname}?${query}` : `${window.location.origin}${pathname}`;
    const contentGroup = pathname === "/" ? "Homepage" : pathname.split("/")[1] || "Homepage";

    window.gtag("config", measurementId, {
      page_path: pathname,
      page_location: pageLocation,
      content_group: contentGroup,
    });

    const status = searchParams?.get("status");
    if (pathname === "/newsletter" && status === "subscribed") {
      sendEvent("newsletter_signup", {
        content_type: "newsletter",
        content_id: "staffroom-letter",
      });
    }

    const searchTerm = searchParams?.get("q");
    if (searchTerm) {
      sendEvent("search", { search_term: searchTerm.slice(0, 100) });
    }

    const trackedDepths = new Set();
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.floor((window.scrollY / scrollable) * 100);
      [25, 50, 75, 90].forEach((depth) => {
        if (percent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          sendEvent("content_scroll", {
            percent_scrolled: depth,
            content_group: contentGroup,
          });
        }
      });
    };

    const handleClick = (event) => {
      const target = event.target.closest("[data-analytics-event]");
      if (!target) return;

      const eventName = target.dataset.analyticsEvent;
      const params = {
        content_type: target.dataset.contentType || undefined,
        content_id: target.dataset.contentId || undefined,
        content_title: target.dataset.contentTitle || undefined,
        content_section: target.dataset.contentSection || undefined,
        content_format: target.dataset.contentFormat || undefined,
        link_location: target.dataset.linkLocation || undefined,
      };

      Object.keys(params).forEach((key) => {
        if (params[key] === undefined || params[key] === "") delete params[key];
      });

      sendEvent(eventName, params);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, [pathname, searchParams]);

  return null;
}
