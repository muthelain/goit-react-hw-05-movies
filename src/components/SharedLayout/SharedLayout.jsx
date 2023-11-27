import { Suspense, useEffect, useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Container, Header, StyledNavLink } from './SharedLayout.styled';

export default function SharedLayout() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    // Определяем, какая кнопка должна быть активной на основе текущего пути
    if (location.pathname === '/') {
      setActiveButton('home');
    } else if (location.pathname.startsWith('/movies')) {
      setActiveButton('movies');
    } else {
      setActiveButton('');
    }
  }, [location.pathname]);

  // Эффект при монтировании компонента
  useEffect(() => {
    // Если путь не совпадает ни с одним из условий, устанавливаем активной кнопку "Home"
    if (!activeButton) {
      setActiveButton('home');
    }
  }, [activeButton]);

  return (
    <Container>
      <Header>
        <NavLink to="/" activeClassName="active-link" exact>
          <StyledNavLink isActive={activeButton === 'home'}>Home</StyledNavLink>
        </NavLink>
        <NavLink to="/movies" activeClassName="active-link">
          <StyledNavLink isActive={activeButton === 'movies'}>Movies</StyledNavLink>
        </NavLink>
      </Header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}




