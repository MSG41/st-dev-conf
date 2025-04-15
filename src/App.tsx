import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router';
import Home from './components/blogArticles/homePage/NL/Home-NL';
import About from './components/about/NL/About-NL';
import AboutEn from './components/about/EN/About-EN';
import PageOne from './components/blogArticles/AIMeetupFeb2025/NL/PageOne-NL';
import PageTwo from './components/blogArticles/DEVWORLD2025/NL/PageTwo-NL';
import HomeEn from './components/blogArticles/homePage/EN/Home-EN';
import PageOneEn from './components/blogArticles/AIMeetupFeb2025/EN/PageOne-EN';
import PageTwoEn from './components/blogArticles/DEVWORLD2025/EN/PageTwo-EN';
import {
  Header,
  Grid,
  LinkList,
  Heading,
} from '@amsterdam/design-system-react';
import { useCallback, useEffect, useRef } from 'react';
import styles from './App.module.scss';
import ErrorPage from './components/animatedComponents/404/errorPage';
import Logo from './components/logo/Logo';
import ThemeToggle from './components/themeToggle/ThemeToggle';

const closeMenu = () => {
  const button = document.querySelector(
    'button.ams-header__mega-menu-button[aria-expanded="true"]'
  );
  if (button instanceof HTMLButtonElement) {
    button.click();
  }
};

const isMenuOpen = () => {
  const button = document.querySelector('button.ams-header__mega-menu-button');
  return button?.getAttribute('aria-expanded') === 'true';
};

function ConferenceLinks() {
  const navigate = useNavigate();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const navigateTo = useCallback(
    (basePath: string) => {
      const fullPath = isEnglish ? `/en${basePath}` : basePath;
      navigate(fullPath);
      closeMenu();
    },
    [navigate, isEnglish]
  );

  return (
    <Grid.Cell span={4}>
      <Heading level={2}>Conferences & Meetups</Heading>
      <LinkList>
        <LinkList.Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/ai-meetup');
          }}
        >
          AI On The Amstel Meetup, Amsterdam
        </LinkList.Link>
        <LinkList.Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/devworld2025');
          }}
        >
          DEVWORLD 2025, Amsterdam
        </LinkList.Link>
      </LinkList>
      <Heading level={2}>About</Heading>
      <LinkList>
        <LinkList.Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/about');
          }}
        >
          About This Blog
        </LinkList.Link>
      </LinkList>
    </Grid.Cell>
  );
}

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const previousPathRef = useRef(location.pathname);

  const handleTranslate = () => {
    if (isEnglish) {
      navigate(location.pathname.replace('/en', ''));
    } else {
      navigate('/en' + location.pathname);
    }
    closeMenu();
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    if (previousPathRef.current !== location.pathname) {
      scrollContainer.scrollTo(0, 0);
      previousPathRef.current = location.pathname;
    }

    const handleScroll = () => isMenuOpen() && closeMenu();

    const handleClickOutside = (event: MouseEvent) => {
      if (!isMenuOpen()) return;

      const menuElement = document.querySelector('.ams-header__mega-menu');
      const menuButton = document.querySelector(
        'button.ams-header__mega-menu-button'
      );

      if (
        menuElement?.contains(event.target as Node) ||
        menuButton?.contains(event.target as Node)
      ) {
        return;
      }

      closeMenu();
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [location.pathname]);

  return (
    <div className={styles.appWrapper}>
      <Logo />
      <ThemeToggle />
      <div className={styles.navbarShadow}></div>
      <Header
        className={`${styles.navbar} ${styles.fixedHeader}`}
        brandName="Blog - Tech Conferences"
        menuItems={[
          <Header.MenuLink
            key="1"
            href="#"
            lang="en"
            onClick={(e) => {
              e.preventDefault();
              handleTranslate();
            }}
          >
            {isEnglish ? 'Terug naar Nederlands' : 'Translate to English'}
          </Header.MenuLink>,
        ]}
      >
        <Grid paddingBottom="large">
          <Header.GridCellNarrowWindowOnly span="all">
            <LinkList>
              <LinkList.Link
                href="#"
                lang="en"
                onClick={(e) => {
                  e.preventDefault();
                  handleTranslate();
                }}
              >
                {isEnglish ? 'Terug naar Nederlands' : 'Translate to English'}
              </LinkList.Link>
            </LinkList>
          </Header.GridCellNarrowWindowOnly>
          <ConferenceLinks />
        </Grid>
      </Header>
      <div
        className={`scrollContainer ${styles.scrollContainer}`}
        ref={scrollContainerRef}
      >
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/en/about', element: <AboutEn /> },
      { path: '/ai-meetup', element: <PageOne /> },
      { path: '/devworld2025', element: <PageTwo /> },
      { path: '/en', element: <HomeEn /> },
      { path: '/en/ai-meetup', element: <PageOneEn /> },
      { path: '/en/devworld2025', element: <PageTwoEn /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
