import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const BaseLayout = styled.div(
  ({ theme }) => `
    font-family:${theme.fonts.Roboto} !important;
    height: 100%;
    text-align: center;
    background-color: ${theme.background};
    -webkit-transition:${theme.backgroundColorTransition};
    -ms-transition:${theme.backgroundColorTransition};
    transition:${theme.backgroundColorTransition};
  `
);

const LayoutGrid = styled.div(
  ({ theme }) => `
    display: grid;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
    text-align: center;
    grid-template-rows: 100px auto 100px;
    background-color: ${theme.background};
    max-width: ${theme.breakpoints.lg};
    -webkit-transition:${theme.backgroundColorTransition};
    -ms-transition:${theme.backgroundColorTransition};
    transition:${theme.backgroundColorTransition};

    @media screen and (max-width: ${theme.breakpoints.lg})  {
      grid-template-rows: 60px 1fr 100px;
    }
  `
);

const ChangeTheme = styled.div(
  ({ theme }) => `
  position: absolute;
  right: 0;
  padding: 10px;
  cursor: pointer;
  z-index: 111;

  @media screen and (max-width: ${theme.breakpoints.lg})  {
    right:auto;
    left:7px;
  }
`
);

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
