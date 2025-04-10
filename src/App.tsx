import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router';
import Home from './components/blogArticles/homePage/NL/Home-NL';
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
import { useCallback } from 'react';
import styles from './App.module.scss';
import ErrorPage from './components/animatedComponents/404/errorPage';
import Logo from './components/logo/Logo';

// A function that closes the menu. It will be used after clicking on menu links. Maybe ADS could implement a better system. Or maybe I didn't discover that yet 😅.
const closeMenu = () => {
  const button = document.querySelector(
    'button.ams-header__mega-menu-button[aria-expanded="true"]'
  );
  if (button instanceof HTMLButtonElement) {
    button.click();
  }
};

function ConferenceLinks() {
  const navigate = useNavigate();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const goToPageOne = useCallback(() => {
    navigate(isEnglish ? '/en/ai-meetup' : '/ai-meetup');
    closeMenu();
  }, [navigate, isEnglish]);

  const goToPageTwo = useCallback(() => {
    navigate(isEnglish ? '/en/devworld2025' : '/devworld2025');
    closeMenu();
  }, [navigate, isEnglish]);

  return (
    <Grid.Cell span={4}>
      <Heading level={2}>Conferences & Meetups</Heading>
      <LinkList>
        <LinkList.Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goToPageOne();
          }}
        >
          AI On The Amstel Meetup, Amsterdam
        </LinkList.Link>
        <LinkList.Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goToPageTwo();
          }}
        >
          DEVWORLD 2025, Amsterdam
        </LinkList.Link>
      </LinkList>
    </Grid.Cell>
  );
}

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const handleTranslate = () => {
    if (isEnglish) {
      navigate(location.pathname.replace('/en', ''));
    } else {
      navigate('/en' + location.pathname);
    }
    closeMenu();
  };

  return (
    <div className={styles.appWrapper}>
      <Logo />
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
      <div className={`scrollContainer ${styles.scrollContainer}`}>
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
