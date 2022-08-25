import styled from "styled-components";
import "./Terminal.css";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import macOSDirectoryIcon from "../../assets/images/macos-directory.png";

const Layout = styled.div(
  ({ theme }) => `
    display: grid;
    grid-template-rows: 35px auto;
    box-shadow: ${theme.boxShadow};
    margin-bottom: ${theme.console.marginBottom};
    font-family:${theme.fonts.Courier};
  `
);

const Navbar = styled.div(
  ({ theme }) => `
    display:flex;
    grid-row:1/2;
    background-color:${theme.console.navbar.background};
    border-radius:${theme.console.navbar.borderRadius};
    padding:${theme.console.navbar.padding};
    align-items:center;
    `
);

const Window = styled.div(
  ({ theme }) => `
    background-color:${theme.console.window.background};
    border-radius:${theme.console.window.borderRadius};
    padding: ${theme.console.window.padding};
    text-align:left;
    `
);

const WindowTitle = styled.span(
  ({ theme }) => `
    position:absolute;
    display:flex;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    justify-content:center;
    align-items:center;
    `
);

const WindowIcon = styled.img(
  ({ theme }) => `
    height:${theme.console.window.iconSize};
    `
);

const Path = styled.span(
  ({ theme }) => `
    font-size: ${theme.fontSizes.console};
    color:${theme.console.window.fontPathColor};
    `
);

const Row = styled.div`
  margin: 16px 0;
`;

const Main = styled.span(
  ({ theme }) => `
    font-size: ${theme.fontSizes.console};
    color:${theme.console.window.fontPathColorMain};
    `
);

const InlineCommand = styled.span(
  ({ theme }) => `
    font-size: ${theme.fontSizes.console};
    color:${theme.console.window.fontCommandColor};
    `
);

const ColumnCommand = styled.p(
  ({ theme }) => `
      font-size: ${theme.fontSizes.console};
      color:${theme.console.window.fontCommandColor};
      display:grid;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: ${theme.breakpoints.md})  {
        grid-template-columns: 1fr;
      }
      `
);

const ListCommand = styled.div(
  ({ theme }) => `
      font-size: ${theme.fontSizes.console};
      color:${theme.console.window.fontCommandColor};
      `
);

const Button = styled.div(
  ({ theme, color }) => `
    height:${theme.console.button.height};
    width:${theme.console.button.height};
    margin-left:${theme.console.button.marginLeft};
    border-radius:50%;
    background-color:${color};
    `
);

const Console = (props) => {
  const themeContext = useContext(ThemeContext);
  const buttonsColor = themeContext.console.button;

  return (
    <Layout>
      <Navbar>
        <Button color={buttonsColor.closeButtonColor} />
        <Button color={buttonsColor.minimizeButtonColor} />
        <Button color={buttonsColor.fullScreenButtonColor} />
        <WindowTitle>
          <WindowIcon src={macOSDirectoryIcon} />
          {props.windowData.title}
        </WindowTitle>
      </Navbar>
      <Window>
        {props.windowData.data.map((data, index) => {
          return (
            <Row key={index}>
              <Path key={index}>
                {data.path} {data.isMain ? <Main>(main)</Main> : ""}{" "}
                {data.useDollarSign ? <span> $ </span> : ""}
              </Path>
              {data.commandType === "inline" ? (
                <InlineCommand>
                  {data.command.map((command, index) => (
                    <span key={index}>{command}</span>
                  ))}
                </InlineCommand>
              ) : data.commandType === "column" ? (
                <ColumnCommand>
                  {data.command.map((command, index) => (
                    <span className="command-line-row" key={index}>
                      {command}
                    </span>
                  ))}
                </ColumnCommand>
              ) : (
                <ListCommand>
                  {data.command.map((command, index) => (
                    <div className="command-line-row" key={index}>
                      {command}
                    </div>
                  ))}
                </ListCommand>
              )}
            </Row>
          );
        })}
      </Window>
    </Layout>
  );
};

export default Console;
