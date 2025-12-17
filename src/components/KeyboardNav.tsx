'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { CASE_STUDIES } from '@/lib/case-studies';

const ROUTES = ['/', '/projects', '/about'];

/**
 * KeyboardNav - Global keyboard navigation handler
 * Arrow keys navigate between pages, numbers jump to projects
 */
export function KeyboardNav() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Get current route index
      const currentRouteIndex = ROUTES.indexOf(pathname);

      switch (e.key) {
        case 'h':
        case 'H':
          e.preventDefault();
          router.push('/');
          break;

        case 'p':
        case 'P':
          e.preventDefault();
          router.push('/projects');
          break;

        case 'a':
        case 'A':
          e.preventDefault();
          router.push('/about');
          break;

        case 'ArrowLeft':
          e.preventDefault();
          if (pathname.startsWith('/projects/')) {
            // Navigate to previous project
            const currentSlug = pathname.split('/').pop();
            const currentIndex = CASE_STUDIES.findIndex(
              (p) => p.slug === currentSlug
            );
            if (currentIndex > 0) {
              router.push(`/projects/${CASE_STUDIES[currentIndex - 1].slug}`);
            }
          } else if (currentRouteIndex > 0) {
            router.push(ROUTES[currentRouteIndex - 1]);
          }
          break;

        case 'ArrowRight':
          e.preventDefault();
          if (pathname.startsWith('/projects/')) {
            // Navigate to next project
            const currentSlug = pathname.split('/').pop();
            const currentIndex = CASE_STUDIES.findIndex(
              (p) => p.slug === currentSlug
            );
            if (currentIndex < CASE_STUDIES.length - 1) {
              router.push(`/projects/${CASE_STUDIES[currentIndex + 1].slug}`);
            }
          } else if (currentRouteIndex < ROUTES.length - 1) {
            router.push(ROUTES[currentRouteIndex + 1]);
          }
          break;

        case 'Escape':
          e.preventDefault();
          if (pathname.startsWith('/projects/')) {
            router.push('/projects');
          } else {
            router.push('/');
          }
          break;

        // Number keys 1-9 jump to projects
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          e.preventDefault();
          const projectIndex = parseInt(e.key) - 1;
          if (projectIndex < CASE_STUDIES.length) {
            router.push(`/projects/${CASE_STUDIES[projectIndex].slug}`);
          }
          break;

        case '0':
          e.preventDefault();
          // 0 = project 10
          if (CASE_STUDIES.length >= 10) {
            router.push(`/projects/${CASE_STUDIES[9].slug}`);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router, pathname]);

  return null; // This component only handles events
}

export default KeyboardNav;
