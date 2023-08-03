import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

// metadata는 프론트의 title dec 설정 가능
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

// layout 컴포넌트는 반드시 childern prop을 포함해야한다
// RootLayout은 최상위에 있는것이므로 모든 페이지에 렌더링되며 리렌더링 되지 않는다
// layout은 기본적으로 서버 컴포넌트이다

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        {/* Provider 추가해서 모든 컴포넌트에서 session 사용 가능 */}
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
