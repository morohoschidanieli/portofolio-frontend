import styled from "styled-components";

const BaseLayout = styled.div(
  ({ theme }) => `
    background-color: ${theme.background};
    width: 100vw;
    height: 100vh;
    text-align: center;
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
    height: 100vh;
    text-align: center;
    grid-template-rows: 100px 1fr 100px;
    background-color: ${theme.background};
    max-width: ${theme.breakpoints.lg};
  `
);
const AppLayout = (props) => {
  return (
    <BaseLayout>
      <LayoutGrid>{props.children}</LayoutGrid>
    </BaseLayout>
  );
};

export default AppLayout;
