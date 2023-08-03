import Feed from "@Components/Feed";

// 각 페이지는 CSR 클라이언트 렌더링을 사용
// 컴포넌트 별로 SSR 서버컴포넌트 사용
const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> AI-Powered Prompts</span>
    </h1>
    <p className="desc text-center">
      Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
    </p>
    <Feed />
  </section>
);

export default Home;
