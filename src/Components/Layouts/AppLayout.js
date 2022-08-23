import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const BaseLayout = styled.div(
  ({ theme }) => `
    background-color: ${theme.background};
    width: 100vw;
    height: 100vh;
    text-align: center;
    -webkit-transition:${theme.backgroundColorTransition};
    -ms-transition:${theme.backgroundColorTransition};
    transition:${theme.backgroundColorTransition};
    font-family:${theme.fonts.Roboto} !important;
  `
);

const LayoutGrid = styled.div(
  ({ theme }) => `
    display: grid;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
    text-align: center;
    grid-template-rows: 100px 1fr 100px;
    background-color: ${theme.background};
    max-width: ${theme.breakpoints.lg};
    -webkit-transition:${theme.backgroundColorTransition};
    -ms-transition:${theme.backgroundColorTransition};
    transition:${theme.backgroundColorTransition};
  `
);

const ChangeTheme = styled.div`
  position: absolute;
  right: 0;
  padding: 10px;
  cursor: pointer;
  z-index: 111;
`;

const AppLayout = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <BaseLayout>
      <ChangeTheme title="Change theme" onClick={props.onSelectTheme}>
        {themeContext.changeThemeIcon}
      </ChangeTheme>
      <LayoutGrid>{props.children}</LayoutGrid>
    </BaseLayout>
  );
};

export default AppLayout;
